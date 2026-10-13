<div align="center">

# Bilal Amin — Portfolio

**Data Science & AI Engineer**

A responsive personal portfolio built with Astro, Tailwind CSS and TypeScript.

</div>

## Included content

- Professional summary and contact links
- Current Software Engineering research and EuroComCenter web-development HiWi roles, plus previous experience at MPI, Convergent Business Technologies, CureMD and STEP
- Featured AI, machine-learning, network-simulation, HCI and algorithm projects
- Education, technical skills and selected coursework
- Two-page CV with clickable arrows beside linked project names
- Atira EHL hackathon result and top-seven finale pitch selection
- Musedots case study, workflow diagram, and downloadable presentation
- Responsive contact form that opens the visitor's mail application

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:4321`.

## Production build

```bash
pnpm build
pnpm preview
```

## Main content file

Portfolio content is stored in:

```text
src/config/index.ts
```

Project images, the profile image and a published CV snapshot are in `public/`.

## Current Overleaf CV

The **View CV** button opens `/api/cv`, a Vercel function that uses the project's public read-only link, compiles the latest saved Overleaf source, and returns the PDF inline. No visitor login or personal account cookies are required. Keep Overleaf link sharing enabled. Each request fetches a current build; simultaneous requests in one function instance share the same compile. Compilation errors return a temporary-unavailable message rather than silently displaying an older CV.

The read-only project is configured in `src/lib/overleaf-cv.mjs`. This depends on Overleaf's web routes, which may change. The static `/Bilal-Amin-CV.pdf` remains a separately published snapshot.

Verify the retrieval logic with `node --test tests/overleaf-cv.test.mjs`. To exercise `/api/cv` locally, use `vercel dev`; `pnpm preview` serves only the static site.

## Deployment

The site deploys to Vercel with an Astro static build and the Node function in `api/cv.mjs`. Other static hosts can serve the pages, but require their own server endpoint for the live Overleaf PDF.
