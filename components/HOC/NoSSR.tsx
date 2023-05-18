import dynamic from "next/dynamic";
import type { ComponentType, PropsWithChildren } from "react";

/** An HOC component to render a piece only on client side. */
const NoSSR: ComponentType<PropsWithChildren> = dynamic(
  // eslint-disable-next-line react/jsx-no-useless-fragment
  () => Promise.resolve(({ children }) => <>{children}</>),
  { ssr: false }
);

export default NoSSR;
