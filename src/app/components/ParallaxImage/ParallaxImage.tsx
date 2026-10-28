"use client";

/**
 * Starting point for the parallax image used in project banners, project
 * detail pages and full-bleed section backgrounds.
 *
 * In the finished project this reads the Lenis scroll position, lerps a
 * translateY toward a target derived from the element's position, and
 * applies it as a transform for a smooth parallax drift. For now it's a
 * plain, statically positioned image with the same props so every page
 * already using <ParallaxImage> keeps working while you build the scroll
 * effect in the tutorial.
 */
interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
}

const ParallaxImage = ({ src, alt }: ParallaxImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className="absolute top-0 left-0 h-full w-full object-cover"
    />
  );
};

export default ParallaxImage;
