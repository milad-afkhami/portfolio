import type { Metadata } from "next";
import { getAllPackages } from "@/services/package";
import PackageCard from "@/components/cards/PackageCard";
import styles from "@/components/cards/collections.module.css";
import CollectionEmpty from "@/components/cards/CollectionEmpty";
import CollectionIntro from "@/components/cards/CollectionIntro";

export const metadata: Metadata = {
  title: "Packages - Milad Afkhami",
  description: "Explore my open-source packages and contributions to the web development community.",
  alternates: { canonical: "/packages" },
};

export default async function PackagesPage(): Promise<JSX.Element> {
  const packages = await getAllPackages();

  return (
    <div>
      <CollectionIntro title="Packages">
        A collection of open-source packages and tools I&apos;ve developed to help the web development community.
      </CollectionIntro>
      {packages.length === 0 && <CollectionEmpty />}

      <div className={styles.stack}>
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}
