import { contactInfo } from '@/lib/data';

export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rutvij Sathe',
    jobTitle: 'Software Engineer II',
    worksFor: {
      '@type': 'Organization',
      name: 'American Express',
    },
    email: contactInfo.email,
    url: contactInfo.portfolio,
    sameAs: [
      contactInfo.linkedin,
      contactInfo.github,
      contactInfo.portfolio,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Toronto',
    },
    knowsAbout: [
      'Software Engineering',
      'Full Stack Development',
      'React.js',
      'Next.js',
      'Node.js',
      'TypeScript',
      'AdonisJS',
      'AWS',
      'System Design',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rutvij Sathe - Software Engineer',
    url: 'https://rutvijsathe.dev',
    description: 'Portfolio of Rutvij Sathe, Software Engineer II at American Express',
    author: {
      '@type': 'Person',
      name: 'Rutvij Sathe',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

