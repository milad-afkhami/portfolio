import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getHome } from "@/services/home";
import BlogCard from "@/components/cards/BlogCard";
import CardsWrapper from "@/components/cards/Wrapper";
import { baseUrl, resumeLink } from "@/configs/general";
import ProjectCard from "@/components/cards/ProjectCard";
import { FaDownload, FaArrowRight, FaEnvelope, FaChevronDown } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Milad Afkhami - Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 7+ years of experience, specializing in web development using JavaScript, TypeScript, React, Next.js, and Micro Frontends.",
  openGraph: {
    title: "Milad Afkhami - Senior Frontend Developer",
    description:
      "Senior Frontend Developer with 7+ years of experience, specializing in web development using JavaScript, TypeScript, React, Next.js, and Micro Frontends.",
    url: baseUrl,
    siteName: "Milad Afkhami's Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default async function Home(): Promise<JSX.Element> {
  const home = await getHome();

  if (!home) {
    return <div>Error loading home</div>;
  }

  const topBlogs = home.blogs;
  const topProjects = home.projects;

  return (
    <div className="space-y-12">
      <section className="flex flex-col items-center space-y-8 pt-12 text-center" id="hero">
        <div className="relative size-48 overflow-hidden rounded-full">
          <Image
            src="/images/logo-sm.jpg"
            alt="Logo"
            height={192}
            width={192}
            objectFit="cover"
            className="size-48 transition-opacity duration-300 hover:opacity-0"
          />
          <Image
            src="/images/avatar.jpg"
            alt="Logo"
            height={192}
            width={192}
            objectFit="contain"
            className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Milad Afkhami</h1>
          <p className="text-xl text-base-content/80">Senior Frontend Developer</p>
        </div>

        <p className="max-w-2xl text-base-content/70">
          With over 7 years of experience in web development, I specialize in building modern web applications using
          JavaScript, TypeScript, React, Next.js, and Micro Frontends. I&apos;m passionate about creating performant,
          accessible, and user-friendly web experiences.
        </p>

        <div className="flex flex-wrap items-center  justify-center gap-4">
          <Link href="/contact" className="btn btn-ghost">
            <FaEnvelope className="size-4" />
            Contact
          </Link>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaDownload className="size-5" />
            Download Resume
          </a>
        </div>
        <a href="/#latest-blog-posts" className="flex justify-center" aria-label="Scroll to latest blog posts">
          <FaChevronDown className="size-8 animate-bounce-slow text-base-content/50" />
        </a>
      </section>

      <section className="scroll-mt-[calc(var(--header-height)_+_1rem)] space-y-6" id="latest-blog-posts">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
          <Link href="/blog" className="btn btn-ghost">
            View All Posts
            <FaArrowRight className="size-4" />
          </Link>
        </div>
        <CardsWrapper>
          {topBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </CardsWrapper>
      </section>

      <section className="space-y-6" id="latest-projects">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="btn btn-ghost">
            View All Projects
            <FaArrowRight className="size-4" />
          </Link>
        </div>
        <CardsWrapper>
          {topProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </CardsWrapper>
      </section>

      <section className="space-y-4" id="intro-video">
        <h2 className="text-3xl font-bold">Watch My Introduction</h2>
        <div className="aspect-video overflow-hidden rounded-lg">
          <video
            src="/intro.mp4"
            className="size-full"
            autoPlay={false}
            muted={true}
            loop={false}
            controls={true}
            playsInline={true}
            poster="/images/intro-poster.png"
          />
        </div>
      </section>
    </div>
  );
}
