import type { ReactNode } from "react";
import { Link } from "react-router";
import CardFx from "./CardFx";

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  padded?: boolean;
  variant?: "default" | "stat" | "media" | "dark";
  effect?: "glow" | "tilt" | "frame" | "rise" | "none";
};

export default function SurfaceCard({
  children,
  className = "",
  href,
  padded = true,
  variant = "default",
  effect = "none",
}: SurfaceCardProps) {
  const variantClass =
    variant === "stat"
      ? "surface-card--stat"
      : variant === "media"
        ? "surface-card--media"
        : variant === "dark"
          ? "surface-card--dark"
          : "";

  const effectClass =
    effect === "none" ? "" : `surface-card--fx-${effect}`;

  const classes = [
    "surface-card",
    padded && variant !== "media" ? "surface-card--padded" : "",
    variantClass,
    effectClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <CardFx aura={variant === "stat"} />
      {children}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={`${classes} block`}>
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
