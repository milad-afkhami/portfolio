import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FaArrowLeft } from "react-icons/fa";
import { playgroundExperiments } from "@/configs/playground";

type PageProps = {
  params: { slug: string };
};

// Only the slugs defined in the config are valid routes; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: string }> {
  return playgroundExperiments.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const experiment = playgroundExperiments.find(({ slug }) => slug === params.slug);

  if (!experiment) return {};

  return {
    title: `${experiment.title} - Playground - Milad Afkhami`,
    description: experiment.description,
    alternates: { canonical: `/playground/${experiment.slug}` },
  };
}

export default function PlaygroundExperimentPage({ params }: PageProps): JSX.Element {
  const experiment = playgroundExperiments.find(({ slug }) => slug === params.slug);

  if (!experiment) notFound();

  return (
    // Break out of the site container/header/footer for an immersive, full-viewport toy.
    <div className="fixed inset-0 z-[60] bg-black">
      <Link
        href="/playground"
        aria-label="Back to Playground"
        title="Back to Playground"
        className="group absolute left-3 top-3 z-10 inline-flex h-9 items-center gap-2 rounded-full bg-black/40 px-2.5 text-sm text-white/90 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:bg-black/70 hover:text-white"
      >
        <FaArrowLeft className="size-3.5 shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-200 group-hover:max-w-28 group-hover:pr-1 group-hover:opacity-100">
          Playground
        </span>
      </Link>
      <iframe
        src={`/playground/${experiment.slug}.html`}
        title={experiment.title}
        className="size-full border-0"
        allow="fullscreen"
      />
    </div>
  );
}
