# AgentSee

Marketing site for **AgentSee** — a marketing agency that markets to AI agents. We
bring years of brand and full-funnel marketing experience to the agentic customer
journey: AI agents that now discover, research, and transact on behalf of human
customers, running the same funnel a human buyer always has — just faster.

Live site: **https://agentsee.ai** (via GitHub Pages)

## What's on the page

One long-form landing page covering:

- **The Shift** — why the agentic customer journey is urgent right now
- **Why Us** — the differentiator: AgentSee is marketing-first, not engineering-first —
  the agentic journey is a funnel problem before it's an API problem
- **The Journey** — the three-stage funnel framework AgentSee sells against:
  - **Discovery**: AEO (Answer Engine Optimization), GEO (Generative Engine Optimization)
  - **Research & Education**: structured data & schema, brand-consistent content
  - **Conversion**: APIs & MCP (Model Context Protocol), WebMCP
- **Services** — the four agency offerings
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
