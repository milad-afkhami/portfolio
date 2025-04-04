import type { Metadata } from "next";
import { email, linkedin, phone, telegram, whatsapp, zoom } from "@/configs/contact";
import { FaEnvelope, FaLinkedinIn, FaPhone, FaTelegram, FaVideo, FaWhatsappSquare } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact - Milad Afkhami",
  description: "Get in touch with me for collaboration, questions, or just to say hello!",
  alternates: { canonical: "/contact" },
};

export default function ContactPage(): JSX.Element {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-xl text-base-content/80">
          Have a question or want to work together? I&apos;d love to hear from you!
        </p>
      </div>

      <div className="grid">
        <div className="w-full space-y-8">
          <div className="grid gap-4 space-y-6 md:grid-cols-2">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <FaEnvelope className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href={`mailto:${email}`} target="_blank" className="text-base-content/80 hover:text-primary">
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <FaLinkedinIn className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a href={linkedin} target="_blank" className="text-base-content/80 hover:text-primary">
                  {linkedin}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <FaTelegram className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Telegram</h3>
                <a href={telegram} target="_blank" className="text-base-content/80 hover:text-primary">
                  {telegram}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <FaWhatsappSquare className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <a href={whatsapp} target="_blank" className="text-base-content/80 hover:text-primary">
                  {whatsapp}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <FaPhone className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href={`tel:${phone}`} target="_blank" className="text-base-content/80 hover:text-primary">
                  {phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <FaVideo className="size-6 text-primary" />
              </div>
              <div>
                <a href={zoom} target="_blank" className="hover:text-primary">
                  <h3 className="font-semibold">Zoom</h3>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <ContactForm /> */}
      </div>
    </div>
  );
}
