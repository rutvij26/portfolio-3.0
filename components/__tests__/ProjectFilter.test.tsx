import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectFilter } from '../ProjectFilter';
import { Project } from '@/types';

jest.mock('../ProjectCard', () => ({
  ProjectCard: ({ project }: { project: Project }) => <div>{project.name}</div>,
}));

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'React Project',
    description: 'A React project',
    summary: 'Summary',
    githubUrl: 'https://github.com/test/react',
    language: 'TypeScript',
    technologies: ['React', 'Next.js'],
  },
  {
    id: '2',
    name: 'Node Project',
    description: 'A Node.js project',
    summary: 'Summary',
    githubUrl: 'https://github.com/test/node',
    language: 'JavaScript',
    technologies: ['Node.js', 'Express'],
  },
];

describe('ProjectFilter', () => {
  it('should render all projects by default', () => {
    render(
      <ProjectFilter
        projects={mockProjects}
        technologies={['React', 'Node.js', 'Next.js', 'Express']}
        languages={['TypeScript', 'JavaScript']}
      />
    );
    expect(screen.getByText('React Project')).toBeInTheDocument();
    expect(screen.getByText('Node Project')).toBeInTheDocument();
  });

  it('should filter by language', async () => {
    render(
      <ProjectFilter
        projects={mockProjects}
        technologies={['React', 'Node.js']}
        languages={['TypeScript', 'JavaScript']}
      />
    );
    const languageSelect = screen.getByDisplayValue('All Languages');
    await userEvent.selectOptions(languageSelect, 'TypeScript');
    expect(screen.getByText('React Project')).toBeInTheDocument();
    expect(screen.queryByText('Node Project')).not.toBeInTheDocument();
  });

  it('should filter by technology', async () => {
    render(
      <ProjectFilter
        projects={mockProjects}
        technologies={['React', 'Node.js']}
        languages={['TypeScript', 'JavaScript']}
      />
    );
    const techSelect = screen.getByDisplayValue('All Technologies');
    await userEvent.selectOptions(techSelect, 'React');
    expect(screen.getByText('React Project')).toBeInTheDocument();
  });

  it('should filter by search query', async () => {
    render(
      <ProjectFilter
        projects={mockProjects}
        technologies={['React', 'Node.js']}
        languages={['TypeScript', 'JavaScript']}
      />
    );
    const searchInput = screen.getByPlaceholderText('Search projects...');
    await userEvent.type(searchInput, 'React');
    expect(screen.getByText('React Project')).toBeInTheDocument();
    expect(screen.queryByText('Node Project')).not.toBeInTheDocument();
  });

  it('should show no projects message when no matches', async () => {
    render(
      <ProjectFilter
        projects={mockProjects}
        technologies={['React', 'Node.js']}
        languages={['TypeScript', 'JavaScript']}
      />
    );
    const searchInput = screen.getByPlaceholderText('Search projects...');
    await userEvent.type(searchInput, 'NonExistent');
    expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
  });
});

