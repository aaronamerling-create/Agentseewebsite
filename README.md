# AgentSee

Marketing site for **AgentSee**, which helps businesses make their digital experiences work
for both humans and AI agents. The core question: if a prospect arrives with an AI agent instead
of a browser, how much of the customer journey actually works? AgentSee measures and improves that
across discover, understand, evaluate, compare, qualify, and act, starting with mid-market B2B software.

Live site: **https://aaronamerling-create.github.io/Agentsee** (via GitHub Pages)

> The `agentsee.ai` domain is not connected yet. The site currently runs on the
> default GitHub Pages URL above — see [Connecting the agentsee.ai domain later](#connecting-the-agentseeai-domain-later).

## What's on the page

One long-form landing page covering:

- **The Shift**: agents now evaluate vendors, not just find them; the gaps are silent
- **The Journey**: the six stages AgentSee measures (Discover, Understand, Evaluate, Compare,
  Qualify, Act); AEO/GEO/structured data/APIs/MCP are tools, not the goal
- **Snapshot**: the free agent's-eye assessment (0-100 score, A-F grade, six dimensions, findings,
  anonymous benchmark) and the readiness maturity scale (Agent Discoverable, Agent Executable,
  Technically Agent-Ready; Agent Usable in the Audit; Agent Operable beyond)
- **Services**: the ladder Snapshot (free) -> Audit -> Architect -> Activate -> Adapt
- **How We Measure**: honest agent's-eye view, evidence, stable score with honest benchmarks,
  findings before fixes, methodology validation, B2B software first
- **FAQ**: direct, quotable answers (mirrored word-for-word in the FAQPage structured data)
- **Contact**: a mailto CTA to request a Snapshot (placeholder until a self-serve Snapshot and an
  agentsee.ai inbox exist)

## Practicing what we preach

Since AgentSee sells agent-readiness, the site itself follows AEO/GEO best practices:

- **Structured data** — a single JSON-LD `@graph` in `index.html` combining `ProfessionalService`
  (with `knowsAbout` and `makesOffer` for each service), `WebSite`, and `FAQPage` schema. The
  `FAQPage` entries match the visible FAQ section word-for-word — schema with no matching visible
  content is a red flag to search/AI engines, not a shortcut.
- **`robots.txt`** — explicitly allows major AI/agent crawlers (GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended, etc.) in addition to the wildcard allow, and points to the sitemap.
- **`sitemap.xml`** — standard XML sitemap.
- **`llms.txt`** — a plain-text summary of the business following the emerging
  [llms.txt](https://llmstxt.org) convention, so agents/LLMs can quickly get an accurate summary
  without having to parse the full page.
- **Canonical + robots meta tags**, clean single-`h1`-per-page heading hierarchy, and semantic
  HTML (`header` / `main` / `footer`, labeled `nav` landmarks) throughout.

**Note:** every URL in the structured data, `robots.txt`, `sitemap.xml`, and `llms.txt` currently
points at the live `github.io` URL. Once the `agentsee.ai` domain is connected (see below), these
all need to be updated to the `agentsee.ai` URLs — search for
`aaronamerling-create.github.io/Agentsee` across the repo and replace with `agentsee.ai`.

## Project structure

```
Agentsee/
├── index.html          # single-page site + JSON-LD structured data
├── css/
│   └── styles.css      # all styling (dark theme, no framework)
├── js/
│   └── main.js         # mobile nav toggle, scroll-reveal, footer year
├── assets/
│   ├── favicon.svg
│   └── og-image.svg    # social share preview image
├── robots.txt           # crawler access, incl. AI/agent crawlers
├── sitemap.xml           # XML sitemap
├── llms.txt              # plain-text summary for AI agents/LLMs
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

This repo is already deployed via GitHub Pages from the `main` branch, root folder,
live at `https://aaronamerling-create.github.io/Agentsee`.

## Connecting the agentsee.ai domain later

1. Add a `CNAME` file to the repo root containing just:
   ```
   agentsee.ai
   ```
2. At your domain registrar, point `agentsee.ai` at GitHub Pages:
   - **A records** (apex domain) to GitHub Pages' IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Optionally add a **CNAME record** for `www` → `aaronamerling-create.github.io`
3. In **Settings → Pages**, add `agentsee.ai` as the custom domain and enable
   **Enforce HTTPS** once DNS has propagated.
4. Update every `https://aaronamerling-create.github.io/Agentsee` reference (structured
   data in `index.html`, `robots.txt`, `sitemap.xml`, `llms.txt`) to `https://agentsee.ai`.

## Updating the contact CTA

The "Start the Conversation" button currently opens a `mailto:` link as a placeholder.
Swap the `href` in the `#contact` section of `index.html` once you have a dedicated
`hello@agentsee.ai` inbox or a booking/form link.
