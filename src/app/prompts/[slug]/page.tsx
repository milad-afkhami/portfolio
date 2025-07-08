import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CodeBlock from "@/components/CodeBlock";
import { getPromptBySlug } from "@/services/prompt";

type PromptPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PromptPageProps): Promise<Metadata> {
  const prompt = await getPromptBySlug(params.slug);

  if (!prompt) {
    return {
      title: "Prompt Not Found - Milad Afkhami",
      description: "The requested prompt could not be found.",
    };
  }

  return {
    title: `${prompt.name} - Milad Afkhami`,
    description: prompt.description,
    robots: { index: false, follow: false },
    alternates: { canonical: `/prompts/${params.slug}` },
  };
}

export default async function PromptPage({ params }: PromptPageProps): Promise<JSX.Element> {
  const prompt = await getPromptBySlug(params.slug);

  if (!prompt) {
    notFound();
  }

  const { name, description, coverImage, content, hasVariable } = prompt;

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-xl text-base-content/80">{description}</p>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image src={coverImage} alt={name} fill objectFit="cover" priority />
      </div>

      <h2 className="text-2xl font-bold">Prompt:</h2>
      <div className="prose min-w-full">
        <CodeBlock className="whitespace-pre-wrap">{content}</CodeBlock>
      </div>

      <h2 className="text-2xl font-bold">Instructions:</h2>
      <ol className="list-decimal px-5 text-lg text-base-content/80">
        <li>Copy the prompt above</li>
        {hasVariable && <li>Replace variables with your own values</li>}
        <li>Paste it into ChatGPT/Claude/Gemini/etc.</li>
        <li>Once the model understands the task, ask it to do what you want</li>
      </ol>
    </article>
  );
}
