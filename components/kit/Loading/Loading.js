import React from "react";

export const Loading = ({ loading = true, children, className }) => {
  return loading ? <span className={className} /> : children;
};
