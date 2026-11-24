# Laghvi Singh | Portfolio

A single-page portfolio built with React (Vite), Tailwind CSS, Framer Motion, Lucide icons and React Hook Form. All content comes from Laghvi's resume and lives in `src/data/`.

## Setup

Requires Node.js 20 or newer.

```bash
npm install
npm run dev      # development server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Editing content

| What | Where |
| --- | --- |
| Name, contact details, about text, social links | `src/data/profile.js` |
| Skills | `src/data/skills.js` |
| Achievements and featured work (cards) | `src/data/highlights.js` |
| Education and practical training | `src/data/experience.js` |
| Resume PDF | `public/resume.pdf` (replace the file, keep the name) |
| Colours and fonts | `@theme` block in `src/index.css` |

- Add LinkedIn or GitHub by setting `linkedin` / `github` in `profile.js`. The links then appear in the hero, contact section and footer.
- Add a photo to the featured card by saving it in `src/assets/`, importing it in `highlights.js`, and setting `image`.
- Add a certificate link to any card with `certificateUrl`.

## Contact form

Out of the box the form validates input and opens the visitor's email app with the message pre-filled. It never claims a message was sent, because nothing is sent until the visitor presses Send.

To receive messages directly in your inbox instead:

1. Create a free form at [formspree.io](https://formspree.io) and copy the form ID.
2. Create a `.env` file in the project root: `VITE_FORMSPREE_ID=your_form_id`
3. Rebuild. The form then posts to Formspree and shows real success or error messages.

On Vercel or Netlify, add `VITE_FORMSPREE_ID` as an environment variable instead.

## Deployment

**Vercel:** push to GitHub, import the repository at vercel.com, keep the detected Vite settings (build `npm run build`, output `dist`), and deploy.

**Netlify:** push to GitHub, add a new site from Git, set build command `npm run build` and publish directory `dist`.

After deploying, add `og:url` and an `og:image` (a 1200x630 image in `public/`) in `index.html` so links preview nicely when shared.
