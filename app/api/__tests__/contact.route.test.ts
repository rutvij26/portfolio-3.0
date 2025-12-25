import { POST } from '../contact/route';
import { rateLimit, getClientIP, validateOrigin, validateUserAgent } from '@/lib/security';
import { sanitizeString, sanitizeEmail, validateEmail, isSuspiciousContent } from '@/lib/sanitize';
import { Resend } from 'resend';

jest.mock('@/lib/security');
jest.mock('@/lib/sanitize');
jest.mock('resend');

// Mock NextRequest
jest.mock('next/server', () => ({
  NextRequest: class NextRequest {
    url: string;
    method: string;
    headers: Headers;
    _body: any;
    constructor(input: string, init: any = {}) {
      this.url = input;
      this.method = init.method || 'GET';
      this.headers = init.headers || new Headers();
      this._body = init.body || null;
    }
    async json() {
      if (typeof this._body === 'string') {
        return JSON.parse(this._body);
      }
      return this._body || {};
    }
  },
  NextResponse: {
    json: (body: any, init?: any) => ({
      json: async () => body,
      status: init?.status || 200,
      headers: new Headers(init?.headers || {}),
    }),
    next: (init?: any) => ({
      status: 200,
      headers: new Headers(init?.headers || {}),
    }),
  },
}));

const mockRateLimit = rateLimit as jest.MockedFunction<typeof rateLimit>;
const mockGetClientIP = getClientIP as jest.MockedFunction<typeof getClientIP>;
const mockValidateOrigin = validateOrigin as jest.MockedFunction<typeof validateOrigin>;
const mockValidateUserAgent = validateUserAgent as jest.MockedFunction<typeof validateUserAgent>;
const mockSanitizeString = sanitizeString as jest.MockedFunction<typeof sanitizeString>;
const mockSanitizeEmail = sanitizeEmail as jest.MockedFunction<typeof sanitizeEmail>;
const mockValidateEmail = validateEmail as jest.MockedFunction<typeof validateEmail>;
const mockIsSuspiciousContent = isSuspiciousContent as jest.MockedFunction<typeof isSuspiciousContent>;

const mockResendSend = jest.fn();
(Resend as jest.Mock).mockImplementation(() => ({
  emails: {
    send: mockResendSend,
  },
}));

describe('POST /api/contact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.RESEND_API_KEY = 'test-key';
    process.env.CONTACT_EMAIL = 'test@example.com';
    
    mockRateLimit.mockResolvedValue({ success: true, remaining: 5, reset: Date.now() + 3600000 });
    mockGetClientIP.mockReturnValue('127.0.0.1');
    mockValidateOrigin.mockReturnValue(true);
    mockValidateUserAgent.mockReturnValue(true);
    mockSanitizeString.mockImplementation((str) => str);
    mockSanitizeEmail.mockImplementation((email) => email);
    mockValidateEmail.mockReturnValue(true);
    mockIsSuspiciousContent.mockReturnValue(false);
    mockResendSend.mockResolvedValue({ data: { id: 'test-id' }, error: null });
  });

  it('should reject non-POST requests', async () => {
    const { NextRequest } = require('next/server');
    const request = new NextRequest('http://localhost/api/contact', { 
      method: 'GET',
      headers: new Headers(),
    });
    const response = await POST(request);
    expect(response.status).toBe(405);
  });

  it('should reject requests with honeypot filled', async () => {
    const { NextRequest } = require('next/server');
    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        name: 'Test',
        email: 'test@example.com',
        subject: 'Question',
        message: 'Test message',
        honeypot: 'filled',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('should reject suspicious content', async () => {
    mockIsSuspiciousContent.mockReturnValue(true);
    const { NextRequest } = require('next/server');
    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        name: 'Test',
        email: 'test@example.com',
        subject: 'Question',
        message: 'Test message',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('should reject invalid email', async () => {
    mockValidateEmail.mockReturnValue(false);
    const { NextRequest } = require('next/server');
    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        name: 'Test',
        email: 'invalid-email',
        subject: 'Question',
        message: 'Test message',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('should send email successfully', async () => {
    const { NextRequest } = require('next/server');
    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Question',
        message: 'Test message',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
    expect(mockResendSend).toHaveBeenCalled();
  });

  it('should handle rate limiting', async () => {
    mockRateLimit.mockResolvedValue({ success: false, remaining: 0, reset: Date.now() });
    const { NextRequest } = require('next/server');
    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        name: 'Test',
        email: 'test@example.com',
        subject: 'Question',
        message: 'Test message',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(429);
  });

  it('should handle invalid origin', async () => {
    mockValidateOrigin.mockReturnValue(false);
    const { NextRequest } = require('next/server');
    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        name: 'Test',
        email: 'test@example.com',
        subject: 'Question',
        message: 'Test message',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(403);
  });
});

