import { render } from '@testing-library/react';
import { ReCaptchaProvider } from '../ReCaptchaProvider';

jest.mock('react-google-recaptcha-v3', () => ({
  GoogleReCaptchaProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('ReCaptchaProvider', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should render children when site key is not provided', () => {
    delete process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const { container } = render(
      <ReCaptchaProvider>
        <div>Test Child</div>
      </ReCaptchaProvider>
    );
    expect(container.textContent).toBe('Test Child');
  });

  it('should render provider when site key is provided', () => {
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY = 'test-key';
    const { container } = render(
      <ReCaptchaProvider>
        <div>Test Child</div>
      </ReCaptchaProvider>
    );
    expect(container.textContent).toBe('Test Child');
  });
});

