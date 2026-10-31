import styles from "./collections.module.css";
import type { PropsWithChildren } from "react";

export default function CardsWrapper({ children }: PropsWithChildren): JSX.Element {
  return <div className={styles.grid}>{children}</div>;
}
