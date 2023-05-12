import getGistsList from "./list";
import getGistDetail from "./get";

export default class GistServices {
  static getList = getGistsList;
  static getDetail = getGistDetail;
}
