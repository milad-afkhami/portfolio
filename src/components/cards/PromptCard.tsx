import Link from "next/link";
import Image from "next/image";
import type { IPrompt } from "@/types/general";

type PromptCardProps = {
  prompt: IPrompt;
};

export default function PromptCard({ prompt }: PromptCardProps): JSX.Element {
  const { slug, name, description, coverImage } = prompt;

  return (
    <Link
      href={`/prompts/${slug}`}
      className="group flex flex-col justify-between overflow-hidden rounded-lg border bg-base-100 shadow-sm transition-shadow hover:shadow-md"
    >
      <Image src={coverImage} alt={name} width={300} height={200} className="h-52 w-full object-cover" />
      <div className="space-y-4 p-6">
        <h2 className="text-xl font-bold text-base-content">{name}</h2>
        <p className="text-base-content/70">{description}</p>
      </div>
      <div className="flex items-center justify-end border-t bg-base-200 p-3">
        <div className="btn btn-primary btn-sm">View</div>
      </div>
    </Link>
  );
}
