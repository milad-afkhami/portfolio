# Portfolio

## My portfolio website

Made with [Next.js](https://nextjs.org/), [MDX](https://github.com/mdx-js/mdx), [styled-components](https://styled-components.com/) and deployed on [Vercel](https://vercel.com/)

## Features

⚡️ No component with more than 100 lines of code except index.css with CSS reset principals.
You can run this command `git ls-files | xargs wc -l | awk '$1 > 100'` in project repository to see it in action.\
⚡️ Multi theme with dark and light themes and easily addable for other pallettes. you can read more about it [here](https://portfolio-mili.vercel.app/blog/multi-theme). \
⚡️ Multi language implementation with support for Deutsch and French aside from english. \
⚡️ Using ISR, SSG for data fetching as latest technologies as I described [here](https://portfolio-mili.vercel.app/blog/data-fetching-pattern-preference). \
⚡️ Global and responsive typography. reade more about it [here](https://portfolio-mili.vercel.app/blog/typography). \
⚡️ Documented with [jsdoc](https://jsdoc.app/).

<!-- #TODO Making courses on youtube, walking through this repository -->

## Analytic Reports

![gtmetrix grade for my portfolio](public/images/projects/portfolio/gtmetrix.png)

|                                                                 |                                                                 |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| ![FCP](public/images/projects/portfolio/vercel-analytics-1.png) | ![LCP](public/images/projects/portfolio/vercel-analytics-2.png) |
| ![CLS](public/images/projects/portfolio/vercel-analytics-3.png) | ![FID](public/images/projects/portfolio/vercel-analytics-4.png) |

## How To Use 🔧

1. \
   `git clone https://github.com/miladMAPS/portfolio.git`

2. \
   `cd portfolio`

3. \
   `git remote remove origin`

4. \
   `yarn install`

5. \
   `yarn start`

## Deployment

I used [Vercel](https://vercel.com/) for deployments because it is highly featured and easily configurable with next.js.
