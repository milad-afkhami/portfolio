import type { Metadata } from "next";
import { getAllServices } from "@/services/service";
import CardsWrapper from "@/components/cards/Wrapper";
import ServiceCard from "@/components/cards/ServiceCard";

export const metadata: Metadata = {
  title: "Services - Milad Afkhami",
  description: "Explore my professional services in web development, frontend consulting, and technical writing.",
  alternates: { canonical: "/services" },
};

export default async function ServicesPage(): Promise<JSX.Element> {
  const services = await getAllServices();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="text-xl text-base-content/80">
          Professional services I offer that help you build better web applications.
        </p>
      </div>

      <CardsWrapper>
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </CardsWrapper>
    </div>
  );
}
