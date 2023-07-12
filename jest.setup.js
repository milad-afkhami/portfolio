import "@testing-library/jest-dom/extend-expect";
import { createElement } from "react";
import { setup } from "goober";
import { prefix } from "goober/prefixer";
import shouldForwardProp from "@helpers/shouldForwardProp";

/* Due to the conflict of the 'goober' with the 'jest',
 the 'setup' has been used.
 */
setup(createElement, prefix, undefined, shouldForwardProp);
