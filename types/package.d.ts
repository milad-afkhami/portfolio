interface IPackage {
  name: string;
  latestVersion: string;
  homepage: string;
  keywords: string[];
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
  versions: Dictionary<Dictionary>;
  time: Dictionary<string>;
  maintainers: { name: string; email: string }[];
  homepage: string;
  keywords: string[];
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
