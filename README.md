# Portfolio

## My portfolio website

![gtmetrix grade for my portfolio](public/images/projects/portfolio-gtmetrix.png)

Made with [Next.js](https://nextjs.org/), [MDX](https://github.com/mdx-js/mdx), [styled-components](https://styled-components.com/) and deployed on [Vercel](https://vercel.com/)

## Features

⚡️ No component with more than 100 lines of code except index.css with CSS reset principals
You can run `git ls-files | xargs wc -l | awk '$1 > 100'` command in project repository to see it in action.\
⚡️ Multi theme with easily addable other pallettes. you can read more about it [here](https://portfolio-mili.vercel.app/blog/multi-theme) \
⚡️ Multi language implementation with support for Deutsch and French beside for english. \
⚡️ Using ISR, SSG for data fetching as latest technologies as I described [here](https://portfolio-mili.vercel.app/blog/data-fetching-pattern-preference) \
⚡️ Global and responsive typography. reade more about it [here](https://portfolio-mili.vercel.app/blog/typography) \
⚡️ Documented with [jsdoc](https://jsdoc.app/). \

<!-- #TODO Making courses on youtube, walking through this repository -->

## How To Use 🔧

`git clone https://github.com/miladMAPS/portfolio.git`

`cd portfolio`

`git remote remove origin`

`yarn install`

`yarn start`

## Deployment

I used [Vercel](https://vercel.com/) for deployments because it is highly featured and easily configurable with next.js.
