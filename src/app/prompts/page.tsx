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
          Prompts, agent skills and standing instructions from my work. Read the complete instructions, try a short
          example, or download a skill with the files it needs. The linked articles explain the ideas in practice.
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
