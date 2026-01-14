# ELIS CMS Frontend

Public-facing website that consumes the CMS API.

## Features

- Dynamic page rendering from CMS
- Template-based components
- SEO optimized with react-helmet
- Responsive design
- Fast and performant

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Data Fetching**: React Query (TanStack)
- **SEO**: React Helmet Async

## Templates

The frontend includes 5 pre-built template components:

1. **HomePage** - Hero section, features grid, CTA
2. **ServicePage** - Service details with benefits
3. **AboutPage** - Company info, team, mission/vision
4. **ContactPage** - Contact form and information
5. **GenericPage** - Flexible content page

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set API URL in `.env`:
```env
VITE_API_URL=http://localhost:3000/api
```

3. Start development server:
```bash
npm run dev
```

App will run on `http://localhost:5174`

## How It Works

1. Frontend fetches pages from `/api/public/pages/:slug`
2. Template mapper matches template name to React component
3. Component renders content with appropriate layout
4. SEO meta tags are dynamically set

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx      # Main navigation
│   │   │   └── Footer.jsx      # Site footer
│   │   └── templates/          # Page templates
│   │       ├── HomePage.jsx
│   │       ├── ServicePage.jsx
│   │       ├── AboutPage.jsx
│   │       ├── ContactPage.jsx
│   │       └── GenericPage.jsx
│   ├── pages/
│   │   └── DynamicPage.jsx     # Dynamic page renderer
│   ├── services/
│   │   └── api.js              # API client
│   ├── utils/
│   │   └── templateMapper.js   # Template mapping logic
│   ├── App.jsx                 # Main app
│   └── main.jsx                # Entry point
└── package.json
```

## Template Mapping

The `templateMapper.js` maps database template names to React components:

```javascript
{
  'home': HomePage,
  'service': ServicePage,
  'about': AboutPage,
  'contact': ContactPage,
  'generic': GenericPage
}
```

## Adding New Templates

1. Create new component in `src/components/templates/`
2. Add mapping in `src/utils/templateMapper.js`
3. Create template in backend with matching name

## SEO

Each page automatically gets SEO tags from CMS:
- Title from `meta_title` or `title`
- Description from `meta_description`
- Keywords from `meta_keywords`

## Build for Production

```bash
npm run build
```

Deploy the `dist` folder to:
- Vercel (recommended)
- Netlify
- Cloudflare Pages

## Environment Variables

- `VITE_API_URL`: Backend API URL (default: http://localhost:3000/api)

## License

MIT
