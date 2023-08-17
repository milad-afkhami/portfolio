const projectsData: IProject[] = [
  {
    id: 10,
    name: "Reval",
    medias: [
      { src: "/images/projects/reval/1.jpg", title: "reval.points.1" },
      { src: "/images/projects/reval/2.jpg", title: "reval.points.1" },
      { src: "/images/projects/reval/3.jpg", title: "reval.points.1" },
    ],
    date: "2023-06",
    slug: "reval",
    techs: [
      {
        name: "Module Federation",
        link: "https://webpack.js.org/concepts/module-federation",
      },
      { name: "Webpack", link: "https://www.npmjs.com/package/webpack" },
      {
        name: "SWC",
        link: "https://www.npmjs.com/package/@swc/core",
      },
      {
        name: "Material UI",
        link: "https://www.npmjs.com/package/@mui/material",
      },
      {
        name: "Husky",
        link: "https://www.npmjs.com/package/husky",
      },
    ],
    points: [
      "reval.points.1",
      "reval.points.2",
      "reval.points.3",
      "reval.points.4",
    ],
  },
  {
    id: 9,
    name: "Toolkit",
    medias: [
      { src: "/images/projects/toolkit/1.jpg", title: "toolkit.points.1" },
      { src: "/images/projects/toolkit/2.jpg" },
    ],
    date: "2023-03",
    slug: "toolkit",
    techs: [
      { name: "Rollup", link: "https://www.npmjs.com/package/rollup" },
      { name: "Storybook", link: "https://www.npmjs.com/package/storybook" },
      { name: "Jest", link: "https://www.npmjs.com/package/jest" },
      {
        name: "Semantic Release",
        link: "https://www.npmjs.com/package/semantic-release",
      },
      {
        name: "Material UI",
        link: "https://www.npmjs.com/package/@mui/material",
      },
      {
        name: "Husky",
        link: "https://www.npmjs.com/package/husky",
      },
    ],
    points: ["toolkit.points.1"],
  },
  {
    id: 8,
    name: "Landingator",
    link: [
      "https://daramad.me",
      "https://dobare.me",
      "https://vitrin.me",
      "...",
    ],
    medias: [
      {
        src: "/images/projects/landingator/1.jpg",
        title: "landingator.points.2",
      },
      {
        src: "/images/projects/landingator/2.jpg",
        title: "landingator.points.2",
      },
      {
        src: "/images/projects/landingator/6.jpg",
        title: "landingator.points.2",
      },
      {
        src: "/images/projects/landingator/3.jpg",
        title: "landingator.points.2",
      },
      {
        src: "/images/projects/landingator/8.jpg",
        title: "landingator.points.2",
      },
      {
        src: "/images/projects/landingator/9.jpg",
        title: "landingator.points.2",
      },
      { src: "/images/projects/landingator/4.jpg" },
      { src: "/images/projects/landingator/5.jpg" },
      { src: "/images/projects/landingator/7.jpg" },
      {
        src: "/images/projects/landingator/10.jpg",
        title: "landingator.points.3",
      },
      {
        src: "/images/projects/landingator/11.jpg",
        title: "landingator.points.3",
      },
    ],
    date: "2022-11",
    slug: "landingator",
    techs: [
      { name: "Next.js", link: "https://www.npmjs.com/package/next" },
      { name: "jest", link: "https://www.npmjs.com/package/jest" },
      {
        name: "@testing-library/react",
        link: "https://www.npmjs.com/package/@testing-library/react",
      },
      {
        name: "Husky",
        link: "https://www.npmjs.com/package/husky",
      },
      {
        name: "next-i18next",
        link: "https://www.npmjs.com/package/next-i18next",
      },
      { name: "swr", link: "https://www.npmjs.com/package/swr" },
      {
        name: "Goober",
        link: "https://www.npmjs.com/package/goober",
      },
    ],
    points: [
      "landingator.points.1",
      "landingator.points.2",
      "landingator.points.3",
      "landingator.points.4",
      "landingator.points.5",
      {
        title: "landingator.points.6",
        points: [
          "landingator.points.6-1",
          "landingator.points.6-2",
          "landingator.points.6-3",
        ],
      },
    ],
  },
  {
    id: 0,
    name: "Octava",
    link: "https://octava.ir",
    logo: "/images/projects/octava/logo.png",
    medias: [
      { src: "/images/projects/octava/desktop/1.jpg" },
      { src: "/images/projects/octava/desktop/2.jpg" },
      { src: "/images/projects/octava/pwa/1.jpg" },
      // prettier-ignore
      { src: "/images/projects/octava/pwa/2.jpg", title: "octava.points.9" },
      { src: "/images/projects/octava/desktop/3.jpg" },
      { src: "/images/projects/octava/pwa/3.jpg" },
      { src: "/images/projects/octava/desktop/4.jpg" },
      { src: "/images/projects/octava/desktop/1-skeleton.jpg" },
      // prettier-ignore
      { src: "/images/projects/octava/desktop/1-blur.jpg", title: "octava.points.7" },
      { src: "/images/projects/octava/desktop/5.jpg" },
      // prettier-ignore
      { src: "/images/projects/octava/pwa/4.jpg" },
      { src: "/images/projects/octava/pwa/5.jpg" },
      { src: "/images/projects/octava/desktop/6.jpg" },
      // prettier-ignore
      { src: "/images/projects/octava/pwa/6.jpg", title: "octava.points.9" },
      { src: "/images/projects/octava/desktop/7.jpg" },
      { src: "/images/projects/octava/pwa/7.jpg" },
      { src: "/images/projects/octava/desktop/8.jpg" },
      { src: "/images/projects/octava/pwa/8.jpg" },
      { src: "/images/projects/octava/pwa/8-skeleton.jpg" },
      // prettier-ignore
      { src: "/images/projects/octava/desktop/5-skeleton.jpg" },
      { src: "/images/projects/octava/pwa/1-skeleton.jpg" },
    ],
    date: "2022-12",
    slug: "octava",
    techs: [
      { name: "Next.js", link: "https://www.npmjs.com/package/next" },
      { name: "swr", link: "https://www.npmjs.com/package/swr" },
      {
        name: "Styled Components",
        link: "https://www.npmjs.com/package/styled-components",
      },
      {
        name: "socket.io-client",
        link: "https://www.npmjs.com/package/socket.io-client",
      },
      { name: "i18next", link: "https://www.npmjs.com/package/i18next" },
      { name: "Husky", link: "https://www.npmjs.com/package/husky" },
    ],
    points: [
      "octava.points.1",
      {
        title: "octava.points.2",
        points: [
          "octava.points.2-1",
          "octava.points.2-2",
          "octava.points.2-3",
          {
            title: "octava.points.2-4",
            points: [
              "octava.points.2-4-1",
              "octava.points.2-4-2",
              "octava.points.2-4-3",
              "octava.points.2-4-4",
            ],
          },
        ],
      },
      {
        title: "octava.points.3",
        points: [
          "octava.points.3-1",
          "octava.points.3-2",
          "octava.points.3-3",
          "octava.points.3-4",
        ],
      },
      "octava.points.4",
      {
        title: "octava.points.5",
        points: ["octava.points.5-1", "octava.points.5-2", "octava.points.5-3"],
      },
      {
        title: "octava.points.6",
        points: ["octava.points.6-1", "octava.points.6-2", "octava.points.6-3"],
      },
      {
        title: "octava.points.7",
        points: ["octava.points.7-1", "octava.points.7-2", "octava.points.7-3"],
      },
      "octava.points.8",
      "octava.points.9",
    ],
  },
  {
    id: 1,
    name: "Uneed",
    link: ["https://uneed.ir", "https://merchant.uneed.ir"],
    logo: "/images/projects/uneed/logo.png",
    medias: [
      { src: "/images/projects/uneed/desktop/1.jpg" },
      {
        src: "/images/projects/uneed/desktop/2.jpg",
        title: "uneed.points.5",
      },
      { src: "/images/projects/uneed/desktop/3.jpg" },
      { src: "/images/projects/uneed/desktop/4.jpg" },
      { src: "/images/projects/uneed/desktop/5.jpg" },
      { src: "/images/projects/uneed/desktop/6.jpg" },
      { src: "/images/projects/uneed/desktop/7.jpg" },
      { src: "/images/projects/uneed/desktop/8.jpg" },
      { src: "/images/projects/uneed/desktop/9.jpg" },
      { src: "/images/projects/uneed/mobile/1.jpg" },
    ],
    date: "2020-10",
    slug: "uneed",
    techs: [
      { name: "Next.js", link: "https://www.npmjs.com/package/next" },
      {
        name: "Redux Saga",
        link: "https://www.npmjs.com/package/redux-saga",
      },
      { name: "express", link: "https://www.npmjs.com/package/express" },
      {
        name: "socket.io-client",
        link: "https://www.npmjs.com/package/socket.io-client",
      },
      {
        name: "Sass",
        link: "https://sass-lang.com/",
      },
      { name: "Husky", link: "https://www.npmjs.com/package/husky" },
      { name: "i18next", link: "https://www.npmjs.com/package/i18next" },
    ],
    points: [
      "uneed.points.1",
      "uneed.points.2",
      "uneed.points.3",
      "uneed.points.4",
    ],
  },
  {
    id: 2,
    name: "Tarinoo",
    link: [
      "https://tarinoo.ir",
      "https://zarco.ir",
      "https://lapert.ir",
      "https://risu.ir",
      "...",
    ],
    logo: "/images/projects/tarinoo/logo.jpg",
    medias: [
      {
        src: "/images/projects/tarinoo/1.jpg",
        title: "tarinoo.points.1",
      },
      {
        src: "/images/projects/tarinoo/2.jpg",
        title: "tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/3.jpg",
        title: "tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/4.jpg",
        title: "tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/5.jpg",
        title: "tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/6.jpg",
        title: "tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/7.jpg",
        title: "tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/8.jpg",
        title: "tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/9.jpg",
        title: "tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/10.jpg",
        title: "tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/11.jpg",
        title: "tarinoo.points.2",
      },
    ],
    date: "2021-05",
    slug: "tarinoo",
    techs: [
      { name: "Next.js", link: "https://www.npmjs.com/package/next" },
      {
        name: "Redux Toolkit",
        link: "https://redux-toolkit.js.org/",
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
      { name: "i18next", link: "https://www.npmjs.com/package/i18next" },
    ],
    points: ["tarinoo.points.1", "tarinoo.points.2"],
  },
  {
    id: 3,
    name: "Behtarino",
    link: ["https://behtarino.com", "https://gheymat.best"],
    logo: "/images/projects/behtarino/logo.png",
    medias: [
      { src: "/images/projects/behtarino/1.jpg" },
      { src: "/images/projects/behtarino/2.jpg" },
      { src: "/images/projects/behtarino/3.jpg" },
      { src: "/images/projects/behtarino/4.jpg" },
      { src: "/images/projects/behtarino/5.jpg" },
      { src: "/images/projects/behtarino/6.jpg" },
      { src: "/images/projects/behtarino/7.jpg" },
    ],
    date: "2022-04",
    slug: "behtarino",
    techs: [
      { name: "Next.js", link: "https://www.npmjs.com/package/next" },
      { name: "jotai", link: "https://www.npmjs.com/package/jotai" },
      {
        name: "Maplibre-gl",
        link: "https://www.npmjs.com/package/maplibre-gl",
      },
      { name: "swr", link: "https://www.npmjs.com/package/swr" },
      {
        name: "Goober",
        link: "https://www.npmjs.com/package/goober",
      },
    ],
    points: [
      "behtarino.points.1",
      "behtarino.points.2",
      "behtarino.points.3",
      "behtarino.points.4",
      {
        title: "behtarino.points.5",
        points: [
          "behtarino.points.5-1",
          "behtarino.points.5-2",
          "behtarino.points.5-3",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Bityon",
    link: "",
    logo: "/images/projects/bityon/logo.jpg",
    medias: [
      {
        src: "/images/projects/bityon/desktop/1.jpg",
        title: "bityon.points.1",
      },
      { src: "/images/projects/bityon/desktop/2.jpg" },
      { src: "/images/projects/bityon/desktop/3.jpg" },
      { src: "/images/projects/bityon/desktop/4.jpg" },
      { src: "/images/projects/bityon/desktop/5.jpg" },
      { src: "/images/projects/bityon/desktop/6.jpg" },
      {
        src: "/images/projects/bityon/desktop/7.jpg",
        title: "bityon.points.3",
      },
      { src: "/images/projects/bityon/mobile/1.jpg" },
      { src: "/images/projects/bityon/mobile/2.jpg" },
      { src: "/images/projects/bityon/mobile/3.jpg" },
      { src: "/images/projects/bityon/mobile/4.jpg" },
    ],
    date: "2021",
    slug: "bityon",
    techs: [
      { name: "Next.js", link: "https://www.npmjs.com/package/next" },
      {
        name: "Context API",
        link: "https://reactjs.org/docs/context.html",
      },
      {
        name: "React Hook Form",
        link: "https://react-hook-form.com/",
      },
      {
        name: "highcharts",
        link: "https://www.npmjs.com/package/highcharts",
      },
      { name: "i18next", link: "https://www.npmjs.com/package/i18next" },
    ],
    points: [
      {
        title: "bityon.points.1",
        points: [
          "bityon.points.1-1",
          "bityon.points.1-2",
          "bityon.points.1-3",
          "bityon.points.1-4",
        ],
      },
      "bityon.points.2",
      "bityon.points.3",
    ],
  },
  {
    id: 5,
    name: "BIZ",
    link: "https://www.bizmlm.ir",
    logo: "/images/projects/biz/logo.png",
    medias: [
      { src: "/images/projects/biz/1.jpg", title: "biz.points.1" },
      { src: "/images/projects/biz/2.jpg" },
      { src: "/images/projects/biz/3.jpg" },
      { src: "/images/projects/biz/4.jpg" },
      { src: "/images/projects/biz/5.jpg" },
      { src: "/images/projects/biz/6.jpg" },
      { src: "/images/projects/biz/7.jpg" },
      { src: "/images/projects/biz/8.jpg" },
    ],
    date: "2019-20",
    slug: "biz",
    techs: [
      { name: "React", link: "https://www.npmjs.com/package/react" },
      { name: "Express", link: "https://www.npmjs.com/package/express" },
      {
        name: "Styled Components",
        link: "https://www.npmjs.com/package/styled-components",
      },
      { name: "i18next", link: "https://www.npmjs.com/package/i18next" },
    ],
    points: [
      {
        title: "biz.points.1",
        points: ["biz.points.2-1", "biz.points.2-2", "biz.points.2-3"],
      },
      "biz.points.3",
      "biz.points.4",
    ],
  },
  {
    id: 6,
    name: "CRM Panel",
    link: "https://www.crm.ir",
    logo: "/images/projects/crm/logo.jpg",
    medias: [
      { src: "/images/projects/crm/1.jpg", title: "image 1" },
      { src: "/images/projects/crm/2.jpg", title: "image 2" },
      { src: "/images/projects/crm/3.jpg", title: "image 3" },
      { src: "/images/projects/crm/4.jpg", title: "image 4" },
    ],
    date: "2021",
    slug: "crm",
    techs: [
      { name: "React", link: "https://www.npmjs.com/package/react" },
      {
        name: "socket.io-client",
        link: "https://www.npmjs.com/package/socket.io-client",
      },
      {
        name: "React Query",
        link: "https://www.npmjs.com/package/react-query",
      },
      {
        name: "Styled Components",
        link: "https://www.npmjs.com/package/styled-components",
      },
    ],
    points: [
      {
        title: "crm.points.1",
        points: ["crm.points.1-1", "crm.points.1-2"],
      },
      "crm.points.2",
      "crm.points.3",
    ],
  },
  {
    id: 7,
    name: "And so forth ...",
    logo: "/images/projects/etc.jpg",
    date: "2018-present",
    slug: "etc",
    techs: [
      { name: "React", link: "https://www.npmjs.com/package/react" },
      {
        name: "React-native",
        link: "https://www.npmjs.com/package/react-native",
      },
      { name: "Angular", link: "https://www.npmjs.com/package/@angular/core" },
      {
        name: "WordPress",
        link: "https://wordpress.org/",
      },
    ],
  },
];

export default projectsData;
