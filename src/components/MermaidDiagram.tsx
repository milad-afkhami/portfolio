"use client";

import CodeBlock from "@/components/CodeBlock";
import { useEffect, useId, useState } from "react";
import { getMermaidConfig, mermaidPalette } from "@/configs/mermaid";

type Props = {
  chart: string;
};

export default function MermaidDiagram({ chart }: Props): JSX.Element {
  const id = `mermaid-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const [svg, setSvg] = useState("");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    setSvg("");
    setFailed(false);

    async function renderDiagram() {
      try {
        const { default: mermaid } = await import("mermaid");
        if (!active) return;

        mermaid.initialize(getMermaidConfig());

        const result = await mermaid.render(id, chart);
        // Cleanup can change this flag while the render promise is pending.
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (active) setSvg(result.svg);
      } catch {
        if (active) setFailed(true);
      }
    }

    void renderDiagram();
    return () => {
      active = false;
    };
  }, [chart, id]);

  if (!svg) {
    return (
      <div className="my-8">
        <output className="mb-3 block text-sm text-base-content/70">
          {failed ? "This diagram could not be rendered. Its source is shown below." : "Rendering diagram…"}
        </output>
        <CodeBlock>
          <code>{chart}</code>
        </CodeBlock>
      </div>
    );
  }

  return (
    <div
      className="not-prose my-8 overflow-x-auto rounded-lg border p-4 [&_svg]:mx-auto [&_svg]:h-auto"
      data-mermaid-theme="warm-paper"
      style={{ backgroundColor: mermaidPalette.background, borderColor: mermaidPalette.border }}
      // Mermaid's strict mode sanitizes labels and disables diagram click actions.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
