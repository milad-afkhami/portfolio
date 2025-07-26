import type { Metadata } from "next";
import { getAllPrompts } from "@/services/prompt";
import CardsWrapper from "@/components/cards/Wrapper";
import PromptCard from "@/components/cards/PromptCard";

export const metadata: Metadata = {
  title: "Prompt Library - Milad Afkhami",
  description: "Explore awesome things you can do with my open-source prompt library.",
  alternates: { canonical: "/prompts" },
};

export default async function PromptsPage(): Promise<JSX.Element> {
  const prompts = await getAllPrompts();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Prompt Library</h1>
        <p className="text-xl text-base-content/80">
          A collection of open-source prompts and tools I&apos;ve developed to help the web development community.
        </p>
      </div>

      <CardsWrapper>
        {prompts.map((prompt) => (
          <PromptCard key={prompt.slug} prompt={prompt} />
        ))}
      </CardsWrapper>
    </div>
  );
}
