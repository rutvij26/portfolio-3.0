import { middleware } from "../middleware";
import { NextRequest } from "next/server";

// Mock NextRequest to avoid Request polyfill issues
jest.mock("next/server", () => ({
  NextRequest: class NextRequest {
    url: string;
    method: string;
    headers: Headers;
    constructor(input: string, init: any = {}) {
      this.url = input;
      this.method = init.method || "GET";
      this.headers = new Headers(init.headers || {});
    }
  },
  NextResponse: {
    next: () => ({
      headers: new Headers(),
      status: 200,
    }),
  },
}));

describe("middleware", () => {
  it("should set security headers", async () => {
    const { NextRequest } = require("next/server");
    const request = new NextRequest("http://localhost/test");
    const response = await middleware(request);

    expect(response.headers.get("Content-Security-Policy")).toBeTruthy();
    expect(response.headers.get("X-Frame-Options")).toBe("DENY");
    expect(response.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(response.headers.get("Strict-Transport-Security")).toBeTruthy();
  });

  it("should handle OPTIONS request", async () => {
    const { NextRequest } = require("next/server");
    const request = new NextRequest("http://localhost/test", {
      method: "OPTIONS",
    });
    const response = await middleware(request);

    expect(response.status).toBe(204);
  });

  it("should set CORS headers for allowed origin", async () => {
    const { NextRequest } = require("next/server");
    const request = new NextRequest("http://localhost/test", {
      headers: new Headers({
        origin: "https://rutvijsathe.dev",
      }),
    });
    const response = await middleware(request);

    expect(response.headers.get("Access-Control-Allow-Origin")).toBe(
      "https://rutvijsathe.dev"
    );
  });

  it("should not set CORS headers for disallowed origin", async () => {
    const { NextRequest } = require("next/server");
    const request = new NextRequest("http://localhost/test", {
      headers: new Headers({
        origin: "https://evil.com",
      }),
    });
    const response = await middleware(request);

    expect(response.headers.get("Access-Control-Allow-Origin")).toBeNull();
  });
});
