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
  return (
    <div className={`${styles.page} ${portfolioFont.className}`}>
      <header className={styles.projectIntro}>
        <h1>Projects.</h1>
        <div>
          <p>
            Products, platforms, and developer tools I&apos;ve helped build. Open a project to explore the work behind
            it.
          </p>
          <p className={styles.collectionCount}>{projects.length} projects in the collection</p>
        </div>
      </header>
      {projects.length > 0 ? (
        <section aria-label="Project collection">
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <article key={project.slug}>
                <Link href={`/projects/${project.slug}`} className={styles.projectLink}>
                  <div className={styles.projectImage}>
                    <Image
                      src={project.images?.[0] ?? project.logo ?? "/images/projects/etc.jpg"}
                      alt={`${project.title} project preview`}
                      width={800}
                      height={500}
                      priority={index < 2}
                      sizes="(max-width: 767px) 90vw, 45vw"
                    />
                  </div>
                  <div className={styles.projectTitle}>
                    <h2>{project.title}</h2>
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
      <section className={`${styles.cta} mt-16`} aria-labelledby="project-contact">
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
