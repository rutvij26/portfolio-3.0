import validator from "validator";

// Simple HTML sanitization - remove all HTML tags
export function sanitizeHTML(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

export function sanitizeString(input: string, maxLength?: number): string {
  let sanitized = input.trim();

  // Remove null bytes
  sanitized = sanitized.replace(/\0/g, "");

  // Remove control characters except newlines and tabs
  sanitized = sanitized.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, "");

  // Apply length limit
  if (maxLength && sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }

  return sanitized;
}

export function sanitizeEmail(email: string): string {
  return validator.normalizeEmail(email) || email;
}

export function sanitizeURL(url: string): string {
  if (!validator.isURL(url, { require_protocol: true })) {
    throw new Error("Invalid URL");
  }
  return validator.escape(url);
}

export function encodeHTML(text: string): string {
  return validator.escape(text);
}

export function encodeURL(text: string): string {
  return encodeURIComponent(text);
}

export function validateEmail(email: string): boolean {
  return validator.isEmail(email, {
    allow_utf8_local_part: false,
    require_tld: true,
  });
}

export function validateURL(url: string): boolean {
  return validator.isURL(url, {
    protocols: ["http", "https"],
    require_protocol: true,
  });
}

export function containsSpamKeywords(text: string): boolean {
  const spamKeywords = [
    "viagra",
    "casino",
    "lottery",
    "winner",
    "prize",
    "click here",
    "buy now",
    "limited time",
    "act now",
    "make money",
    "work from home",
    "get rich",
  ];

  const lowerText = text.toLowerCase();
  return spamKeywords.some((keyword) => lowerText.includes(keyword));
}

export function countLinks(text: string): number {
  const urlRegex = /https?:\/\/[^\s]+/g;
  const matches = text.match(urlRegex);
  return matches ? matches.length : 0;
}

export function isSuspiciousContent(text: string): boolean {
  // Check for excessive links
  const linkCount = countLinks(text);
  if (linkCount > 3) return true;

  // Check for spam keywords
  if (containsSpamKeywords(text)) return true;

  // Check for excessive special characters (potential obfuscation)
  const specialCharRatio =
    (text.match(/[^a-zA-Z0-9\s]/g) || []).length / text.length;
  if (specialCharRatio > 0.3) return true;

  return false;
}
