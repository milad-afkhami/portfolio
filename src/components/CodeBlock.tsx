"use client";

import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import { useEffect, useRef, useState, type PropsWithChildren } from "react";

type Props = PropsWithChildren<{ className?: string }>;

export default function CodeBlock({ children, className }: Props): JSX.Element {
  const [status, setStatus] = useState("");
  const codeRef = useRef<HTMLPreElement>(null);
  const generation = useRef(0);
  useEffect(() => {
    setStatus("");
    return () => {
      generation.current += 1;
    };
  }, [children]);
  const copy = async () => {
    const current = ++generation.current;
    try {
      await navigator.clipboard.writeText(codeRef.current?.innerText ?? "");
      if (current === generation.current) setStatus("Copied to clipboard");
    } catch {
      if (current === generation.current) setStatus("Copy failed. Select and copy the text below.");
    }
  };
  return (
    <div className="code-panel">
      <div className="code-toolbar">
        <output className="code-feedback">{status}</output>
        <button type="button" onClick={copy} aria-label="Copy code block">
          {status === "Copied to clipboard" ? (
            <FaClipboardCheck aria-hidden="true" />
          ) : (
            <FaClipboard aria-hidden="true" />
          )}
          Copy
        </button>
      </div>
      <pre ref={codeRef} className={className}>
        {children}
      </pre>
    </div>
  );
}
