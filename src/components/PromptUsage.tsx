import type { IPrompt } from "@/types/general";
import CodeBlock from "@/components/CodeBlock";

export default function PromptUsage({ prompt }: { prompt: IPrompt }): JSX.Element | null {
  const { usage, downloads, example } = prompt;
  if (!usage) return null;
  return (
    <section className="space-y-4" aria-labelledby="prompt-use">
      <h2 id="prompt-use" className="text-2xl font-bold">
        How to use it
      </h2>
      <ol className="list-decimal space-y-3 pl-5 text-lg text-base-content/80">
        {usage.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      {downloads && (
        <div className="flex flex-wrap gap-3">
          {downloads.map((download, index) => (
            <a
              key={download.url}
              href={download.url}
              download
              className={`btn h-auto min-h-12 py-3 ${index === 0 ? "btn-primary" : "btn-outline"}`}
            >
              {download.label}
            </a>
          ))}
        </div>
      )}
      {example && (
        <div className="prose max-w-none [&_button]:opacity-100">
          <h3>Example request</h3>
          <CodeBlock className="whitespace-pre-wrap break-words pr-14">{example}</CodeBlock>
        </div>
      )}
    </section>
  );
}
