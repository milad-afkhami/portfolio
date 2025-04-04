"use client";

import type { Nullable } from "ts-wiz";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import { useEffect, useRef, useState, type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function CodeBlock({ children, className }: Props) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);
  const toRef = useRef<Nullable<NodeJS.Timeout>>(null);

  const copyToClipboard = async () => {
    if (codeRef.current) {
      try {
        await navigator.clipboard.writeText(codeRef.current.innerText);
        setCopied(true);
        toRef.current = setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (toRef.current) clearTimeout(toRef.current);
    };
  }, []);

  return (
    <div className="group relative">
      <pre ref={codeRef} className={className}>
        {children}
      </pre>
      <button
        onClick={copyToClipboard}
        className="btn btn-neutral btn-sm absolute right-2 top-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-label="Copy code block"
      >
        {copied ? <FaClipboardCheck className="size-4" /> : <FaClipboard className="size-4" />}
      </button>
    </div>
  );
}
