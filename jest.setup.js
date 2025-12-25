// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Polyfill for Request/Response APIs
import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Polyfill for Next.js Request/Response - must be before any Next.js imports
if (typeof global.Headers === "undefined") {
  global.Headers = class Headers {
    constructor(init = {}) {
      this._headers = {};
      if (init) {
        if (init instanceof Headers) {
          init.forEach((value, key) => {
            this._headers[key.toLowerCase()] = value;
          });
        } else if (Array.isArray(init)) {
          init.forEach(([key, value]) => {
            this._headers[key.toLowerCase()] = value;
          });
        } else {
          Object.entries(init).forEach(([key, value]) => {
            this._headers[key.toLowerCase()] = value;
          });
        }
      }
    }
    get(name) {
      return this._headers[name.toLowerCase()] || null;
    }
    set(name, value) {
      this._headers[name.toLowerCase()] = value;
    }
    has(name) {
      return name.toLowerCase() in this._headers;
    }
    forEach(callback) {
      Object.entries(this._headers).forEach(([key, value]) => {
        callback(value, key, this);
      });
    }
  };
}

if (typeof global.Request === "undefined") {
  global.Request = class Request {
    constructor(input, init = {}) {
      this.url = typeof input === "string" ? input : input?.url || "";
      this.method = init.method || "GET";
      this.headers = new Headers(init.headers || {});
      this.body = init.body || null;
      this.bodyUsed = false;
    }
    clone() {
      return new Request(this.url, {
        method: this.method,
        headers: this.headers,
        body: this.body,
      });
    }
  };
}

if (typeof global.Response === "undefined") {
  global.Response = class Response {
    constructor(body, init = {}) {
      this.body = body;
      this.status = init.status || 200;
      this.statusText = init.statusText || "OK";
      this.headers = new Headers(init.headers || {});
      this.ok = this.status >= 200 && this.status < 300;
    }
    async json() {
      return JSON.parse(this.body || "{}");
    }
    async text() {
      return this.body || "";
    }
    async arrayBuffer() {
      return this.body ? new Uint8Array(this.body).buffer : new ArrayBuffer(0);
    }
  };
}

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
    };
  },
  usePathname() {
    return "/";
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock next-themes
jest.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "light",
    setTheme: jest.fn(),
    resolvedTheme: "light",
  }),
  ThemeProvider: ({ children }) => children,
}));

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }) => children,
}));

// Mock window.dataLayer for Google Tag Manager
global.window.dataLayer = global.window.dataLayer || [];

// Mock @vercel/analytics
jest.mock("@vercel/analytics/react", () => ({
  Analytics: () => null,
}));
