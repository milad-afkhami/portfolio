import Link from "next/link";
import type { IService } from "@/types/general";
import { FaCheck, FaCode, FaGraduationCap, FaLightbulb, FaRobot, FaSitemap } from "react-icons/fa";

type ServiceCardProps = {
  service: IService;
};

export default function ServiceCard({ service }: ServiceCardProps): JSX.Element {
  const { slug, title, description, icon, features, technologies, actions } = service;

  return (
    <article className="group overflow-hidden rounded-lg border bg-base-100 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-full flex-col justify-between gap-6 p-6">
        <Link href={`/services/${slug}`} className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex size-12 min-w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
              {(() => {
                const iconMap = {
                  FaCode,
                  FaRobot,
                  FaSitemap,
                  FaLightbulb,
                  FaGraduationCap,
                } as const;
                const IconComponent = iconMap[icon as keyof typeof iconMap];
                return <IconComponent className="size-6" />;
              })()}
            </div>
            <h2 className="text-xl font-bold text-base-content">{title}</h2>
          </div>

          <p className="text-base-content/70">{description}</p>

          <div className="space-y-4">
            <h3 className="font-semibold text-base-content">Features</h3>
            <ul className="space-y-2">
              {features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-base-content/80">
                  <FaCheck className="size-4 text-primary" />
                  {feature}
                </li>
              ))}
              {features.length > 3 && (
                <li key={features[3]} className="flex items-center gap-2 text-sm text-base-content/80">
                  <FaCheck className="size-4 text-primary" />
                  <p className="text-primary underline">View {features.length - 3} more</p>
                </li>
              )}
            </ul>
          </div>

          {technologies?.length ? (
            <div className="space-y-4">
              <h3 className="font-semibold text-base-content">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : undefined}
        </Link>
        <div className="flex justify-start gap-4">
          <Link href="/contact" className="btn btn-primary max-w-[50%] flex-1">
            Contact Me
          </Link>
          {actions?.map((action) => (
            <Link key={action.label} href={action.url} className="btn btn-outline flex-1">
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
