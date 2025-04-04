"use client";

import { useState } from "react";
import type { Nullable } from "ts-wiz";
import { FaPaperPlane } from "react-icons/fa";
import { submitContactForm } from "@/services/contact";
import type { ContactFormData } from "@/services/contact";

export default function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: Nullable<"success" | "error">;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const result = await submitContactForm(formData);
      setStatus({
        type: result.success ? "success" : "error",
        message: result.message,
      });
      if (result.success) {
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <form onSubmit={handleSubmit} className="card-body space-y-6">
        <div>
          <h2 className="card-title">Get in Touch</h2>
          <p className="text-base-content/80">
            Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered"
              placeholder="Your name"
            />
          </div>

          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="subject" className="label">
            <span className="label-text">Subject</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="input input-bordered"
            placeholder="What's this about?"
          />
        </div>

        <div className="form-control">
          <label htmlFor="message" className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="textarea textarea-bordered h-32"
            placeholder="Your message..."
          />
        </div>

        {status.type && (
          <div className={`alert ${status.type === "success" ? "alert-success" : "alert-error"}`}>
            <span>{status.message}</span>
          </div>
        )}
        <div className="card-actions">
          <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="loading loading-spinner" />
            ) : (
              <>
                Send Message
                <FaPaperPlane className="size-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
