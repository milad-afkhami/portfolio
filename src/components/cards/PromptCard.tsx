import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import styles from "./collections.module.css";
import type { IPrompt } from "@/types/general";

export default function PromptCard({ prompt }: { prompt: IPrompt }): JSX.Element {
  const { slug, name, description, coverImage, kind } = prompt;
  return (
    <Link href={`/prompts/${slug}`} className={`${styles.link} ${styles.prompt}`}>
      <div className={styles.image}>
        <Image src={coverImage} alt="" fill sizes="150px" />
      </div>
      <div className={styles.body}>
        <h2>{name}</h2>
        {kind && <div className={styles.kind}>{kind === "skill" ? "Agent skill" : "Standing instructions"}</div>}
        <p>{description}</p>
        <span className={styles.action}>
          Read instructions <FaArrowRight aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
