# Portfolio 3.0

A modern, secure, and job-optimized personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Minimal, clean, and aesthetic UI with dark/light mode support
- **ATS-Friendly Resume**: Automatically generated PDF resume optimized for applicant tracking systems
- **GitHub Integration**: Curated project showcase from your GitHub repositories
- **Security**: Comprehensive security measures including rate limiting, spam protection, and input sanitization
- **Analytics**: Google Tag Manager integration for tracking
- **SEO Optimized**: Full metadata, Open Graph, and structured data support
- **Responsive**: Fully responsive design for all devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Roboto (Google Fonts)
- **PDF Generation**: @react-pdf/renderer
- **Email**: Resend API
- **Analytics**: Google Tag Manager
- **Security**: reCAPTCHA v3, rate limiting, input sanitization

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- GitHub account (for project fetching)
- Resend account (for contact form)
- Google Tag Manager account (for analytics)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio-3.0
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file:

```env
GITHUB_USERNAME=rutvij26
GITHUB_TOKEN=optional
CONTACT_EMAIL=contact@rutvijsathe.dev
RESEND_API_KEY=required
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
RECAPTCHA_SECRET_KEY=optional
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=optional
KV_REST_API_URL=optional
KV_REST_API_TOKEN=optional
ALLOWED_ORIGINS=https://rutvijsathe.dev,https://www.rutvijsathe.dev
NODE_ENV=production
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

### Required

- `GITHUB_USERNAME`: Your GitHub username
- `CONTACT_EMAIL`: Email address for contact form submissions
- `RESEND_API_KEY`: Resend API key for sending emails
- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager Container ID

### Optional

- `GITHUB_TOKEN`: GitHub personal access token (for higher rate limits)
- `RECAPTCHA_SECRET_KEY`: Google reCAPTCHA v3 secret key
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Google reCAPTCHA v3 site key
- `KV_REST_API_URL`: Vercel KV URL for rate limiting
- `KV_REST_API_TOKEN`: Vercel KV token for rate limiting
- `ALLOWED_ORIGINS`: Comma-separated list of allowed origins for CORS

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add all environment variables
4. Configure custom domain (rutvijsathe.dev)
5. Deploy!

Vercel will automatically:

- Build and deploy on every push
- Provide SSL/HTTPS
- Handle CDN and caching

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Setup Guides

### Resend API Setup

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your domain (rutvijsathe.dev) or use Resend's test domain
4. Go to API Keys section
5. Create a new API key
6. Copy and add to environment variables as `RESEND_API_KEY`

### Google Tag Manager Setup

1. Go to [https://tagmanager.google.com](https://tagmanager.google.com)
2. Sign in with your Google account
3. Create a new container or use an existing one
4. Get your Container ID (format: GTM-XXXXXXX)
5. Add to environment variables as `NEXT_PUBLIC_GTM_ID`
6. Configure your tags in GTM (e.g., Google Analytics 4, conversion tracking, etc.)

### reCAPTCHA v3 Setup

1. Go to [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
2. Create a new reCAPTCHA v3 site
3. Add your domain (rutvijsathe.dev)
4. Get your Site Key and Secret Key
5. Add to environment variables:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`

### Vercel KV Setup (for Rate Limiting)

1. Go to your Vercel project dashboard
2. Navigate to Storage → Create Database
3. Select KV (Redis)
4. Create the database
5. Get connection details:
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`
6. Add to environment variables

## Security Features

- **Rate Limiting**: Per-IP and global rate limits on API routes
- **Input Sanitization**: All user inputs are sanitized to prevent XSS
- **Spam Protection**: Honeypot fields, reCAPTCHA v3, and content filtering
- **Security Headers**: CSP, HSTS, X-Frame-Options, and more
- **Request Validation**: Origin, user-agent, and method validation
- **Error Handling**: Secure error messages that don't leak information

## Project Structure

```
portfolio-3.0/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects pages
│   ├── skills/            # Skills page
│   └── ...
├── components/            # React components
├── lib/                   # Utility functions
│   ├── data.ts           # Portfolio data
│   ├── github.ts         # GitHub API integration
│   ├── security.ts       # Security utilities
│   └── ...
├── public/               # Static assets
└── types/                # TypeScript types
```

## Customization

### Updating Content

Edit `lib/data.ts` to update:

- Contact information
- Professional summary
- Experience entries
- Education
- Skills
- Testimonials

### Adding Testimonials

Add testimonials to the `testimonials` array in `lib/data.ts`:

```typescript
{
  name: 'John Doe',
  role: 'Senior Engineer',
  company: 'Company Name',
  text: 'Testimonial text here...',
  date: 'Jan 2024',
  linkedinUrl: 'https://linkedin.com/in/johndoe' // optional
}
```

### Customizing Projects

Projects are automatically fetched from GitHub. To manually override or add projects, edit `lib/github.ts` or add a manual projects array in `lib/data.ts`.

## License

See [LICENSE](LICENSE) file for details. This project uses a custom license that requires attribution and restricts commercial use without permission.

## Contact

For questions or issues, please open an issue on GitHub or contact [rut26sathe@gmail.com](mailto:rut26sathe@gmail.com).
