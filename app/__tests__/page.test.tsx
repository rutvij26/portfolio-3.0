import { render, screen } from '@testing-library/react';
import Home from '../page';
import { getFeaturedProjects } from '@/lib/github';

jest.mock('@/lib/github', () => ({
  getFeaturedProjects: jest.fn(),
}));

jest.mock('@/components/Navbar', () => ({
  Navbar: () => <nav>Navbar</nav>,
}));

jest.mock('@/components/ResumeDownload', () => ({
  ResumeDownload: () => <button>Download Resume</button>,
}));

jest.mock('@/components/ProjectCard', () => ({
  ProjectCard: ({ project }: { project: any }) => <div>{project.name}</div>,
}));

describe('Home Page', () => {
  beforeEach(() => {
    (getFeaturedProjects as jest.Mock).mockResolvedValue([]);
  });

  it('should render home page content', async () => {
    const page = await Home();
    render(page);
    expect(screen.getByText(/Rutvij Sathe/i)).toBeInTheDocument();
  });
});

