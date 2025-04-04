import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { resumeLink } from "@/configs/general";

export const metadata: Metadata = {
  title: "Resume - Milad Afkhami",
  description: "Download my resume",
  robots: { index: false, follow: false },
  alternates: { canonical: "/resume" },
};

export default function ResumePage(): JSX.Element {
  redirect(resumeLink);

  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-2xl font-semibold">You are being redirected to my resume page...</h1>
        <div className="flex items-center justify-center">
          <p className="text-base-content/80">Nothing happened?</p>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="block">
            <button className="btn btn-link btn-sm">Download Resume Manually</button>
          </a>
        </div>
      </div>
    </div>
  );
}
