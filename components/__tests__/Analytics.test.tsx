import { render } from '@testing-library/react';
import { Analytics } from '../Analytics';
import { initAnalytics, trackPageView } from '@/lib/analytics';

jest.mock('@/lib/analytics', () => ({
  initAnalytics: jest.fn(),
  trackPageView: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  usePathname: () => '/test-path',
}));

describe('Analytics', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize analytics on mount', () => {
    render(<Analytics />);
    expect(initAnalytics).toHaveBeenCalled();
  });

  it('should track page view on mount', () => {
    render(<Analytics />);
    expect(trackPageView).toHaveBeenCalledWith('/test-path');
  });

  it('should return null', () => {
    const { container } = render(<Analytics />);
    expect(container.firstChild).toBeNull();
  });
});

