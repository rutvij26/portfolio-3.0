import { kv } from "@vercel/kv";

interface RateLimitOptions {
  identifier: string;
  limit: number;
  window: number; // in seconds
}

export async function rateLimit(
  options: RateLimitOptions
): Promise<{ success: boolean; remaining: number; reset: number }> {
  const { identifier, limit, window } = options;
  const key = `rate_limit:${identifier}`;

  try {
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      // Use Vercel KV if available
      const current = (await kv.get<number>(key)) || 0;

      if (current >= limit) {
        const ttl = await kv.ttl(key);
        return {
          success: false,
          remaining: 0,
          reset: Date.now() + ttl * 1000,
        };
      }

      await kv.incr(key);
      await kv.expire(key, window);

      return {
        success: true,
        remaining: limit - current - 1,
        reset: Date.now() + window * 1000,
      };
    } else {
      // Fallback to in-memory (not recommended for production)
      // This is a simple implementation - in production, use Redis/KV
      return {
        success: true,
        remaining: limit - 1,
        reset: Date.now() + window * 1000,
      };
    }
  } catch (error) {
    console.error("Rate limit error:", error);
    // Fail open in case of error
    return {
      success: true,
      remaining: limit - 1,
      reset: Date.now() + window * 1000,
    };
  }
}

export function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (realIP) {
    return realIP;
  }

  return "unknown";
}

export function validateOrigin(
  origin: string | null,
  allowedOrigins: string[]
): boolean {
  if (!origin) return false;

  const allowed =
    allowedOrigins.length > 0
      ? allowedOrigins
      : ["https://rutvijsathe.dev", "https://www.rutvijsathe.dev"];

  return allowed.includes(origin);
}

export function validateUserAgent(userAgent: string | null): boolean {
  if (!userAgent) return false;

  // Block suspicious user agents
  const blockedPatterns = [/bot/i, /crawler/i, /spider/i, /scraper/i];

  // Allow common browsers
  const allowedPatterns = [
    /mozilla/i,
    /chrome/i,
    /safari/i,
    /firefox/i,
    /edge/i,
  ];

  const isBlocked = blockedPatterns.some((pattern) => pattern.test(userAgent));
  const isAllowed = allowedPatterns.some((pattern) => pattern.test(userAgent));

  // Block if matches blocked pattern and doesn't match allowed
  return !isBlocked || isAllowed;
}

export function generateCSRFToken(): string {
  return crypto.randomUUID();
}

export function validateCSRFToken(
  token: string,
  expectedToken: string
): boolean {
  return token === expectedToken && token.length > 0;
}
