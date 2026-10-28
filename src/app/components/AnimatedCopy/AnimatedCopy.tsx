"use client";

import type { ElementType, ReactNode } from "react";

/**
 * Starting point for the body-copy line-reveal used across the site.
 *
 * In the finished project this component splits its text into lines with
 * SplitType and reveals them with a GSAP timeline, the same way AnimatedH1
 * does. For now it just renders the right tag with the right typography so
 * every page already using <AnimatedCopy> keeps working while you build the
 * animation in the tutorial.
 */
interface AnimatedCopyProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
  lineSelector?: string;
  animateOnScroll?: boolean;
  direction?: "top" | "bottom";
  tag?: "p" | "h2" | "h3";
}

const TAG_STYLES: Record<NonNullable<AnimatedCopyProps["tag"]>, string> = {
  p: "font-mono uppercase text-[14px] text-copy",
  h2: "font-display [font-weight:800] uppercase leading-[0.85] text-copy text-[4vw] max-[900px]:text-[10vw]",
  h3: "font-display [font-weight:500] uppercase leading-[0.85] text-copy text-[2.25vw] max-[900px]:text-[8vw]",
};

const AnimatedCopy = ({
  children,
  className = "",
  tag = "p",
}: AnimatedCopyProps) => {
  const Tag = tag as ElementType;

  return (
    <Tag className={`relative ${TAG_STYLES[tag]} ${className}`}>
      {children}
    </Tag>
  );
};

export default AnimatedCopy;
