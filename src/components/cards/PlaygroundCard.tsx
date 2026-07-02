import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { IPlaygroundExperiment } from "@/configs/playground";

type PlaygroundCardProps = {
  experiment: IPlaygroundExperiment;
};

export default function PlaygroundCard({ experiment }: PlaygroundCardProps): JSX.Element {
  const { slug, title, description, tags, badge } = experiment;

  return (
    <Link
      href={`/playground/${slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border bg-base-100 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 text-5xl transition-transform duration-300 group-hover:scale-105">
        <span aria-hidden>{badge}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-xl font-bold text-base-content">{title}</h2>
        <p className="mb-4 mt-2 flex-1 text-base-content/70">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              {tag}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
          Open experiment
          <FaArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
