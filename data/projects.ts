const projectsData: Array<IProject> = [
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
      { src: "/images/projects/octava/pwa/2.jpg", title: "projects.octava.points.9" },
      { src: "/images/projects/octava/desktop/3.jpg" },
      { src: "/images/projects/octava/pwa/3.jpg" },
      { src: "/images/projects/octava/desktop/4.jpg" },
      { src: "/images/projects/octava/desktop/1-skeleton.jpg" },
      // prettier-ignore
      { src: "/images/projects/octava/desktop/1-blur.jpg", title: "projects.octava.points.7" },
      { src: "/images/projects/octava/desktop/5.jpg" },
      // prettier-ignore
      { src: "/images/projects/octava/pwa/4.jpg" },
      { src: "/images/projects/octava/pwa/5.jpg" },
      { src: "/images/projects/octava/desktop/6.jpg" },
      // prettier-ignore
      { src: "/images/projects/octava/pwa/6.jpg", title: "projects.octava.points.9" },
      { src: "/images/projects/octava/desktop/7.jpg" },
      { src: "/images/projects/octava/pwa/7.jpg" },
      { src: "/images/projects/octava/desktop/8.jpg" },
      { src: "/images/projects/octava/pwa/8.jpg" },
      { src: "/images/projects/octava/pwa/8-skeleton.jpg" },
      // prettier-ignore
      { src: "/images/projects/octava/desktop/5-skeleton.jpg" },
      { src: "/images/projects/octava/pwa/1-skeleton.jpg" },
    ],
    date: "2021-2",
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
    ],
    points: [
      "projects.octava.points.1",
      {
        title: "projects.octava.points.2",
        points: [
          "projects.octava.points.2-1",
          "projects.octava.points.2-2",
          "projects.octava.points.2-3",
          {
            title: "projects.octava.points.2-4",
            points: [
              "projects.octava.points.2-4-1",
              "projects.octava.points.2-4-2",
              "projects.octava.points.2-4-3",
              "projects.octava.points.2-4-4",
            ],
          },
        ],
      },
      {
        title: "projects.octava.points.3",
        points: [
          "projects.octava.points.3-1",
          "projects.octava.points.3-2",
          "projects.octava.points.3-3",
          "projects.octava.points.3-4",
        ],
      },
      "projects.octava.points.4",
      {
        title: "projects.octava.points.5",
        points: [
          "projects.octava.points.5-1",
          "projects.octava.points.5-2",
          "projects.octava.points.5-3",
        ],
      },
      {
        title: "projects.octava.points.6",
        points: [
          "projects.octava.points.6-1",
          "projects.octava.points.6-2",
          "projects.octava.points.6-3",
        ],
      },
      {
        title: "projects.octava.points.7",
        points: [
          "projects.octava.points.7-1",
          "projects.octava.points.7-2",
          "projects.octava.points.7-3",
        ],
      },
      "projects.octava.points.8",
      "projects.octava.points.9",
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
        title: "projects.uneed.points.5",
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
    date: "2020-1",
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
      { name: "i18next", link: "https://www.npmjs.com/package/i18next" },
    ],
    points: [
      "projects.uneed.points.1",
      "projects.uneed.points.2",
      "projects.uneed.points.3",
      "projects.uneed.points.4",
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
        title: "projects.tarinoo.points.1",
      },
      {
        src: "/images/projects/tarinoo/2.jpg",
        title: "projects.tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/3.jpg",
        title: "projects.tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/4.jpg",
        title: "projects.tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/5.jpg",
        title: "projects.tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/6.jpg",
        title: "projects.tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/7.jpg",
        title: "projects.tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/8.jpg",
        title: "projects.tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/9.jpg",
        title: "projects.tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/10.jpg",
        title: "projects.tarinoo.points.2",
      },
      {
        src: "/images/projects/tarinoo/11.jpg",
        title: "projects.tarinoo.points.2",
      },
    ],
    date: "2020-1",
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
    points: ["projects.tarinoo.points.1", "projects.tarinoo.points.2"],
  },
  {
    id: 3,
    name: "Behtarino",
    link: ["https://behtarino.com", "https://gheymat.best"],
    logo: "/images/projects/behtarino/logo.png",
    medias: [
      { src: "/images/projects/behtarino/1.jpg", title: "" },
      { src: "/images/projects/behtarino/2.jpg", title: "" },
      { src: "/images/projects/behtarino/3.jpg", title: "" },
      { src: "/images/projects/behtarino/4.jpg", title: "" },
      { src: "/images/projects/behtarino/5.jpg", title: "" },
      { src: "/images/projects/behtarino/6.jpg", title: "" },
      { src: "/images/projects/behtarino/7.jpg", title: "" },
    ],
    date: "2022",
    slug: "behtarino",
    techs: [
      { name: "Next.js", link: "https://www.npmjs.com/package/next" },
      { name: "swr", link: "https://www.npmjs.com/package/swr" },
      {
        name: "Goober",
        link: "https://www.npmjs.com/package/goober",
      },
      {
        name: "Maplibre-gl",
        link: "https://www.npmjs.com/package/maplibre-gl",
      },
    ],
    points: [
      "projects.behtarino.points.1",
      "projects.behtarino.points.2",
      "projects.behtarino.points.3",
      "projects.behtarino.points.4",
      {
        title: "projects.behtarino.points.5",
        points: [
          "projects.behtarino.points.5-1",
          "projects.behtarino.points.5-2",
          "projects.behtarino.points.5-3",
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
        title: "projects.bityon.points.1",
      },
      { src: "/images/projects/bityon/desktop/2.jpg" },
      { src: "/images/projects/bityon/desktop/3.jpg" },
      { src: "/images/projects/bityon/desktop/4.jpg" },
      { src: "/images/projects/bityon/desktop/5.jpg" },
      { src: "/images/projects/bityon/desktop/6.jpg" },
      {
        src: "/images/projects/bityon/desktop/7.jpg",
        title: "projects.bityon.points.3",
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
        title: "projects.bityon.points.1",
        points: [
          "projects.bityon.points.1-1",
          "projects.bityon.points.1-2",
          "projects.bityon.points.1-3",
          "projects.bityon.points.1-4",
        ],
      },
      "projects.bityon.points.2",
      "projects.bityon.points.3",
    ],
  },
  {
    id: 5,
    name: "BIZ",
    link: "https://www.bizmlm.ir",
    logo: "/images/projects/biz/logo.png",
    medias: [
      { src: "/images/projects/biz/1.jpg", title: "projects.biz.points.1" },
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
        title: "projects.biz.points.1",
        points: [
          "projects.biz.points.2-1",
          "projects.biz.points.2-2",
          "projects.biz.points.2-3",
        ],
      },
      "projects.biz.points.3",
      "projects.biz.points.4",
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
      { name: "React Query", link: "https://www.npmjs.com/package/next-seo" },
      {
        name: "Styled Components",
        link: "https://www.npmjs.com/package/styled-components",
      },
    ],
    points: [
      {
        title: "projects.crm.points.1",
        points: ["projects.crm.points.1-1", "projects.crm.points.1-2"],
      },
      "projects.crm.points.2",
      "projects.crm.points.3",
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
        link: "https://www.npmjs.com/package/next-seo",
      },
      { name: "Angular", link: "https://www.npmjs.com/package/next-seo" },
      { name: "wordpress", link: "https://www.npmjs.com/package/next-seo" },
    ],
  },
];

export default projectsData;
