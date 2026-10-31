import type { Metadata } from "next";
import { email, linkedin, phone, telegram, whatsapp, zoom } from "@/configs/contact";
import { FaArrowRight, FaLinkedinIn, FaPhone, FaTelegram, FaVideo, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact - Milad Afkhami",
  description: "Get in touch with me for collaboration, questions, or just to say hello!",
  alternates: { canonical: "/contact" },
};
const channels = [
  { title: "LinkedIn", label: "Connect on LinkedIn", href: linkedin, icon: FaLinkedinIn },
  { title: "Telegram", label: "Message on Telegram", href: telegram, icon: FaTelegram },
  { title: "WhatsApp", label: "Message on WhatsApp", href: whatsapp, icon: FaWhatsapp },
  { title: "Phone", label: phone, href: `tel:${phone}`, icon: FaPhone },
  { title: "Zoom", label: "Open Zoom meeting", href: zoom, icon: FaVideo },
];
export default function ContactPage(): JSX.Element {
  return (
    <div>
      <header className="page-heading">
        <h1>
          Let&apos;s make
          <br />
          something useful.
        </h1>
        <p>Have a project, a technical question, or an idea to explore? Here&apos;s where to find me.</p>
      </header>
      <section className="contact-email" aria-labelledby="email-title">
        <h2 id="email-title">Start with an email.</h2>
        <p>Tell me what you&apos;re working on and how I can help.</p>
        <a href={`mailto:${email}`} className="contact-email-link">
          {email}
          <FaArrowRight aria-hidden="true" />
        </a>
      </section>
      <section className="contact-channels" aria-labelledby="channels-title">
        <h2 id="channels-title">Or find me here.</h2>
        <div>
          {channels.map(({ title, label, href, icon: Icon }) => (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="contact-channel">
              <Icon aria-hidden="true" />
              <span>
                <strong>{title}</strong>
                <span>{label}</span>
              </span>
              <FaArrowRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
