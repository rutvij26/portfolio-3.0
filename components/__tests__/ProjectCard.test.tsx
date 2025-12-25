import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectCard } from '../ProjectCard';
import { trackProjectView } from '@/lib/analytics';
import { Project } from '@/types';

jest.mock('@/lib/analytics', () => ({
  trackProjectView: jest.fn(),
}));

const mockOpen = jest.fn();
window.open = mockOpen;

const mockProject: Project = {
  id: '1',
  name: 'Test Project',
  description: 'Test Description',
  summary: 'Test Summary',
  githubUrl: 'https://github.com/test/project',
  language: 'TypeScript',
  technologies: ['React', 'Next.js'],
  featured: true,
  slug: 'test-project',
};

describe('ProjectCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render project information', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test Summary')).toBeInTheDocument();
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('should render technologies', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('should track project view on external link click', () => {
    render(<ProjectCard project={mockProject} />);
    const githubLink = screen.getByText('GitHub');
    fireEvent.click(githubLink);
    expect(trackProjectView).toHaveBeenCalledWith('Test Project');
    expect(mockOpen).toHaveBeenCalled();
  });

  it('should render live demo link if URL provided', () => {
    const projectWithUrl = { ...mockProject, url: 'https://example.com' };
    render(<ProjectCard project={projectWithUrl} />);
    expect(screen.getByText('Live Demo')).toBeInTheDocument();
  });

  it('should render details link if slug provided', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Details')).toBeInTheDocument();
  });

  it('should not render featured badge if not featured', () => {
    const nonFeaturedProject = { ...mockProject, featured: false };
    render(<ProjectCard project={nonFeaturedProject} />);
    expect(screen.queryByText('Featured')).not.toBeInTheDocument();
  });
});

