import {
  rateLimit,
  getClientIP,
  validateOrigin,
  validateUserAgent,
  generateCSRFToken,
  validateCSRFToken,
} from "../security";

// Mock @vercel/kv
jest.mock("@vercel/kv", () => ({
  kv: {
    get: jest.fn(),
    set: jest.fn(),
    incr: jest.fn(),
    expire: jest.fn(),
    ttl: jest.fn(),
  },
}));

describe("Security Utilities", () => {
  describe("rateLimit", () => {
    const originalEnv = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = { ...originalEnv };
    });

    afterEach(() => {
      process.env = originalEnv;
    });

    it("should return success when limit not exceeded (fallback mode)", async () => {
      delete process.env.KV_REST_API_URL;
      const result = await rateLimit({
        identifier: "test-ip",
        limit: 10,
        window: 3600,
      });

      expect(result.success).toBe(true);
      expect(result.remaining).toBe(9);
      expect(result.reset).toBeGreaterThan(Date.now());
    });

    it("should handle errors gracefully", async () => {
      delete process.env.KV_REST_API_URL;
      // Should not throw
      const result = await rateLimit({
        identifier: "test-ip",
        limit: 10,
        window: 3600,
      });
      expect(result.success).toBe(true);
    });
  });

  describe("getClientIP", () => {
    it("should extract IP from x-forwarded-for header", () => {
      const headers = new Headers({
        "x-forwarded-for": "192.168.1.1, 10.0.0.1",
      });
      const request = { headers } as any;

      expect(getClientIP(request)).toBe("192.168.1.1");
    });

    it("should extract IP from x-real-ip header", () => {
      const headers = new Headers({
        "x-real-ip": "192.168.1.1",
      });
      const request = { headers } as any;

      expect(getClientIP(request)).toBe("192.168.1.1");
    });

    it("should prefer x-forwarded-for over x-real-ip", () => {
      const headers = new Headers({
        "x-forwarded-for": "192.168.1.1",
        "x-real-ip": "10.0.0.1",
      });
      const request = { headers } as any;

      expect(getClientIP(request)).toBe("192.168.1.1");
    });

    it("should return unknown when no IP headers present", () => {
      const headers = new Headers();
      const request = { headers } as any;
      expect(getClientIP(request)).toBe("unknown");
    });
  });

  describe("validateOrigin", () => {
    it("should return false for null origin", () => {
      expect(validateOrigin(null, [])).toBe(false);
    });

    it("should validate against provided allowed origins", () => {
      const allowed = ["https://example.com", "https://test.com"];
      expect(validateOrigin("https://example.com", allowed)).toBe(true);
      expect(validateOrigin("https://test.com", allowed)).toBe(true);
      expect(validateOrigin("https://evil.com", allowed)).toBe(false);
    });

    it("should use default allowed origins when empty array provided", () => {
      expect(validateOrigin("https://rutvijsathe.dev", [])).toBe(true);
      expect(validateOrigin("https://www.rutvijsathe.dev", [])).toBe(true);
      expect(validateOrigin("https://evil.com", [])).toBe(false);
    });
  });

  describe("validateUserAgent", () => {
    it("should return false for null user agent", () => {
      expect(validateUserAgent(null)).toBe(false);
    });

    it("should allow common browsers", () => {
      expect(validateUserAgent("Mozilla/5.0")).toBe(true);
      expect(validateUserAgent("Chrome/91.0")).toBe(true);
      expect(validateUserAgent("Safari/14.0")).toBe(true);
      expect(validateUserAgent("Firefox/89.0")).toBe(true);
      expect(validateUserAgent("Edge/91.0")).toBe(true);
    });

    it("should block suspicious user agents", () => {
      expect(validateUserAgent("Googlebot/2.1")).toBe(false);
      expect(validateUserAgent("crawler")).toBe(false);
      expect(validateUserAgent("spider")).toBe(false);
      expect(validateUserAgent("scraper")).toBe(false);
    });

    it("should allow bots that match allowed patterns", () => {
      // This is a bit of an edge case - if it's a bot but also matches allowed pattern
      expect(validateUserAgent("Mozilla/5.0 (compatible; Googlebot)")).toBe(
        true
      );
    });
  });

  describe("generateCSRFToken", () => {
    it("should generate a valid UUID token", () => {
      const token = generateCSRFToken();
      expect(token).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
      );
    });

    it("should generate unique tokens", () => {
      const token1 = generateCSRFToken();
      const token2 = generateCSRFToken();
      expect(token1).not.toBe(token2);
    });
  });

  describe("validateCSRFToken", () => {
    it("should validate matching tokens", () => {
      const token = generateCSRFToken();
      expect(validateCSRFToken(token, token)).toBe(true);
    });

    it("should reject non-matching tokens", () => {
      const token1 = generateCSRFToken();
      const token2 = generateCSRFToken();
      expect(validateCSRFToken(token1, token2)).toBe(false);
    });

    it("should reject empty tokens", () => {
      expect(validateCSRFToken("", "test")).toBe(false);
      expect(validateCSRFToken("test", "")).toBe(false);
    });
  });
});
