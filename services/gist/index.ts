import { getGistsList } from "./list";
import { getGistDetail } from "./get";

 GistServices {
  static getList = getGistsList;
  static getDetail = getGistDetail;
}

            export default class