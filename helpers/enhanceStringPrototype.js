import { STATIC } from "@constants";
import { imp } from "@stylesheets";

export const enhanceStringPrototype = () => {
  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
  };

  String.prototype.imp = function (prevent) {
    return prevent ? this : imp(this);
  };

  String.prototype.unImp = function () {
    return this.replace("".imp(), "");
  };

  String.prototype.static = function () {
    return `${STATIC}(${this})`;
  };
};
