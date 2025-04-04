import Image from "next/image";
import { FaStar } from "react-icons/fa";
import type { Testimonial } from "@/services/testimonial";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps): JSX.Element {
  const { name, role, company, avatar, content, rating, date, service } = testimonial;

  return (
    <article className="group overflow-hidden rounded-lg border bg-base-100 shadow-sm transition-shadow hover:shadow-md">
      <div className="block">
        <div className="p-6">
          <div className="mb-4 flex items-center gap-4">
            <div className="relative size-12 overflow-hidden rounded-full">
              <Image src={avatar} alt={name} fill objectFit="cover" />
            </div>
            <div>
              <h2 className="font-bold text-base-content">{name}</h2>
              <p className="text-sm text-base-content/70">
                {role} at {company}
              </p>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-1">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} className="size-4 text-warning" />
            ))}
          </div>
          <p className="mb-4 text-base-content/70">{content}</p>
          <div className="flex items-center justify-between text-sm text-base-content/70">
            <span>{new Date(date).toLocaleDateString()}</span>
            <span className="capitalize">{service.replace("-", " ")}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
