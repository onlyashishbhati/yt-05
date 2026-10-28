"use client";

import { useState } from "react";

/**
 * Starting point for the site nav.
 *
 * In the finished project opening/closing the menu is driven by a GSAP
 * timeline (staggered label animations, a clip-path wipe for the overlay,
 * CustomEase curves) and navigating between pages plays a view-transition
 * wipe via next-view-transitions' useTransitionRouter. For now the menu
 * open/close is a plain bit of React state with a CSS transition, and links
 * are plain anchors, so the structure, classes and refs you'll need are
 * already in place to wire the real animation onto in the tutorial.
 */
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 z-[1] flex w-screen items-center justify-between p-5">
        <div className="logo relative h-4 w-max cursor-pointer [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
          <a
            href="/"
            className="relative block translate-y-0 select-none font-mono text-[14px] uppercase text-copy will-change-transform"
          >
            Studio Kestrel
          </a>
        </div>
        <div
          className="menu-toggle-open relative h-4 w-max cursor-pointer [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"
          onClick={() => setIsOpen(true)}
        >
          <p className="relative block translate-y-0 select-none font-mono text-[14px] uppercase text-copy will-change-transform">
            Menu
          </p>
        </div>
      </nav>

      <div
        className={`menu-overlay fixed top-0 left-0 z-[2] flex h-[100svh] w-screen items-center justify-center bg-bg-deep transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="menu-overlay-bar fixed top-0 left-0 flex w-screen items-center justify-between p-5">
          <div className="logo relative h-4 w-max cursor-pointer [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
            <a
              href="/"
              className="relative block select-none font-mono text-[14px] uppercase text-copy will-change-transform"
            >
              Studio Kestrel
            </a>
          </div>
          <div
            className="menu-toggle-close relative h-4 w-max cursor-pointer [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"
            onClick={() => setIsOpen(false)}
          >
            <p className="relative block select-none font-mono text-[14px] uppercase text-copy will-change-transform">
              Close
            </p>
          </div>
        </div>

        <div className="menu-footer fixed bottom-0 left-0 flex w-screen items-center justify-between p-5">
          <div className="showreel relative h-4 w-max cursor-pointer [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
            <a
              href="https://vimeo.com"
              className="relative block select-none font-mono text-[14px] uppercase text-copy will-change-transform"
            >
              Showreel
            </a>
          </div>
          <div className="socials flex gap-4">
            <div className="media-link relative h-4 w-max cursor-pointer [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
              <a
                href="/"
                className="relative block select-none font-mono text-[14px] uppercase text-copy will-change-transform"
              >
                Instagram
              </a>
            </div>
            <div className="media-link relative h-4 w-max cursor-pointer [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
              <a
                href="/"
                className="relative block select-none font-mono text-[14px] uppercase text-copy will-change-transform"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="menu-links flex flex-col items-center justify-center">
          <div className="menu-link relative [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
            <a href="/" className="relative inline-block will-change-transform">
              <h1 className="font-display [font-weight:800] uppercase leading-[0.85] text-copy text-[8vw] max-[900px]:text-[20vw]">
                Index
              </h1>
            </a>
          </div>
          <div className="menu-link relative [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
            <a href="/about" className="relative inline-block will-change-transform">
              <h1 className="font-display [font-weight:800] uppercase leading-[0.85] text-copy text-[8vw] max-[900px]:text-[20vw]">
                Practice
              </h1>
            </a>
          </div>
          <div className="menu-link relative [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
            <a href="/work" className="relative inline-block will-change-transform">
              <h1 className="font-display [font-weight:800] uppercase leading-[0.85] text-copy text-[8vw] max-[900px]:text-[20vw]">
                Projects
              </h1>
            </a>
          </div>
          <div className="menu-link relative [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
            <a href="/contact" className="relative inline-block will-change-transform">
              <h1 className="font-display [font-weight:800] uppercase leading-[0.85] text-copy text-[8vw] max-[900px]:text-[20vw]">
                Contact
              </h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
