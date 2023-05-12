import { createGlobalStyle } from "styled-components";

// const GlobalGridSystem = styled.a`

const GlobalToastifyVariables = createGlobalStyle`
  :root {
    --toastify-color-light: #fff;
    --toastify-color-dark: #121212;
    --toastify-color-info: var(--color-assistive-info);
    --toastify-color-success: var(--color-assistive-success);
    --toastify-color-warning: var(--color-assistive-warning);
    --toastify-color-error: var(--color-assistive-error);
    --toastify-color-transparent: hsla(0, 0%, 100%, 0.7);
    --toastify-toast-width: 320px;
    --toastify-toast-background: #fff;
    --toastify-toast-min-height: 48px;
    --toastify-toast-max-height: 800px;
    --toastify-font-family: inherit;
    --toastify-z-index: calc(var(--overlay-z-index) + 1);
    --toastify-text-color-light: var(--color-text-secondary);
    --toastify-text-color-dark: var(--color-text-primary);
    --toastify-text-color-info: var(--color-text-primary);
    --toastify-text-color-success: var(--color-text-primary);
    --toastify-text-color-warning: var(--color-text-primary);
    --toastify-text-color-error: var(--color-text-primary);
    --toastify-color-progress-dark: var(--color-brand);
    /* --toastify-color-progress-info: var(--toastify-color-info);
    --toastify-color-progress-success: var(--toastify-color-success);
    --toastify-color-progress-warning: var(--toastify-color-warning);
    --toastify-color-progress-error: var(--toastify-color-error); */
  }
`;
