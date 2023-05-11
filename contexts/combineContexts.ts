import React, { Fragment } from "react";

export const combineContexts = (contexts) => {
  return contexts.reduce(
    (AccumulatedComponents, CurrentComponent) =>
      ({ children }) =>
        (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        ),
    <Fragment />
  );
};
