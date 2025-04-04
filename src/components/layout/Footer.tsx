"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

const sitemapLinks = [
  {
    title: "Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/blog", label: "Blog" },
      { href: "/projects", label: "Projects" },
      { href: "/about", label: "About" },
      { href: "/packages", label: "Packages" },
      { href: "/services", label: "Services" },
      { href: "/favourites", label: "Favourites" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

const socialLinks = [
  { href: "https://github.com/miladafkhami", label: "GitHub", icon: FaGithub },
  { href: "https://linkedin.com/in/miladafkhami", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://twitter.com/miladafkhami", label: "Twitter", icon: FaTwitter },
];

export default function Footer(): JSX.Element {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-base-200">
      <div className="container py-12">
        <div className="mb-8 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">MA</div>
          <button onClick={scrollToTop} className="btn btn-circle btn-ghost btn-sm" aria-label="Scroll to top">
            <FaArrowUp className="size-4" />
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sitemapLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">{section.title}</h3>
              <ul className="grid grid-cols-2 gap-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-base-content/80 hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base-content/80 hover:text-primary"
                    aria-label={link.label}
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-base-content/70">
          © {new Date().getFullYear()} Milad Afkhami. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
