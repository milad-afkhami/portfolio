import styles from "./collections.module.css";
import type { PropsWithChildren } from "react";

export default function CollectionIntro({ title, children }: PropsWithChildren<{ title: string }>): JSX.Element {
  return (
    <header className={styles.intro}>
      <h1>{title}</h1>
      <p>{children}</p>
    </header>
  );
}
