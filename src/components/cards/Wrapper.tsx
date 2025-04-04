import type { PropsWithChildren } from "react";

export default function CardsWrapper({ children }: PropsWithChildren): JSX.Element {
  return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}
