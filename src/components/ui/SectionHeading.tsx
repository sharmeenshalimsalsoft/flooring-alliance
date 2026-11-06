import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left mr-auto";
  const titleColor = light ? "text-ivory" : "text-charcoal";
  const descColor = light ? "text-stone/90" : "text-muted";

  return (
    <Reveal
      className={`section-heading max-w-[42rem] ${alignClass} ${className}`}
    >
      {eyebrow && (
        <p className="mb-3 bg-[linear-gradient(90deg,#d4b08c,#b89578)] bg-clip-text font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-transparent">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-[1.9rem] font-semibold leading-[1.12] sm:text-3xl md:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-[36rem] font-sans text-[1rem] font-normal leading-relaxed md:mt-5 md:text-[1.08rem] ${
            align === "left" ? "mx-0" : ""
          } ${descColor}`}
        >
          {description}
        </p>
      )}
      {align === "center" && (
        <div
          className="soft-divider mx-auto mt-7 max-w-[5.5rem] md:mt-8"
          aria-hidden
        />
      )}
    </Reveal>
  );
}
