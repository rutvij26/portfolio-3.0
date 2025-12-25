import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  rateLimit,
  getClientIP,
  validateOrigin,
  validateUserAgent,
} from "@/lib/security";
import {
  sanitizeString,
  sanitizeEmail,
  validateEmail,
  isSuspiciousContent,
  sanitizeHTML,
} from "@/lib/sanitize";
// Analytics tracking is done client-side

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
  recaptchaToken?: string;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return true; // Skip if not configured
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const data = await response.json();
    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = getClientIP(request);
    const rateLimitResult = await rateLimit({
      identifier: `contact:${ip}`,
      limit: 3,
      window: 3600, // 1 hour
    });

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Validate request origin
    const origin = request.headers.get("origin");
    if (!validateOrigin(origin, [])) {
      return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
    }

    // Validate user agent
    const userAgent = request.headers.get("user-agent");
    if (!validateUserAgent(userAgent)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 403 });
    }

    // Parse and validate request body
    const body: ContactFormData = await request.json();

    // Check honeypot
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Verify reCAPTCHA (only if configured and token provided)
    if (process.env.RECAPTCHA_SECRET_KEY && body.recaptchaToken) {
      const recaptchaValid = await verifyRecaptcha(body.recaptchaToken);
      if (!recaptchaValid) {
        // Log but don't block if reCAPTCHA fails (other security measures are in place)
        console.warn(
          "reCAPTCHA verification failed, but allowing submission due to other security measures"
        );
        // Uncomment the line below to enforce reCAPTCHA strictly
        // return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
      }
    }

    // Sanitize inputs
    const name = sanitizeString(body.name, 100);
    const email = sanitizeEmail(body.email);
    const subject = sanitizeString(body.subject, 50);
    const message = sanitizeHTML(sanitizeString(body.message, 2000));

    // Validate email
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check for spam
    if (isSuspiciousContent(message)) {
      return NextResponse.json(
        { error: "Message contains suspicious content" },
        { status: 400 }
      );
    }

    // Send email
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const emailResult = await resend.emails.send({
      from: "Portfolio Contact <contact@rutvijsathe.dev>",
      to: process.env.CONTACT_EMAIL || "contact@rutvijsathe.dev",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      reply_to: email,
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
