import getPackagesList from "./list";
import getPackageDetail from "./details";

export default class PackageServices {
  static getList = getPackagesList;

  static getDetail = getPackageDetail;
}
