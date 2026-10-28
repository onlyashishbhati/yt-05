"use client";

import type { ReactNode } from "react";

/**
 * Starting point for the big line-reveal headline used across the site.
 *
 * In the finished project this component splits its text into lines with
 * SplitType and reveals them with a GSAP timeline (optionally triggered by
 * ScrollTrigger when the heading scrolls into view). For now it just renders
 * a plain heading with the same props so every page already using
 * <AnimatedH1> keeps working while you build the animation in the tutorial.
 *
 * Props you'll wire up to the animation later:
 * - delay / duration / ease / stagger: timeline tuning
 * - animateOnScroll: whether to gate the timeline behind a ScrollTrigger
 * - direction: whether lines enter from "top" or "bottom"
 */
interface AnimatedH1Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
  lineSelector?: string;
  animateOnScroll?: boolean;
  direction?: "top" | "bottom";
}

const AnimatedH1 = ({ children, className = "" }: AnimatedH1Props) => {
  return (
    <h1
      className={`relative uppercase font-display leading-[0.85] text-copy [font-weight:800] ${className}`}
    >
      {children}
    </h1>
  );
};

export default AnimatedH1;
