import imp from "@stylesheets/utils/important";

const enhanceStringPrototype = () => {
  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
  };

  String.prototype.imp = function (prevent) {
    return prevent ? this : imp(this);
  };

  String.prototype.unImp = function () {
    return this.replace("".imp(), "");
  };
};

export default enhanceStringPrototype;
