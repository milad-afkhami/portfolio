import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import styles from "./collections.module.css";
import type { IService } from "@/types/general";

export default function ServiceCard({ service }: { service: IService }): JSX.Element {
  const { slug, title, description, features, technologies, actions } = service;
  return (
    <article className={styles.row}>
      <div>
        <h2>
          <Link href={`/services/${slug}`} className={styles.action}>
            {title}
          </Link>
        </h2>
        <p>{description}</p>
        <div className={styles.actions}>
          <Link href={`/services/${slug}`} className={styles.action}>
            Explore service <FaArrowRight aria-hidden="true" />
          </Link>
          <Link href="/contact" className={styles.action}>
            Get in touch
          </Link>
          {actions?.map((action) => (
            <Link key={action.label} href={action.url} className={styles.action}>
              {action.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        {technologies?.length ? (
          <ul className={styles.tags} aria-label={`${title} technologies`}>
            {technologies.map((tech) => (
              <li key={tech} className={styles.tag}>
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
