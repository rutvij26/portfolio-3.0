import { render } from '@testing-library/react';
import { ThemeProvider } from '../ThemeProvider';

jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('ThemeProvider', () => {
  it('should render children', () => {
    const { container } = render(
      <ThemeProvider>
        <div>Test Child</div>
      </ThemeProvider>
    );
    expect(container.textContent).toBe('Test Child');
  });
});

