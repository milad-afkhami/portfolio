import type { Metadata } from "next";
import { getAllPackages } from "@/services/package";
import CardsWrapper from "@/components/cards/Wrapper";
import PackageCard from "@/components/cards/PackageCard";

export const metadata: Metadata = {
  title: "Packages - Milad Afkhami",
  description: "Explore my open-source packages and contributions to the web development community.",
  alternates: { canonical: "/packages" },
};

export default async function PackagesPage(): Promise<JSX.Element> {
  const packages = await getAllPackages();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Packages</h1>
        <p className="text-xl text-base-content/80">
          A collection of open-source packages and tools I&apos;ve developed to help the web development community.
        </p>
      </div>

      <CardsWrapper>
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </CardsWrapper>
    </div>
  );
}
