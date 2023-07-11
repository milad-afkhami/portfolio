interface IPackage {
  name: string;
  latestVersion: string;
  homepage: string;
  keywords: Array<string>;
  readmeFilename: string;
  description: string;
}

interface IPackageDetailed {
  _id: string;
  _rev: string;
  name: string;
  "dist-tags": {
    latest: string;
  };
  versions: Dictionary<Dictionary<unknown>>;
  time: Dictionary<string>;
  maintainers: Array<{ name: string; email: string }>;
  homepage: string;
  keywords: Array<string>;
  repository: {
    type: string;
    url: string;
  };
  author: {
    name: string;
  };
  bugs: {
    url: string;
  };
  license: string;
  readme: string;
  readmeFilename: string;
  description: string;
}
