import { getBlogDetail } from "./get";
import { getPriorBlogs } from "./getPriors";

export class BlogServices {
  static getPriors = getPriorBlogs;
  static getDetail = getBlogDetail;
}
