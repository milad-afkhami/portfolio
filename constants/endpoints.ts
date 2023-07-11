const endpoints = {
  blog: "/blog/get",
  blogs: "/blog/list",
  packagesList:
    "https://registry.npmjs.org/-/user/miladafkhami/package?format=cli",
  packagesDetails: (name: string) => `https://registry.npmjs.org/${name}`,
};

export default endpoints;
