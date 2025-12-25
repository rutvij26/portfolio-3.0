"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ReactNode } from "react";

export function ReCaptchaProvider({ children }: { children: ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  if (!siteKey) {
    // If reCAPTCHA is not configured, just render children
    return <>{children}</>;
  }

  try {
    return (
      <GoogleReCaptchaProvider
        reCaptchaKey={siteKey}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
        useEnterprise={false}
      >
        {children}
      </GoogleReCaptchaProvider>
    );
  } catch (error) {
    // If reCAPTCHA fails to initialize, render children without it
    console.warn(
      "reCAPTCHA initialization failed, continuing without it:",
      error
    );
    return <>{children}</>;
  }
}
