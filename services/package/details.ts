import Http from "@utils/Http";
import __pick from "lodash-es/pick";
import endpoints from "@constants/endpoints";
import type { IPackage, IPackageDetailed } from "@_types/package";

export default async function getPackageDetails(
  name: string
): Promise<IPackage> {
  const result = await Http.get<IPackageDetailed>(
    endpoints.packagesDetails(name)
  );

  const details: IPackage = {
    ...__pick(result, [
      "name",
      "homepage",
      "keywords",
      "readmeFilename",
      "description",
    ]),
    latestVersion: result["dist-tags"].latest,
  };

  return details;
}
