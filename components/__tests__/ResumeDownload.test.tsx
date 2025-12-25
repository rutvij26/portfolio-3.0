import { render, screen, fireEvent } from '@testing-library/react';
import { ResumeDownload } from '../ResumeDownload';
import { trackResumeDownload } from '@/lib/analytics';

jest.mock('@/lib/analytics', () => ({
  trackResumeDownload: jest.fn(),
}));

// Mock window.open
const mockOpen = jest.fn();
window.open = mockOpen;

describe('ResumeDownload', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render button variant by default', () => {
    render(<ResumeDownload />);
    const button = screen.getByText('Download Resume');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
  });

  it('should render link variant', () => {
    render(<ResumeDownload variant="link" />);
    const link = screen.getByText('Download Resume');
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/api/resume');
  });

  it('should track download and open resume on button click', () => {
    render(<ResumeDownload />);
    const button = screen.getByText('Download Resume');
    fireEvent.click(button);

    expect(trackResumeDownload).toHaveBeenCalled();
    expect(mockOpen).toHaveBeenCalledWith('/api/resume', '_blank', 'noopener,noreferrer');
  });

  it('should track download and prevent default on link click', () => {
    render(<ResumeDownload variant="link" />);
    const link = screen.getByText('Download Resume');
    const preventDefault = jest.fn();
    
    fireEvent.click(link, { preventDefault });

    expect(trackResumeDownload).toHaveBeenCalled();
    expect(mockOpen).toHaveBeenCalledWith('/api/resume', '_blank', 'noopener,noreferrer');
  });

  it('should apply custom className', () => {
    render(<ResumeDownload className="custom-class" />);
    const button = screen.getByText('Download Resume');
    expect(button).toHaveClass('custom-class');
  });
});

