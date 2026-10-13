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

Project images, the profile image and the downloadable CV are in `public/`.

## Deployment

The site can be deployed to Vercel, Netlify, Cloudflare Pages or any static host that supports Astro builds.
