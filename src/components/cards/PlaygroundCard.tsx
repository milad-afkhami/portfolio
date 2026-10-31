import Link from "next/link";
import type { IconType } from "react-icons";
import styles from "./collections.module.css";
import type { IPlaygroundExperiment } from "@/configs/playground";
import { FaArrowRight, FaMusic, FaMicrophone, FaGlobe, FaFeather, FaWater } from "react-icons/fa";

const icons: Record<string, IconType | undefined> = {
  "flow-field": FaWater,
  "gravity-music-box": FaMusic,
  "vowel-choir": FaMicrophone,
  "orbital-sequencer": FaGlobe,
  "dawn-chorus": FaFeather,
};

export default function PlaygroundCard({ experiment }: { experiment: IPlaygroundExperiment }): JSX.Element {
  const { slug, title, description, tags } = experiment;
  const Icon = icons[slug] ?? FaMusic;
  return (
    <article className={styles.card}>
      <Link href={`/playground/${slug}`} className={styles.link}>
        <div className={styles.body}>
          <div className={styles.heading}>
            <Icon aria-hidden="true" />
            <h2>{title}</h2>
          </div>
          <p>{description}</p>
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
          <span className={styles.action}>
            Open experiment <FaArrowRight aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
