import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/services/service";
import { FaArrowLeft, FaCode, FaLightbulb, FaRobot, FaGraduationCap, FaSitemap } from "react-icons/fa";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

const iconMap = {
  FaCode,
  FaLightbulb,
  FaRobot,
  FaGraduationCap,
  FaSitemap,
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found - Milad Afkhami",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} - Milad Afkhami`,
    description: service.description,
    robots: { index: false, follow: false },
    alternates: { canonical: `/services/${params.slug}` },
  };
}

export default async function ServicePage({ params }: ServicePageProps): Promise<JSX.Element> {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <div className="space-y-8">
      <Link href="/services" className="inline-flex items-center gap-2 text-base-content/80 hover:text-base-content">
        <FaArrowLeft />
        Back to Services
      </Link>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="flex size-16 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="size-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">{service.title}</h1>
            <p className="text-xl text-base-content/80">{service.description}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-base-content/80">
                <span className="size-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/contact" className="btn btn-primary">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
