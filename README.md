# AgentSee

Marketing site for **AgentSee** — a consulting practice helping companies get their
digital presence ready for the agentic web: AI agents that discover, evaluate, and
transact on behalf of human customers.

Live site: **https://agentsee.ai** (via GitHub Pages)

## What's on the page

One long-form landing page covering:

- **The Shift** — why the agentic customer journey is urgent right now
- **The Journey** — the two-phase framework AgentSee sells against:
  - **Discovery**: AEO (Answer Engine Optimization), GEO (Generative Engine Optimization)
  - **Usage**: structured data, APIs & MCP (Model Context Protocol), WebMCP
- **Services** — the four consulting offerings
- **Process** — Audit → Architect → Activate
- **Contact** — a mailto CTA (placeholder until a dedicated agentsee.ai inbox exists)

## Project structure

```
Agentsee/
├── index.html          # single-page site
├── css/
│   └── styles.css      # all styling (dark theme, no framework)
├── js/
│   └── main.js         # mobile nav toggle, scroll-reveal, footer year
├── assets/
│   ├── favicon.svg
│   └── og-image.svg    # social share preview image
├── CNAME               # custom domain: agentsee.ai
└── README.md
```

No build step, no dependencies — plain HTML/CSS/JS so it can be served directly by
GitHub Pages.

## Local preview

Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment (GitHub Pages)

1. Push this repo to GitHub.
2. In **Settings → Pages**, set the source to the `main` branch, root folder.
3. The `CNAME` file is already set to `agentsee.ai`. At your domain registrar, point
   `agentsee.ai` at GitHub Pages:
   - **A records** (apex domain) to GitHub Pages' IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Optionally add a **CNAME record** for `www` → `<your-username>.github.io`
4. Back in **Settings → Pages**, add `agentsee.ai` as the custom domain and enable
   **Enforce HTTPS** once DNS has propagated.

## Updating the contact CTA

The "Start the Conversation" button currently opens a `mailto:` link as a placeholder.
Swap the `href` in the `#contact` section of `index.html` once you have a dedicated
`hello@agentsee.ai` inbox or a booking/form link.
