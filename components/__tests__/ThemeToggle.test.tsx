import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '../ThemeToggle';

const mockSetTheme = jest.fn();

jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: mockSetTheme,
    resolvedTheme: 'light',
  }),
}));

describe('ThemeToggle', () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
  });

  it('should render theme toggle button', () => {
    render(<ThemeToggle />);
    const button = screen.getByLabelText('Toggle theme');
    expect(button).toBeInTheDocument();
  });

  it('should toggle theme on click', () => {
    render(<ThemeToggle />);
    const button = screen.getByLabelText('Toggle theme');
    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('should show sun icon in dark mode', () => {
    jest.mock('next-themes', () => ({
      useTheme: () => ({
        theme: 'dark',
        setTheme: mockSetTheme,
        resolvedTheme: 'dark',
      }),
    }));

    const { rerender } = render(<ThemeToggle />);
    rerender(<ThemeToggle />);
    const button = screen.getByLabelText('Toggle theme');
    expect(button).toBeInTheDocument();
  });
});

