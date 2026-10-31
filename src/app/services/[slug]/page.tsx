import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/services/service";

type ServicePageProps = {
  params: {
    slug: string;
  };
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

  return (
    <article className="detail-page space-y-8">
      <Link href="/services" className="back-link">
        Back to Services
      </Link>
      <header className="detail-header">
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </header>
      <section className="space-y-5">
        <h2>What we can work on</h2>
        <ul className="list-disc space-y-3 pl-5 text-[#526879]">
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
      {service.prerequisites?.length ? (
        <section className="space-y-5">
          <h2>Before we start</h2>
          <ul className="list-disc space-y-3 pl-5 text-[#526879]">
            {service.prerequisites.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {service.technologies?.length ? (
        <section className="space-y-5">
          <h2>Technologies</h2>
          <div className="detail-tags">
            {service.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </section>
      ) : null}
      <section className="space-y-4">
        <h2>Tell me about your project.</h2>
        <p>Share what you need and where you are in the process.</p>
        <Link href="/contact" className="btn btn-primary">
          Discuss {service.title}
        </Link>
      </section>
    </article>
  );
}
