import type { Metadata } from "next";
import { getAllPrompts } from "@/services/prompt";
import PromptCard from "@/components/cards/PromptCard";
import styles from "@/components/cards/collections.module.css";
import CollectionEmpty from "@/components/cards/CollectionEmpty";
import CollectionIntro from "@/components/cards/CollectionIntro";

export const metadata: Metadata = {
  title: "Prompt Library - Milad Afkhami",
  description: "Explore awesome things you can do with my open-source prompt library.",
  alternates: { canonical: "/prompts" },
};

export default async function PromptsPage(): Promise<JSX.Element> {
  const prompts = await getAllPrompts();

  return (
    <div>
      <CollectionIntro title="Prompt Library">
        Prompts, agent skills and standing instructions from my work. Read the complete instructions, try a short
        example, or download a skill with the files it needs. The linked articles explain the ideas in practice.
      </CollectionIntro>
      {prompts.length === 0 && <CollectionEmpty />}

      <div className={styles.stack}>
        {prompts.map((prompt) => (
          <PromptCard key={prompt.slug} prompt={prompt} />
        ))}
      </div>
    </div>
  );
}
