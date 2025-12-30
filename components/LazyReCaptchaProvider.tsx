"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ReactNode, useEffect, useState } from "react";

export function LazyReCaptchaProvider({ children }: { children: ReactNode }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  useEffect(() => {
    // Only load reCAPTCHA when component mounts (user is on contact page)
    setShouldLoad(true);
  }, []);

  if (!siteKey) {
    return <>{children}</>;
  }

  if (!shouldLoad) {
    return <>{children}</>;
  }

  try {
    return (
      <GoogleReCaptchaProvider
        reCaptchaKey={siteKey}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: "head",
          nonce: undefined,
        }}
        useEnterprise={false}
      >
        {children}
      </GoogleReCaptchaProvider>
    );
  } catch (error) {
    console.warn(
      "reCAPTCHA initialization failed, continuing without it:",
      error
    );
    return <>{children}</>;
  }
}

