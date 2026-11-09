# Blog routes

The blog listing and detail routes render MDX returned by `src/services/blog.ts`. Keep slug
resolution, metadata, static generation, and not-found behavior consistent with the data contract.
Do not put article prose or cover assets in route files. Blog content belongs in `src/data/blogs/`;
read `docs/blog-writing-guide.md` and the `portfolio-blog` skill before writing or revising it.

Check both `/blog` and a representative `/blog/<slug>` route at desktop and mobile widths after
rendering changes.
