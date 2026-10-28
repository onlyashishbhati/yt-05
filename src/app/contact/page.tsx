"use client";

import { useState, useEffect } from "react";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

/**
 * Starting point for the contact page.
 *
 * The finished project wraps this page in Lenis for smooth scroll, which
 * ParallaxImage uses to drive the closing banner image. That wrapper is
 * left out here. The live Portland/Lisbon clocks are plain React state and
 * already work as-is — they're not part of the GSAP/scroll work this
 * tutorial covers.
 */
const Page = () => {
  const [portlandTime, setPortlandTime] = useState("--:-- AM PST");
  const [lisbonTime, setLisbonTime] = useState("--:-- AM WET");

  useEffect(() => {
    const updateTimes = () => {
      const portlandOptions: Intl.DateTimeFormatOptions = {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const portlandFormatter = new Intl.DateTimeFormat("en-US", portlandOptions);
      setPortlandTime(portlandFormatter.format(new Date()) + " PST");

      const lisbonOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Lisbon",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const lisbonFormatter = new Intl.DateTimeFormat("en-US", lisbonOptions);
      setLisbonTime(lisbonFormatter.format(new Date()) + " WET");
    };

    updateTimes();

    const intervalId = setInterval(updateTimes, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="page min-h-[100svh] w-full bg-bg">
      <section className="contact-hero relative flex min-h-[90svh] w-screen items-end bg-bg">
        <div className="container px-5 pt-32 pb-16">
          <AnimatedH1 className="text-[5vw] max-[900px]:text-[9vw]">
            Working with homeowners, developers, and long-term clients to
            build spaces that hold up over decades, not seasons.
          </AnimatedH1>
        </div>
      </section>

      <section className="contact-details py-32">
        <div className="container mx-auto flex flex-col gap-16 px-5">
          <div className="row flex gap-8 border-b border-copy/[.125] pb-16 max-[900px]:flex-col">
            <div className="col flex flex-1 gap-8 max-[900px]:flex-col max-[900px]:gap-4">
              <AnimatedCopy>Let&apos;s Build</AnimatedCopy>
            </div>
            <div className="col flex flex-1 gap-8 max-[900px]:flex-col max-[900px]:gap-4">
              <div className="sub-col flex-1">
                <AnimatedCopy>New Commissions</AnimatedCopy>
                <AnimatedCopy>hello@studiokestrel.com</AnimatedCopy>
              </div>
              <div className="sub-col flex-1">
                <AnimatedCopy>Join Studio Kestrel</AnimatedCopy>
                <AnimatedCopy>careers@studiokestrel.com</AnimatedCopy>
              </div>
            </div>
          </div>
          <div className="row flex gap-8 border-b border-copy/[.125] pb-16 max-[900px]:flex-col">
            <div className="col flex flex-1 gap-8 max-[900px]:flex-col max-[900px]:gap-4">
              <AnimatedCopy>Portland</AnimatedCopy>
            </div>
            <div className="col flex flex-1 gap-8 max-[900px]:flex-col max-[900px]:gap-4">
              <div className="sub-col flex-1">
                <AnimatedCopy>118 NW Couch Street</AnimatedCopy>
                <AnimatedCopy>Portland, OR 97209</AnimatedCopy>
                <AnimatedCopy>USA</AnimatedCopy>
              </div>
              <div className="sub-col flex-1">
                <AnimatedCopy>{portlandTime}</AnimatedCopy>
              </div>
            </div>
          </div>
          <div className="row flex gap-8 pb-8 max-[900px]:flex-col">
            <div className="col flex flex-1 gap-8 max-[900px]:flex-col max-[900px]:gap-4">
              <AnimatedCopy>Lisbon</AnimatedCopy>
            </div>
            <div className="col flex flex-1 gap-8 max-[900px]:flex-col max-[900px]:gap-4">
              <div className="sub-col flex-1">
                <AnimatedCopy>Rua do Alecrim 24</AnimatedCopy>
                <AnimatedCopy>1200-014 Lisboa</AnimatedCopy>
                <AnimatedCopy>Portugal</AnimatedCopy>
              </div>
              <div className="sub-col flex-1">
                <AnimatedCopy>{lisbonTime}</AnimatedCopy>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-banner relative flex h-[100svh] w-screen items-center justify-center overflow-hidden text-center">
        <div className="contact-banner-bg absolute top-0 left-0 h-full w-full">
          <ParallaxImage
            src="/contact/banner.jpg"
            alt="Studio Kestrel project at dusk"
          />
        </div>

        <div className="contact-banner-cta relative z-[1]">
          <AnimatedH1 className="text-[7.5vw] max-[900px]:text-[12vw]">
            Let&apos;s build together
          </AnimatedH1>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
