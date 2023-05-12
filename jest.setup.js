import "@testing-library/jest-dom/extend-expect";
import { setup } from "goober";
import { createElement } from "react";

/* Due to the conflict of the 'goober' with the 'jest',
 the 'setup' has been used.
 */
setup(createElement, undefined);
