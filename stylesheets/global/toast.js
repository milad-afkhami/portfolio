import { createGlobalStyle } from "styled-components";
import { c } from "../";

// export const GlobalGridSystem = styled.a`
export const GlobalToastifyVariables = createGlobalStyle`
  :root {
    --toastify-color-light: #fff;
    --toastify-color-dark: #121212;
    --toastify-color-info: ${c("assistive-info")};
    --toastify-color-success: ${c("assistive-success")};
    --toastify-color-warning: ${c("assistive-warning")};
    --toastify-color-error: ${c("assistive-error")};
    --toastify-color-transparent: hsla(0, 0%, 100%, 0.7);
    --toastify-toast-width: 320px;
    --toastify-toast-background: #fff;
    --toastify-toast-min-height: 48px;
    --toastify-toast-max-height: 800px;
    --toastify-font-family: inherit;
    --toastify-z-index: calc(var(--overlay-z-index) + 1);
    --toastify-text-color-light: ${c("text-secondary")};
    --toastify-text-color-dark: ${c("bg-primary")};
    --toastify-text-color-info: ${c("bg-primary")};
    --toastify-text-color-success: ${c("bg-primary")};
    --toastify-text-color-warning: ${c("bg-primary")};
    --toastify-text-color-error: ${c("bg-primary")};
    --toastify-color-progress-dark: ${c("brand")};
    /* --toastify-color-progress-info: var(--toastify-color-info);
    --toastify-color-progress-success: var(--toastify-color-success);
    --toastify-color-progress-warning: var(--toastify-color-warning);
    --toastify-color-progress-error: var(--toastify-color-error); */
  }
`;
