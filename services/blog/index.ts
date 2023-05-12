import getBlogsList from "./list";
import getBlogDetail from "./get";

export default class BlogServices {
  static getList = getBlogsList;
  static getDetail = getBlogDetail;
}
