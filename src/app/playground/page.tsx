import type { Metadata } from "next";
import CardsWrapper from "@/components/cards/Wrapper";
import { playgroundExperiments } from "@/configs/playground";
import PlaygroundCard from "@/components/cards/PlaygroundCard";
import CollectionIntro from "@/components/cards/CollectionIntro";

export const metadata: Metadata = {
  title: "Playground - Milad Afkhami",
  description:
    "A collection of interactive experiments and generative toys — small self-contained things I build for fun.",
  alternates: { canonical: "/playground" },
};

export default function PlaygroundPage(): JSX.Element {
  return (
    <div>
      <CollectionIntro title="Playground">
        Interactive experiments and generative toys — small, self-contained things I build for fun. Pick one and play
        with it.
      </CollectionIntro>

      <CardsWrapper>
        {playgroundExperiments.map((experiment) => (
          <PlaygroundCard key={experiment.slug} experiment={experiment} />
        ))}
      </CardsWrapper>
    </div>
  );
}
