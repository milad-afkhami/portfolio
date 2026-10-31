import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { FaArrowRight } from "react-icons/fa";
import styles from "../about/redesign.module.css";
import { getAllProjects } from "@/services/project";

const portfolioFont = localFont({ src: "../about/fonts/Figtree.ttf", display: "swap" });

export const metadata: Metadata = {
  title: "Projects - Milad Afkhami",
  description:
    "Explore my portfolio of web development projects, including React applications, micro frontends, and more.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage(): Promise<JSX.Element> {
  const projects = await getAllProjects();
  const featured = projects.find((project) => project.slug === "behtarino") ?? projects.at(0);
  const remainingProjects = projects.filter((project) => project.slug !== featured?.slug);
  const visualProjects = remainingProjects.filter((project) => project.images?.length);
  const otherProjects = remainingProjects.filter((project) => !project.images?.length);

  return (
    <div className={`${styles.page} ${portfolioFont.className}`}>
      <header className={styles.projectIntro}>
        <h1>
          Projects with
          <br />a purpose.
        </h1>
        <p>
          Marketplaces, developer tools, and everyday web experiences. Explore the products I&apos;ve helped build and
          the engineering behind them.
        </p>
      </header>
      {featured ? (
        <article className={styles.featured}>
          {featured.images?.[0] && (
            <Link
              href={`/projects/${featured.slug}`}
              className={styles.featureImage}
              aria-label={`Explore ${featured.title}`}
            >
              <Image
                src={featured.images[0]}
                alt={`${featured.title} project preview`}
                width={1000}
                height={650}
                priority
                sizes="(max-width: 767px) 90vw, 55vw"
              />
            </Link>
          )}
          <div className={styles.featureBody}>
            <h2>{featured.title}</h2>
            <p>{featured.shortDescription}</p>
            <ul className={styles.tags} aria-label="Featured project technologies">
              {featured.technologies.map((tech) => (
                <li key={tech} className={styles.tag}>
                  {tech}
                </li>
              ))}
            </ul>
            <Link href={`/projects/${featured.slug}`} className={styles.textLink}>
              Explore {featured.title} <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </article>
      ) : (
        <div className={styles.empty}>
          <h2>Projects are currently unavailable.</h2>
          <p>
            Please reload this page, or{" "}
            <Link href="/contact" className={styles.textLink}>
              get in touch
            </Link>{" "}
            to hear about my work.
          </p>
        </div>
      )}
      {visualProjects.length > 0 && (
        <section className={styles.section} style={{ marginTop: "3rem" }} aria-labelledby="more-projects">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 id="more-projects">More of my work.</h2>
            <p>{projects.length} projects in the collection</p>
          </div>
          <div className={styles.projectGrid}>
            {visualProjects.map((project) => (
              <article key={project.slug}>
                <Link href={`/projects/${project.slug}`} className={styles.projectLink}>
                  <div className={styles.projectImage}>
                    <Image
                      src={project.images?.[0] ?? "/images/projects/etc.jpg"}
                      alt={`${project.title} project preview`}
                      width={800}
                      height={500}
                      sizes="(max-width: 767px) 90vw, 45vw"
                    />
                  </div>
                  <div className={styles.projectTitle}>
                    <h3>{project.title}</h3>
                    <FaArrowRight aria-hidden="true" />
                  </div>
                  <p>{project.shortDescription}</p>
                  <ul className={styles.tags} aria-label={`${project.title} technologies`}>
                    {project.technologies.map((tech) => (
                      <li key={tech} className={styles.tag}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
      {otherProjects.length > 0 && (
        <section className={styles.section} aria-labelledby="also-built">
          <h2 id="also-built">Also in the collection.</h2>
          <div className={styles.archive}>
            {otherProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className={styles.projectLink}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  <ul className={styles.tags} aria-label={`${project.title} technologies`}>
                    {project.technologies.map((tech) => (
                      <li key={tech} className={styles.tag}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <FaArrowRight aria-hidden="true" className="shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      )}
      <section className={styles.cta} aria-labelledby="project-contact">
        <div>
          <h2 id="project-contact">Let&apos;s build something useful.</h2>
          <p>Have a project or a technical challenge? I&apos;d like to hear about it.</p>
        </div>
        <Link href="/contact" className={styles.button}>
          Get in touch <FaArrowRight aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
