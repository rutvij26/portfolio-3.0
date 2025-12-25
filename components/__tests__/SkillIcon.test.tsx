import { render } from '@testing-library/react';
import { SkillIcon } from '../SkillIcon';

describe('SkillIcon', () => {
  it('should render icon for TypeScript', () => {
    const { container } = render(<SkillIcon skillName="TypeScript" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render icon for JavaScript', () => {
    const { container } = render(<SkillIcon skillName="JavaScript" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render icon for React.js', () => {
    const { container } = render(<SkillIcon skillName="React.js" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render fallback icon for unknown skill', () => {
    const { container } = render(<SkillIcon skillName="Unknown Skill" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render icon for Node.js', () => {
    const { container } = render(<SkillIcon skillName="Node.js" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render icon for PostgreSQL', () => {
    const { container } = render(<SkillIcon skillName="PostgreSQL" />);
    expect(container.firstChild).toBeInTheDocument();
  });
});

