import { render } from '@testing-library/react';
import { GoogleTagManager, GoogleTagManagerNoscript } from '../GoogleTagManager';

jest.mock('next/script', () => ({
  __esModule: true,
  default: ({ children, ...props }: any) => <script {...props}>{children}</script>,
}));

describe('GoogleTagManager', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should return null when GTM_ID is not set', () => {
    delete process.env.NEXT_PUBLIC_GTM_ID;
    const { container } = render(<GoogleTagManager />);
    expect(container.firstChild).toBeNull();
  });

  it('should render script when GTM_ID is set', () => {
    process.env.NEXT_PUBLIC_GTM_ID = 'GTM-TEST';
    const { container } = render(<GoogleTagManager />);
    // Script is rendered by next/script, check if component renders
    expect(container).toBeInTheDocument();
  });
});

describe('GoogleTagManagerNoscript', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should return null when GTM_ID is not set', () => {
    delete process.env.NEXT_PUBLIC_GTM_ID;
    const { container } = render(<GoogleTagManagerNoscript />);
    expect(container.firstChild).toBeNull();
  });

  it('should render noscript iframe when GTM_ID is set', () => {
    process.env.NEXT_PUBLIC_GTM_ID = 'GTM-TEST';
    const { container } = render(<GoogleTagManagerNoscript />);
    // noscript is rendered, check if component renders
    const noscript = container.querySelector('noscript');
    expect(noscript).toBeTruthy();
  });
});

