import Image from "next/image";
import type { Metadata } from "next";
import { experiences, skills } from "@/configs/about";
import { FaComments, FaHandshake, FaUsers } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About - Milad Afkhami",
  description: "Learn more about my professional background, skills, and experience in web development.",
  alternates: { canonical: "/about" },
};

export default function AboutPage(): JSX.Element {
  return (
    <div className="space-y-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg text-base-content/80">
            I&apos;m a Senior Frontend Developer with over 7 years of experience in building modern web applications. My
            passion lies in creating performant, accessible, and user-friendly web experiences using cutting-edge
            technologies.
          </p>
          <p className="text-lg text-base-content/80">
            I specialize in React, Next.js, TypeScript, and Micro Frontends architecture. I&apos;m constantly learning
            and exploring new technologies to stay at the forefront of web development.
          </p>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image src="/images/avatar.jpg" alt="Milad Afkhami" fill objectFit="cover" />
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <div key={experience.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">{experience.title}</h3>
                  <p className="text-base-content/80">{experience.company}</p>
                </div>
                <span className="text-sm text-base-content/70">{experience.period}</span>
              </div>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-2 text-base-content/80">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.id} className="space-y-4">
              <h3 className="text-xl font-bold">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item.id} className="flex items-center gap-2 text-base-content/80">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-3">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <FaUsers className="size-8 text-primary" />
            <h3 className="card-title">Team Player</h3>
            <p className="text-base-content/80">
              Demonstrating humility, hunger for growth, and emotional intelligence to contribute effectively in teams.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <FaHandshake className="size-8 text-primary" />
            <h3 className="card-title">Trust Building</h3>
            <p className="text-base-content/80">
              Building trust through vulnerability, encouraging healthy debates, and maintaining accountability in team
              settings.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <FaComments className="size-8 text-primary" />
            <h3 className="card-title">Communication</h3>
            <p className="text-base-content/80">
              Providing and receiving constructive feedback while maintaining clear and effective communication with
              team members.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
