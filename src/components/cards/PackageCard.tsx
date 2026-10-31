import styles from "./collections.module.css";
import type { IPackage } from "@/types/general";
import { FaGithub, FaNpm, FaBook } from "react-icons/fa";

export default function PackageCard({ pkg }: { pkg: IPackage }): JSX.Element {
  const { name, description, version, repository, npm, documentation, features, technologies } = pkg;
  return (
    <article className={styles.row}>
      <div>
        <h2>{name}</h2>
        <p>Version {version}</p>
        <p>{description}</p>
        <div className={styles.actions}>
          <a
            href={npm}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.action}
            aria-label={`${name} on npm`}
          >
            <FaNpm aria-hidden="true" /> npm
          </a>
          <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.action}
            aria-label={`${name} source on GitHub`}
          >
            <FaGithub aria-hidden="true" /> Source
          </a>
          <a
            href={documentation}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.action}
            aria-label={`${name} documentation`}
          >
            <FaBook aria-hidden="true" /> Documentation
          </a>
        </div>
      </div>
      <div>
        <ul className={styles.tags} aria-label={`${name} technologies`}>
          {technologies.map((tech) => (
            <li key={tech} className={styles.tag}>
              {tech}
            </li>
          ))}
        </ul>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
