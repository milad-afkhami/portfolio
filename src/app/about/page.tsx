import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import localFont from "next/font/local";
import styles from "./redesign.module.css";
import { resumeLink } from "@/configs/general";
import { experiences, skills } from "@/configs/about";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const portfolioFont = localFont({ src: "./fonts/Figtree.ttf", display: "swap" });

export const metadata: Metadata = {
  title: "About - Milad Afkhami",
  description: "Learn more about my professional background, skills, and experience in web development.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Work as a team",
    text: "Humility, a hunger for growth, and emotional intelligence shape how I contribute to a team.",
  },
  {
    title: "Build trust",
    text: "I value honest conversations, healthy debate, and accountability for the work we share.",
  },
  {
    title: "Keep communication clear",
    text: "I give and welcome constructive feedback, and make room for people to ask questions.",
  },
];

export default function AboutPage(): JSX.Element {
  return (
    <div className={`${styles.page} ${portfolioFont.className}`}>
      <section className={styles.hero} aria-labelledby="about-title">
        <div>
          <h1 id="about-title">
            I&apos;m Milad.
            <br />I build for people.
          </h1>
          <p className={styles.role}>Senior Full Stack Developer</p>
          <p className={styles.intro}>
            I&apos;m a developer with over 7 years of experience building web applications, from the interfaces people
            use to the systems behind them.
          </p>
          <p className={styles.intro}>
            I specialize in React, Next.js, TypeScript, and micro frontend architecture. I care about performance,
            accessibility, and making complex things easier to use. There&apos;s always more to learn.
          </p>
          <div className={styles.actions}>
            <Link href="/projects" className={styles.button}>
              View my projects <FaArrowRight aria-hidden="true" />
            </Link>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer" className={styles.textLink}>
              <FaDownload aria-hidden="true" /> Download resume
            </a>
          </div>
        </div>
        <figure className={styles.portrait}>
          <div className={styles.portraitImage}>
            <Image src="/images/avatar.jpg" alt="Milad Afkhami" fill priority sizes="(max-width: 767px) 90vw, 40vw" />
          </div>
          <figcaption className={styles.caption}>
            <strong>Milad Afkhami</strong>
            <span>Developer &amp; teammate</span>
          </figcaption>
        </figure>
      </section>
      <section className={`${styles.section} ${styles.sectionGrid}`} aria-labelledby="experience-title">
        <div className={styles.sectionLead}>
          <h2 id="experience-title">Experience that shapes my work.</h2>
          <p>My experience across product teams, platforms, and the full web stack.</p>
        </div>
        <div>
          {experiences.map((experience, index) => (
            <article key={experience.id} className={styles.experience}>
              <p className={styles.period}>{experience.period}</p>
              <h3>{experience.title}</h3>
              <p className={styles.company}>
                {experience.company} / {experience.location}
                {index === 0 && <span className={styles.current}>Current role</span>}
              </p>
              <ul className={styles.achievements}>
                <li>{experience.achievements[0]}</li>
              </ul>
              {experience.achievements.length > 1 && (
                <details className={styles.details}>
                  <summary>More about my work at {experience.company}</summary>
                  <ul className={styles.achievements}>
                    {experience.achievements.slice(1).map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </details>
              )}
              <ul className={styles.tags} aria-label={`Technologies at ${experience.company}`}>
                {experience.technologies.map((tech) => (
                  <li key={tech} className={styles.tag}>
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionGrid}`} aria-labelledby="skills-title">
        <div className={styles.sectionLead}>
          <h2 id="skills-title">What I work with.</h2>
          <p>The languages and tools I bring to a project.</p>
        </div>
        <div>
          {skills.map((skill) => (
            <div key={skill.id} className={styles.skillGroup}>
              <h3>{skill.category}</h3>
              <ul className={styles.tags}>
                {skill.items.map((item) => (
                  <li key={item.id} className={styles.tag}>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section} aria-labelledby="team-title">
        <h2 id="team-title">Good software is a team effort.</h2>
        <div className={styles.principles}>
          {principles.map((principle) => (
            <div key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.cta} aria-labelledby="contact-title">
        <div>
          <h2 id="contact-title">Have something in mind?</h2>
          <p>Let&apos;s talk about what you&apos;re building.</p>
        </div>
        <Link href="/contact" className={styles.button}>
          Get in touch <FaArrowRight aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
