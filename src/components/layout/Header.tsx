"use client";

import Link from "next/link";
import useToggle from "@/hooks/useToggle";
import { resumeLink } from "@/configs/general";
import { FaDownload, FaEnvelope, FaHamburger } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/services", label: "Services" },
  { href: "/favourites", label: "Favourites" },
  { href: "/prompts", label: "Prompt Library" },
];

export default function Header(): JSX.Element {
  const [isMenuOpen, toggleMenu] = useToggle(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-base-100/80 backdrop-blur-sm">
      <div className="container flex h-[var(--header-height)] items-center justify-between">
        <nav className="flex items-center">
          <div className="lg:hidden">
            <div className="dropdown dropdown-right">
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={toggleMenu}
                aria-label="Navigation menu toggle button"
                aria-expanded={isMenuOpen}
              >
                <FaHamburger className="size-5" />
              </button>
              <ul
                className={`menu dropdown-content w-52 rounded-box bg-base-100 p-2 shadow-lg ${
                  isMenuOpen ? "block" : "hidden"
                }`}
              >
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base-content/80 transition-colors hover:text-primary"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden space-x-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base-content/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-secondary btn-sm" aria-label="Download resume">
              <FaDownload className="size-4" />
              <span className="hidden sm:inline">Resume</span>
            </button>
          </a>
          <Link href="/contact" className="btn btn-ghost btn-sm" aria-label="Contact page link">
            <FaEnvelope className="size-4" />
            <span className="hidden sm:inline">Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
