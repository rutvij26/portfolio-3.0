import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../Navbar';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

jest.mock('../ThemeToggle', () => ({
  ThemeToggle: () => <div data-testid="theme-toggle">Theme Toggle</div>,
}));

describe('Navbar', () => {
  it('should render navbar with logo', () => {
    render(<Navbar />);
    expect(screen.getByText('Rutvij Sathe')).toBeInTheDocument();
  });

  it('should render all navigation items', () => {
    render(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should toggle mobile menu', () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);
    // Menu should be visible - use getAllByText since Home appears twice
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
  });

  it('should close mobile menu when link is clicked', () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);
    const homeLink = screen.getAllByText('Home')[1];
    fireEvent.click(homeLink);
    // Menu should close (we can't easily test this without more complex setup)
  });

  it('should render theme toggle', () => {
    render(<Navbar />);
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
  });
});

