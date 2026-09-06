import { FaRegCalendarCheck, FaVideo, FaArrowRight } from "react-icons/fa";
import { scheduleCallLink } from "@/configs/contact";

export default function ScheduleCall(): JSX.Element | null {
  if (!scheduleCallLink) return null;

  return (
    <section aria-labelledby="schedule-call-heading" className="overflow-hidden rounded-2xl bg-primary/10">
      <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-5">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/20">
            <FaRegCalendarCheck className="size-7 text-primary-hover" />
          </div>
          <div className="space-y-2">
            <h2 id="schedule-call-heading" className="text-2xl font-bold">
              Schedule a call with me
            </h2>
            <p className="max-w-md text-base-content/70">
              Pick a time that works for you. You&apos;ll get a calendar invite with a{" "}
              <span className="inline-flex items-center gap-1 font-medium text-base-content/80">
                <FaVideo className="size-4" /> Google Meet
              </span>{" "}
              link, and I&apos;ll see it on my end too.
            </p>
          </div>
        </div>

        <a
          href={scheduleCallLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg shrink-0 self-start md:self-auto"
        >
          Find a time
          <FaArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
