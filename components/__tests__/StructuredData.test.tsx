import { render } from '@testing-library/react';
import { StructuredData } from '../StructuredData';

describe('StructuredData', () => {
  it('should render structured data scripts', () => {
    const { container } = render(<StructuredData />);
    const scripts = container.querySelectorAll('script[type="application/ld+json"]');
    expect(scripts).toHaveLength(2);
  });

  it('should include person schema', () => {
    const { container } = render(<StructuredData />);
    const scripts = container.querySelectorAll('script[type="application/ld+json"]');
    const firstScript = scripts[0];
    const content = JSON.parse(firstScript?.textContent || '{}');
    expect(content['@type']).toBe('Person');
    expect(content.name).toBe('Rutvij Sathe');
  });

  it('should include website schema', () => {
    const { container } = render(<StructuredData />);
    const scripts = container.querySelectorAll('script[type="application/ld+json"]');
    const secondScript = scripts[1];
    const content = JSON.parse(secondScript?.textContent || '{}');
    expect(content['@type']).toBe('WebSite');
  });
});

