# Useful Magic Studio Website

A modern website for **Useful Magic Studio**, a tool-agnostic product, design, and engineering studio focused on helping people and organizations build smarter systems, better workflows, and practical AI-enabled products.

Useful Magic Studio is built around the belief that the tools matter less than the systems. Whether a client uses Google, Microsoft, Vercel, OpenAI, Claude, Cursor, or something else entirely, our work focuses on designing clear, maintainable, human-centered solutions that fit the real needs of the people using them.

## About the Project

This website introduces Useful Magic Studio, explains our services, and provides a place for potential clients, collaborators, and partners to understand what we do.

The site is designed to communicate:

* Product strategy and technical leadership
* Full-stack engineering and modern web development
* UX and systems design
* AI workflow consulting and implementation
* Tool-agnostic automation and process improvement
* Practical modernization of legacy systems

## Tech Stack

This project was generated from v0 and is intended to be deployed through Vercel.

Common technologies may include:

* React
* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui
* Vercel

Update this section if the final project uses a different stack.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local site in your browser:

```bash
http://localhost:3000
```

## Available Scripts

Depending on the project setup, these scripts may be available:

```bash
npm run dev
```

Runs the local development server.

```bash
npm run build
```

Builds the production version of the site.

```bash
npm run start
```

Starts the production build locally.

```bash
npm run lint
```

Runs linting checks.

## Project Structure

A typical structure may look like this:

```bash
.
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   └── ui/
├── lib/
├── public/
├── package.json
├── tailwind.config.ts
└── README.md
```

Update this section as the project evolves.

## Environment Variables

If the site uses third-party services, create a `.env.local` file for local development.

Example:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Do not commit real API keys, tokens, or secrets to the repository.

Make sure the following files are listed in `.gitignore`:

```bash
.env
.env.local
node_modules
.next
.vercel
```

## Deployment

This site is intended to be deployed on Vercel.

To deploy:

1. Push the repository to GitHub.
2. Import the GitHub repo into Vercel.
3. Configure any required environment variables.
4. Deploy the project.

Vercel will automatically create preview deployments for branches and production deployments from the main branch, depending on the project settings.

## Visual Testing

Visual tests use Playwright for page assertions and Chromatic for screenshot review. Tests live in `tests/visual` and cover `/`, `/privacy`, `/login`, and the consent banner.

### Running locally

```bash
npm run test:e2e
```

Runs Playwright against `next dev` at `http://127.0.0.1:3000`. If `PLAYWRIGHT_TEST_BASE_URL` is set, tests run against that URL instead and no local server is started.

A few things to know:

* The consent banner is dismissed via localStorage before page screenshots. The banner test always opens `/login`.
* If a page redirects to `/login`, tests sign in with `SITE_PASSWORD` (from the environment or `.env.local`) and reopen the intended page, so the password form does not appear in those screenshots.
* Local `next dev` and Vercel preview deployments are not password-gated. Production is.

```bash
npm run test:visual
```

Runs `chromatic --playwright` and uploads the test archives to Chromatic. This requires `CHROMATIC_PROJECT_TOKEN`, found in the Chromatic project under Manage → Configure. Do not commit the token.

Without the token, `npm run test:e2e` still runs the assertions and writes local archives under `test-results/`.

### Running in CI

`.github/workflows/chromatic.yml` runs when Vercel sends the `vercel.deployment.success` `repository_dispatch` event. It can also be run manually through `workflow_dispatch` with a `base_url` input.

* The workflow file must be on the default branch before Vercel dispatch events will trigger it.
* Preview deployments run Chromatic with `--exit-zero-on-changes`, so the GitHub job can pass while visual changes still need review in Chromatic.
* Production deployments run with `--auto-accept-changes main`, so baselines update on the default branch.
* `chromaui/action` is not used because it does not support Vercel's deployment events.

To set up CI:

1. Add GitHub repository secrets:
   * `CHROMATIC_PROJECT_TOKEN` (required)
   * `VERCEL_AUTOMATION_BYPASS_SECRET` (only if Vercel Deployment Protection is on)
   * `SITE_PASSWORD` (only used for production runs)
2. Link the Chromatic project to the GitHub repository.
3. To block pull requests until visual changes are accepted, require the UI Tests check in branch protection.

## Brand Positioning

Useful Magic Studio helps teams turn messy ideas, outdated workflows, and disconnected tools into clear, functional systems.

We are not tied to one platform or vendor. We work across tools and ecosystems to design solutions that are practical, flexible, and sustainable.

Our work may include:

* AI-assisted workflow design
* Product strategy
* UX architecture
* Web application development
* Internal tooling
* Automation systems
* Technical documentation
* Process modernization
* Prototype-to-production planning

## Development Notes

This project may have started as a v0-generated site. As the codebase matures, review and refine:

* Component structure
* Accessibility
* Responsive behavior
* Metadata and SEO
* Form handling
* Analytics
* Performance
* Content strategy
* Reusable design tokens
* Deployment configuration

## Contributing

This is currently a private studio website. Internal collaborators should create a branch, make changes, and open a pull request before merging into `main`.

Suggested branch naming:

```bash
feature/homepage-updates
fix/mobile-layout
content/service-copy
```

## License

The source code in this repository is available under the
[Useful Magic Source-Available License 1.0](LICENSE). You may study, modify,
and use the code for your own website, including your own business website.
You may not resell it or offer substantial copies as templates, starter kits,
client deliverables, hosted solutions, or similar products or services.

Useful Magic Studio names, logos, trademarks, branding, written content, and
media are excluded from the license and remain protected. This is a
source-available license, not an open-source license.

## Contact

Useful Magic Studio
Website: Coming soon
Email: Coming soon
