"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { resumeLink } from "@/configs/general";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/packages", label: "Packages" },
  { href: "/services", label: "Services" },
  { href: "/prompts", label: "Prompt Library" },
  { href: "/playground", label: "Playground" },
  { href: "/favourites", label: "Favourites" },
];

export default function Header(): JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const current = (href: string) => (href === "/" ? pathname === href : pathname.startsWith(href));
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <header ref={header} className="site-header">
      <div className="header-inner container">
        <Link
          href="/"
          className="wordmark"
          aria-label="Milad Afkhami home"
          onClick={() => {
            setOpen(false);
          }}
        >
          milad<span>.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.slice(0, 4).map((link) => (
            <Link key={link.href} href={link.href} aria-current={current(link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="resume-action">
            <FaDownload aria-hidden="true" />
            <span>Resume</span>
          </a>
          <Link
            href="/contact"
            className="header-contact btn btn-primary"
            aria-current={current("/contact") ? "page" : undefined}
          >
            Let&apos;s talk
          </Link>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-controls="site-menu"
            aria-expanded={open}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            <span>{open ? "Close" : "Explore"}</span>
          </button>
        </div>
      </div>
      <nav id="site-menu" hidden={!open} className="site-menu container" aria-label="All pages">
        <div className="menu-grid">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={current(link.href) ? "page" : undefined}
              onClick={() => {
                setOpen(false);
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => {
              setOpen(false);
            }}
            aria-current={current("/contact") ? "page" : undefined}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
