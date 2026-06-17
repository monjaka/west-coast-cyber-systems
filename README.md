# West Coast Cyber Systems Website

Astro website for `westcoastcybersystems.com.au`, aimed at Perth businesses looking for AI-assisted cyber security systems.

This repository is the customer-facing marketing website. The internal business management system should be planned and built separately when the business is ready for it.

## Run Locally

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

The production output is generated in `dist/`.

## Cloudflare Pages

Recommended settings:

- Framework preset: `Astro`
- Build command: `pnpm build`
- Build output directory: `dist`
- Production branch: `main`
- Domain: `westcoastcybersystems.com.au`

When the domain is active in Cloudflare, point the Pages custom domain to this project and keep the canonical site URL in `astro.config.mjs`.

For GitHub Pages hosting through Cloudflare DNS, use DNS-only records:

- `A` record for `@` to `185.199.108.153`
- `A` record for `@` to `185.199.109.153`
- `A` record for `@` to `185.199.110.153`
- `A` record for `@` to `185.199.111.153`
- `CNAME` record for `www` to `monjaka.github.io`

Leave those records DNS-only until GitHub Pages finishes issuing the certificate, then enable HTTPS enforcement in GitHub Pages.

## GitHub Pages

This repository also includes a GitHub Pages workflow at `.github/workflows/deploy.yml` for an immediate static deployment. The custom domain is stored in `public/CNAME`.
