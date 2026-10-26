import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CodeBlock from "@/components/CodeBlock";
import PromptUsage from "@/components/PromptUsage";
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

  const { name, description, coverImage, content, hasVariable, kind, usage, sourceNote, relatedArticles } = prompt;

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-xl text-base-content/80">{description}</p>
        {kind && (
          <p className="text-sm text-base-content/60">{kind === "skill" ? "Agent skill" : "Standing instructions"}</p>
        )}
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image src={coverImage} alt={name} fill objectFit="cover" priority />
      </div>

      <PromptUsage prompt={prompt} />

      <section className="space-y-4" aria-labelledby="prompt-source">
        <h2 id="prompt-source" className="text-2xl font-bold">
          {kind ? "Full instructions" : "Prompt"}
        </h2>
        {sourceNote && <p className="text-base-content/70">{sourceNote}</p>}
        <div className="prose max-w-none [&_button]:opacity-100">
          <CodeBlock className={kind ? "max-h-[36rem] whitespace-pre-wrap break-words pr-14" : "whitespace-pre-wrap"}>
            {content}
          </CodeBlock>
        </div>
      </section>

      {!usage && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Instructions</h2>
          <ol className="list-decimal px-5 text-lg text-base-content/80">
            <li>Copy the prompt above</li>
            {hasVariable && <li>Replace variables with your own values</li>}
            <li>Paste it into ChatGPT/Claude/Gemini/etc.</li>
            <li>Once the model understands the task, ask it to do what you want</li>
          </ol>
        </section>
      )}

      {relatedArticles && (
        <section className="space-y-4 border-t pt-6" aria-labelledby="prompt-articles">
          <h2 id="prompt-articles" className="text-2xl font-bold">
            The idea in practice
          </h2>
          <ul className="space-y-3">
            {relatedArticles.map((article) => (
              <li key={article.url}>
                <Link className="link-hover link text-lg underline" href={article.url}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
