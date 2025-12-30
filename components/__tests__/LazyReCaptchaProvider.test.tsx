import { render } from "@testing-library/react";
import { LazyReCaptchaProvider } from "../LazyReCaptchaProvider";

jest.mock("react-google-recaptcha-v3", () => ({
  GoogleReCaptchaProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="recaptcha-provider">{children}</div>
  ),
}));

describe("LazyReCaptchaProvider", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("should render children when reCAPTCHA site key is not set", () => {
    delete process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const { getByText } = render(
      <LazyReCaptchaProvider>
        <div>Test Content</div>
      </LazyReCaptchaProvider>
    );
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("should render reCAPTCHA provider when site key is set", () => {
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY = "test-key";
    const { getByTestId, getByText } = render(
      <LazyReCaptchaProvider>
        <div>Test Content</div>
      </LazyReCaptchaProvider>
    );
    expect(getByTestId("recaptcha-provider")).toBeInTheDocument();
    expect(getByText("Test Content")).toBeInTheDocument();
  });
});

