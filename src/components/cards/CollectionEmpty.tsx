import Link from "next/link";

export default function CollectionEmpty(): JSX.Element {
  return (
    <div className="rounded-xl bg-[#eaf1f6] p-6">
      <h2>This collection is currently unavailable.</h2>
      <p className="mt-3">
        Please reload the page, or{" "}
        <Link href="/contact" className="underline underline-offset-4">
          get in touch
        </Link>{" "}
        to ask about my work.
      </p>
    </div>
  );
}
