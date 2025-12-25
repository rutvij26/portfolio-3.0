import sitemap from '../sitemap';

describe('sitemap', () => {
  it('should generate sitemap with all pages', () => {
    const sitemapData = sitemap();
    
    expect(sitemapData).toBeInstanceOf(Array);
    expect(sitemapData.length).toBeGreaterThan(0);
    
    const urls = sitemapData.map(item => item.url);
    expect(urls).toContain('https://rutvijsathe.dev');
    expect(urls).toContain('https://rutvijsathe.dev/experience');
    expect(urls).toContain('https://rutvijsathe.dev/education');
    expect(urls).toContain('https://rutvijsathe.dev/skills');
    expect(urls).toContain('https://rutvijsathe.dev/projects');
    expect(urls).toContain('https://rutvijsathe.dev/contact');
  });

  it('should have correct structure for each entry', () => {
    const sitemapData = sitemap();
    const firstEntry = sitemapData[0];
    
    expect(firstEntry).toHaveProperty('url');
    expect(firstEntry).toHaveProperty('lastModified');
    expect(firstEntry).toHaveProperty('changeFrequency');
    expect(firstEntry).toHaveProperty('priority');
  });
});

