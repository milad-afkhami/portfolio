import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const links = [
  ["/projects", "Projects"],
  ["/about", "About"],
  ["/blog", "Blog"],
  ["/packages", "Packages"],
  ["/services", "Services"],
  ["/prompts", "Prompt Library"],
  ["/playground", "Playground"],
  ["/favourites", "Favourites"],
];

export default function Footer(): JSX.Element {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href="/" className="wordmark">
              milad<span>.</span>
            </Link>
            <p>Thoughtful code. Useful experiences.</p>
            <Link href="/contact" className="action-link">
              Get in touch
            </Link>
          </div>
          <nav aria-label="Footer navigation" className="footer-links">
            {links.map(([href, label]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Milad Afkhami</p>
          <div className="social-links">
            <a href="https://github.com/miladafkhami" target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a href="https://linkedin.com/in/miladafkhami" target="_blank" rel="noopener noreferrer">
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a href="https://twitter.com/miladafkhami" target="_blank" rel="noopener noreferrer">
              <FaTwitter aria-hidden="true" /> Twitter
            </a>
          </div>
          <a href="#main-content" className="action-link">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
