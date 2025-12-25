import { GET } from '../og/route';
import { NextRequest } from 'next/server';
import { ImageResponse } from '@vercel/og';

jest.mock('@vercel/og', () => ({
  ImageResponse: jest.fn().mockImplementation(() => ({
    status: 200,
    headers: new Headers(),
  })),
}));

describe('GET /api/og', () => {
  it('should generate OG image with default values', async () => {
    const request = new NextRequest('http://localhost/api/og');
    await GET(request);

    expect(ImageResponse).toHaveBeenCalled();
  });

  it('should use custom title and description from query params', async () => {
    const request = new NextRequest('http://localhost/api/og?title=Test&description=Test Desc');
    await GET(request);

    expect(ImageResponse).toHaveBeenCalled();
  });

  it('should handle errors gracefully', async () => {
    (ImageResponse as jest.Mock).mockImplementation(() => {
      throw new Error('Failed');
    });

    const request = new NextRequest('http://localhost/api/og');
    const response = await GET(request);

    expect(response.status).toBe(500);
  });
});

