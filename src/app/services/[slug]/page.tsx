import Link from "next/link";
import type { Metadata } from "next";
import { VscTools } from "react-icons/vsc";
import { notFound } from "next/navigation";
import { FaListCheck } from "react-icons/fa6";
import { getServiceBySlug } from "@/services/service";
import {
  FaArrowLeft,
  FaCode,
  FaLightbulb,
  FaRobot,
  FaGraduationCap,
  FaSitemap,
  FaCheck,
  FaRegLightbulb,
} from "react-icons/fa";

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
            <h1 className="mb-2 text-3xl font-bold">{service.title}</h1>
            <p className="text-lg text-base-content/80">{service.description}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            <FaRegLightbulb className="inline size-6" /> Features
          </h2>
          <ul className="space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-base-content/80">
                <span className="size-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {service.prerequisites?.length ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              <FaListCheck className="inline size-6" /> Prerequisites
            </h2>
            <ul className="space-y-3">
              {service.prerequisites.map((prerequisite) => (
                <li key={prerequisite} className="flex items-center gap-2 text-base-content/80">
                  <FaCheck className="size-4 text-primary" />
                  {prerequisite}
                </li>
              ))}
            </ul>
          </div>
        ) : undefined}

        {service.technologies?.length ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              <VscTools className="inline size-6" /> Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ) : undefined}

        <div className="flex justify-center">
          <Link href="/contact" className="btn btn-primary">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
