# Milad Afkhami's Portfolio

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

For agent and contributor context, start with [AGENTS.md](AGENTS.md) and the relevant skills under [.agents/skills/](.agents/skills/).

## Technologies Used

- TypeScript (Strictly typed)
- ESLint
- Prettier
- Commitlint
- Tailwind CSS
- Daisy UI
- React.js
- Next.js (App Router)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and fill in the required environment variables
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:4000](http://localhost:4000) in your browser

## Project Structure

- `src/app/`: Next.js App Router routes
- `src/components/`: React components
- `src/configs/`: Configuration files
- `src/constants/`: Constants
- `src/containers/`: Container components
- `src/data/`: Data files
- `docs/`: Repository documentation
- `src/helpers/`: Project-specific helper functions
- `src/hooks/`: Custom hooks
- `public/`: Public assets
- `src/services/`: Service files
- `src/types/`: Type definitions
- `src/utils/`: Generic utility functions

## Features

- Modern and responsive design
- Blog system with MDX
- Project showcase
- About me section
- Open-source packages showcase
- Favorites section (Books, Playlists, Animations, Series, Anime)
- SEO optimized
- Type-safe codebase
- Automated code formatting and linting
- Conventional commit messages

## Writing blog posts

Read [the blog writing guide](docs/blog-writing-guide.md) before authoring or revising an article. It collects
the topic-selection, tone, length, diagram, prompt-library, asset and review rules.

Posts live in `src/data/blogs` as MDX with frontmatter. Use standard fenced Mermaid blocks for diagrams:

````md
```mermaid
flowchart TD
    plan[Review the plan] --> implement[Agent implements]
    implement --> verify[Verify the result]
    verify --> learn[Learn and revise]
    learn -.-> plan
```
````

Mermaid loads on demand in the browser. Ordinary code fences retain their copy button; a diagram that fails to
render leaves readable source instead of breaking the article. The renderer uses Mermaid's strict security mode.

Diagrams use `handDrawn` with a single Warm paper palette and the portfolio's peach primary (`#f6be89`). Shared
settings live in `src/configs/mermaid.ts`. Palette (`theme`) and drawing style (`look`) are separate Mermaid options.

Number article headings explicitly: `## 1. Main section`, `### 1.1. Subsection`, and so on. Choose formatting for its
meaning: ordered lists for steps, tables for comparisons, and code blocks for useful code or prompts. Use task-list
checkboxes only when readers actually need a checklist, rather than using them as decoration. Prefer Mermaid for
diagrams it can express; use illustrations for concepts that need an image.

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.
