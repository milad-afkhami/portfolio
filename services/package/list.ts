import Http from "@utils/Http";
import endpoints from "@constants/endpoints";
import getPackageDetails from "./details";

export default async function getPackagesList() {
  const result = await Http.get<Dictionary<string>>(endpoints.packagesList);

  const names = Object.keys(result);

  const list = await Promise.all(names.map(getPackageDetails));

  return list;
}
