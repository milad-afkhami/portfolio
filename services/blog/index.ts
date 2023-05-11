import { getBlogsList } from "./list";
import { getBlogDetail } from "./get";

export class BlogServices {
  static getList = getBlogsList;
  static getDetail = getBlogDetail;
}
