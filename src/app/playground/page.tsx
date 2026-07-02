import type { Metadata } from "next";
import CardsWrapper from "@/components/cards/Wrapper";
import { playgroundExperiments } from "@/configs/playground";
import PlaygroundCard from "@/components/cards/PlaygroundCard";

export const metadata: Metadata = {
  title: "Playground - Milad Afkhami",
  description:
    "A collection of interactive experiments and generative toys — small self-contained things I build for fun.",
  alternates: { canonical: "/playground" },
};

export default function PlaygroundPage(): JSX.Element {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Playground</h1>
        <p className="text-xl text-base-content/80">
          Interactive experiments and generative toys — small, self-contained things I build for fun. Pick one and play
          with it.
        </p>
      </div>

      <CardsWrapper>
        {playgroundExperiments.map((experiment) => (
          <PlaygroundCard key={experiment.slug} experiment={experiment} />
        ))}
      </CardsWrapper>
    </div>
  );
}
