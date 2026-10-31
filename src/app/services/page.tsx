import type { Metadata } from "next";
import { getAllServices } from "@/services/service";
import ServiceCard from "@/components/cards/ServiceCard";
import styles from "@/components/cards/collections.module.css";
import CollectionEmpty from "@/components/cards/CollectionEmpty";
import CollectionIntro from "@/components/cards/CollectionIntro";

export const metadata: Metadata = {
  title: "Services - Milad Afkhami",
  description: "Explore my professional services in web development, full stack consulting, and technical writing.",
  alternates: { canonical: "/services" },
};

export default async function ServicesPage(): Promise<JSX.Element> {
  const services = await getAllServices();

  return (
    <div>
      <CollectionIntro title="Services">
        Professional services I offer that help you build better web applications.
      </CollectionIntro>
      {services.length === 0 && <CollectionEmpty />}

      <div className={styles.stack}>
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}
