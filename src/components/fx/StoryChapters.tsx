import { useState } from "react";
import Reveal from "../ui/Reveal";

export type Chapter = {
  id: string;
  label: string;
  title: string;
  body: string;
  image: string;
  imageAlt?: string;
};

type Props = {
  chapters: Chapter[];
};

/** Interactive chapter scrubber — pick a story beat, media crossfades. */
export default function StoryChapters({ chapters }: Props) {
  const [active, setActive] = useState(0);
  const current = chapters[active];

  return (
    <div className="story-chapters">
      <div className="story-chapters__rail" role="tablist" aria-label="Story chapters">
        {chapters.map((c, i) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`story-chapters__tab ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="story-chapters__index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="story-chapters__label">{c.label}</span>
          </button>
        ))}
      </div>

      <div className="story-chapters__stage">
        <Reveal key={current.id + "-media"} variant="fade" className="story-chapters__media">
          <div className="img-frame relative aspect-[5/4] overflow-hidden lg:aspect-[4/3]">
            <img
              src={current.image}
              alt={current.imageAlt ?? ""}
              className="h-full w-full object-cover story-chapters__img"
            />
          </div>
        </Reveal>
        <Reveal key={current.id + "-copy"} variant="slide-right" className="story-chapters__copy">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            {current.label}
          </p>
          <h3 className="font-serif text-2xl font-semibold text-charcoal md:text-3xl">
            {current.title}
          </h3>
          <p className="mt-4 leading-relaxed text-muted">{current.body}</p>
        </Reveal>
      </div>
    </div>
  );
}
