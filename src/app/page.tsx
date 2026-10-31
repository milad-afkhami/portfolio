import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";
import { getAllBlogs } from "@/services/blog";
import BlogCard from "@/components/cards/BlogCard";
import { getAllProjects } from "@/services/project";
import CardsWrapper from "@/components/cards/Wrapper";
import ProjectCard from "@/components/cards/ProjectCard";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { homeBlogsCount, homeProjectsCount, resumeLink } from "@/configs/general";

export default async function Home(): Promise<JSX.Element> {
  const [blogs, projects] = await Promise.all([getAllBlogs(), getAllProjects()]);
  return (
    <div>
      <section className={styles.hero} id="hero" aria-labelledby="home-title">
        <div>
          <h1 id="home-title">
            Useful things.
            <br />
            Thoughtfully built.
          </h1>
          <p className={styles.name}>Milad Afkhami / Senior Full Stack Developer</p>
          <p>
            I build web applications with JavaScript, TypeScript, React, Next.js, and micro frontends. Over 7 years of
            turning complex requirements into experiences people can use.
          </p>
          <div className={styles.actions}>
            <Link href="/projects" className="btn btn-primary">
              Explore my work <FaArrowRight aria-hidden="true" />
            </Link>
            <Link href="/contact" className="action-link">
              Get in touch
            </Link>
          </div>
        </div>
        <div className={styles.portrait}>
          <Image src="/images/avatar.jpg" alt="Milad Afkhami" fill priority sizes="(max-width:767px) 90vw,40vw" />
        </div>
      </section>
      <section className={`${styles.section} ${styles.intro}`} aria-labelledby="home-about">
        <h2 id="home-about">
          From the interface
          <br />
          to the architecture.
        </h2>
        <div>
          <p>
            I care about how software feels to use and how it holds up behind the scenes. My work spans product
            interfaces, reusable libraries, and the systems that connect them.
          </p>
          <div className={styles.actions}>
            <Link href="/about" className="action-link">
              More about me <FaArrowRight aria-hidden="true" />
            </Link>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="action-link">
              <FaDownload aria-hidden="true" /> Download resume
            </a>
          </div>
        </div>
      </section>
      <section className={styles.section} id="latest-projects" aria-labelledby="home-projects">
        <div className={styles.sectionHead}>
          <h2 id="home-projects">Selected projects.</h2>
          <Link href="/projects" className="action-link">
            All projects <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
        <CardsWrapper>
          {projects.slice(0, homeProjectsCount).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </CardsWrapper>
      </section>
      <section className={styles.section} id="latest-blog-posts" aria-labelledby="home-writing">
        <div className={styles.sectionHead}>
          <h2 id="home-writing">Notes from the work.</h2>
          <Link href="/blog" className="action-link">
            All articles <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
        <CardsWrapper>
          {blogs.slice(0, homeBlogsCount).map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </CardsWrapper>
      </section>
      <section className={styles.section} id="intro-video" aria-labelledby="home-video">
        <h2 id="home-video">A little introduction.</h2>
        <video src="/intro.mp4" controls muted playsInline preload="none" poster="/images/intro-poster.png" />
      </section>
      <section className={styles.callout} aria-labelledby="home-contact">
        <div>
          <h2 id="home-contact" className="text-3xl font-semibold">
            What are you working on?
          </h2>
          <p>Let&apos;s talk about your next project.</p>
        </div>
        <Link href="/contact" className="btn btn-primary">
          Start a conversation <FaArrowRight aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
