import { Fragment } from "react";

const combineContexts = (contexts) => {
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

export default combineContexts;
