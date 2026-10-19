# D.TEC Engineering & Machinery Website

The D.TEC website presents the company's industrial machinery, engineering services, and contact information for customers in Cambodia. It is built with Astro and Tailwind CSS and generates a static site.

## Requirements

- Node.js 22.12.0 or newer
- npm

## Getting Started

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

Astro prints the local URL, typically `http://localhost:4321`.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Build the production site into `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run astro -- --help` | Show Astro CLI help. |

## Site Pages

| URL | Source | Purpose |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Homepage and company overview. |
| `/products/` | `src/pages/products/index.astro` | Browse products and services. |
| `/products/<id>/` | `src/pages/products/[id].astro` | Product or service details, generated from the catalog data. |
| `/contact/` | `src/pages/contact.astro` | Phone, Telegram, email, location, and quote contact options. |

About Us and Services links on the homepage navigate to their sections there.

## Updating Content

- **Catalog:** Edit `src/data/products.json`. Each item needs a unique `id`, `title`, `desc`, and `icon`. Optional `image` and `specs` fields can be added when verified product content is available. The `id` is used in the detail-page URL, so keep it stable when possible.
- **Contact details:** Edit `src/data/contact.json`. The contact page and footer share this data. The Telegram link is generated from the phone number, so update that number in international format.
- **Homepage sections:** Reusable sections are in `src/components/`; global Tailwind theme colors are defined in `src/styles/global.css`.

The quote action opens the visitor's email app with a prefilled message. It does not submit to a server or store inquiries on the website.

## Project Structure

```text
src/
├── assets/       # Logos and homepage imagery
├── components/   # Shared page sections and navigation
├── data/         # Product and contact data
├── layouts/      # Shared page layout and metadata
├── pages/        # Astro routes
└── styles/       # Global styles and theme tokens
```

For Astro documentation, see [docs.astro.build](https://docs.astro.build/).