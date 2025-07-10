import Image from "next/image";
import type { Metadata } from "next";
import { FaDownload } from "react-icons/fa";
import { getAbout } from "@/services/about";
import { resumeLink } from "@/configs/general";
import MDXRemote from "@/components/MDXRemote";

export const metadata: Metadata = {
  title: "About - Milad Afkhami",
  description: "Learn more about my professional background, skills, and experience in web development.",
  alternates: { canonical: "/about" },
};

export default async function AboutPage(): Promise<JSX.Element> {
  const about = await getAbout();

  if (!about) {
    return <div>Error loading about</div>;
  }

  const { coverImage, text, virtues, skills } = about;

  return (
    <div className="space-y-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">About Me</h1>
          <div className="text-lg text-base-content/80">
            <MDXRemote content={text} />
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image src={coverImage} alt="Milad Afkhami" fill objectFit="cover" />
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-3">
        {virtues.map((virtue) => (
          <div key={virtue.name} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="card-title">
                <h3>{virtue.name}</h3>
              </div>
              <p className="text-base-content/80">{virtue.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.category} className="space-y-4">
              <h3 className="text-xl font-bold">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-base-content/80">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Experience</h2>
        <a href={resumeLink} className="btn btn-secondary btn-lg" target="_blank" rel="noopener noreferrer">
          <FaDownload className="size-5" /> See my experience and skills in my resume
        </a>
      </div>
    </div>
  );
}
