import dynamic from "next/dynamic";

/**
 * An HOC component to render something only on client.
 * Takes no props only children
 * @type {import("react").ComponentType<{children:import("react").ReactElement}>}
 */
export const NoSSR = dynamic(
  () => Promise.resolve(({ children }) => <>{children}</>),
  { ssr: false }
);
