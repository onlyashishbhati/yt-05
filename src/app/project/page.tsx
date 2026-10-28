import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

/**
 * Starting point for the project detail page.
 *
 * The finished project wraps this page in Lenis for smooth scroll (which
 * ParallaxImage reads from) and staggers each stat in with GSAP as it
 * scrolls into view. Both are left out here — the Lenis wrapper is removed
 * and AnimatedH1/ParallaxImage render statically, so the full case-study
 * layout and copy are ready for you to animate in the tutorial.
 */
const ProjectPage = () => {
  return (
    <div className="page min-h-[100svh] w-full bg-bg">
      <section className="project-hero relative mb-32 flex h-[100svh] max-[900px]:h-[200svh] w-screen overflow-hidden max-[900px]:flex-col-reverse">
        <div className="col flex-1">
          <div className="project-hero-img relative h-full w-full overflow-hidden">
            <div className="project-hero-img-wrapper relative h-full w-full overflow-hidden">
              <ParallaxImage
                src="/project/project-img-1.jpg"
                alt="Riverhouse exterior at dusk"
              />
            </div>
          </div>
        </div>
        <div className="col flex-1">
          <div className="container flex h-full flex-col justify-center p-16 max-[900px]:p-5">
            <div className="project-page-title mb-16 max-[900px]:mb-32">
              <AnimatedH1 className="w-3/4 text-[7.5vw] max-[900px]:text-[12vw]">
                Riverhouse
              </AnimatedH1>
            </div>
            <div className="row mb-8 flex gap-8 max-[900px]:flex-col">
              <div className="sub-col flex-1">
                <AnimatedCopy animateOnScroll={false}>Client</AnimatedCopy>
                <AnimatedCopy tag="h3" animateOnScroll={false} className="my-1 block">
                  The Alden Family
                </AnimatedCopy>
              </div>
              <div className="sub-col flex-1">
                <AnimatedCopy animateOnScroll={false}>Services</AnimatedCopy>
                <AnimatedCopy tag="h3" animateOnScroll={false} className="my-1 block">
                  Architecture + Interiors
                </AnimatedCopy>
              </div>
            </div>
            <div className="row mb-8 flex gap-8 max-[900px]:flex-col">
              <div className="sub-col flex-1"></div>
              <div className="sub-col flex-1">
                <AnimatedCopy>
                  A single-family home set into a sloped riverside site,
                  designed to frame water views without turning its back
                  on the street.
                </AnimatedCopy>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="project-info relative w-full py-16">
          <div className="container mx-auto flex w-4/5 max-[900px]:w-full flex-col gap-8 max-[900px]:flex-col min-[901px]:flex-row px-5">
            <div className="col flex-1">
              <AnimatedCopy tag="h3">Summary</AnimatedCopy>
            </div>
            <div className="col flex-1">
              <AnimatedCopy className="mb-12 block">
                Studio Kestrel partnered with the Alden family to replace an
                aging riverside cabin with a year-round home that could
                weather seasonal flooding while making the most of a
                narrow, sloped lot. The brief called for three bedrooms, a
                studio for remote work, and living spaces that stayed
                connected to the water on every level.
              </AnimatedCopy>

              <AnimatedCopy delay={0.15} className="mb-12 block">
                We raised the primary living floor above the historic flood
                line and used a board-formed concrete base to anchor the
                timber structure above it. A butterfly roof draws light deep
                into the plan, and a continuous cedar screen wraps the
                street-facing elevation for privacy without closing the
                house off entirely.
              </AnimatedCopy>

              <AnimatedCopy delay={0.3} className="mb-12 block">
                The finished home reduced heating and cooling loads well
                below the regional average, thanks to passive orientation
                and a tightened building envelope. The Aldens moved in
                during their second winter on site and have since expanded
                the garden terraces we roughed in during construction.
              </AnimatedCopy>
            </div>
          </div>
        </section>

        <section className="project-info relative w-full py-16">
          <div className="container mx-auto flex w-4/5 max-[900px]:w-full flex-col gap-8 min-[901px]:flex-row px-5">
            <div className="col flex-1"></div>
            <div className="col flex-1">
              <div className="project-info-img-1 relative h-[700px] w-full overflow-hidden">
                <div className="project-info-img-1-wrapper relative h-full w-full overflow-hidden">
                  <ParallaxImage
                    src="/project/project-img-2.jpg"
                    alt="Riverhouse living space interior"
                    speed={0.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-info relative w-full py-16">
          <div className="container mx-auto flex w-4/5 max-[900px]:w-full flex-col gap-8 min-[901px]:flex-row px-5">
            <div className="col flex-1">
              <AnimatedCopy tag="h3">Approach</AnimatedCopy>
            </div>
            <div className="col flex-1">
              <AnimatedCopy>
                We began with a full site and flood survey to establish a
                buildable envelope, then tested massing options against
                sun path and prevailing views before settling on a split-level
                plan. Structural steel was kept to two transfer beams,
                letting the rest of the house read as timber and concrete.
                We worked directly with a local millwork shop on the cedar
                screen system and the kitchen joinery, refining both through
                on-site mockups before fabrication.
              </AnimatedCopy>
            </div>
          </div>
        </section>

        <section className="project-info relative w-full py-16">
          <div className="container mx-auto flex w-4/5 max-[900px]:w-full flex-col gap-8 min-[901px]:flex-row px-5">
            <div className="col flex-1">
              <AnimatedCopy tag="h3">By the Numbers</AnimatedCopy>
            </div>
            <div className="col flex-1">
              <div className="stat mb-32 flex justify-between border-t border-copy/[.125] pt-5">
                <AnimatedH1
                  animateOnScroll={true}
                  direction="top"
                  className="text-[15vw] max-[900px]:text-[20vw]"
                >
                  2,400
                </AnimatedH1>
                <p className="font-mono text-[14px] uppercase text-copy">
                  Square Feet
                </p>
              </div>

              <div className="stat mb-32 flex justify-between border-t border-copy/[.125] pt-5">
                <AnimatedH1
                  animateOnScroll={true}
                  direction="top"
                  className="text-[15vw] max-[900px]:text-[20vw]"
                >
                  14
                </AnimatedH1>
                <p className="font-mono text-[14px] uppercase text-copy">
                  Months to Complete
                </p>
              </div>

              <div className="stat mb-32 flex justify-between border-t border-copy/[.125] pt-5">
                <AnimatedH1
                  animateOnScroll={true}
                  direction="top"
                  className="text-[15vw] max-[900px]:text-[20vw]"
                >
                  6
                </AnimatedH1>
                <p className="font-mono text-[14px] uppercase text-copy">
                  Material Palette
                </p>
              </div>

              <div className="stat mb-32 flex justify-between border-t border-copy/[.125] pt-5">
                <AnimatedH1
                  animateOnScroll={true}
                  direction="top"
                  className="text-[15vw] max-[900px]:text-[20vw]"
                >
                  62%
                </AnimatedH1>
                <p className="font-mono text-[14px] uppercase text-copy">
                  Daylight Increase
                </p>
              </div>

              <div className="stat mb-32 flex justify-between border-t border-copy/[.125] pt-5">
                <AnimatedH1
                  animateOnScroll={true}
                  direction="top"
                  className="text-[15vw] max-[900px]:text-[20vw]"
                >
                  38%
                </AnimatedH1>
                <p className="font-mono text-[14px] uppercase text-copy">
                  Lower Heating Load
                </p>
              </div>

              <div className="stat mb-32 flex justify-between border-t border-copy/[.125] pt-5">
                <AnimatedH1
                  animateOnScroll={true}
                  direction="top"
                  className="text-[15vw] max-[900px]:text-[20vw]"
                >
                  1
                </AnimatedH1>
                <p className="font-mono text-[14px] uppercase text-copy">
                  Flood-Line Foundation
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="project-preview-img relative h-[100svh] w-screen overflow-hidden">
          <div className="project-preview-img-wrapper relative h-full w-full overflow-hidden">
            <ParallaxImage
              src="/project/project-img-3.jpg"
              alt="Riverhouse cedar screen detail"
              speed={0.2}
            />
          </div>
        </section>

        <section className="project-info project-info-outro relative w-full py-40">
          <div className="container mx-auto flex w-4/5 max-[900px]:w-full flex-col gap-8 min-[901px]:flex-row px-5">
            <div className="col flex-1">
              <AnimatedCopy tag="h3">Delivery</AnimatedCopy>
            </div>
            <div className="col flex-1">
              <AnimatedCopy className="mb-12 block">
                Our team stayed on site through construction administration,
                running weekly walkthroughs with the general contractor and
                adjusting details in real time as the concrete base and
                timber frame came together. We coordinated closely with the
                structural engineer to keep the transfer beams as slim as
                possible, preserving the open sightlines the Aldens asked
                for at the first meeting.
              </AnimatedCopy>

              <AnimatedCopy delay={0.15}>
                Interior work followed the same logic as the shell: a
                restrained material list, used consistently, so the house
                reads as one idea rather than a collection of finishes. The
                cedar screen, poured concrete floors, and white oak joinery
                carry through from the entry to the primary bedroom,
                giving the whole plan a quiet, unforced consistency.
              </AnimatedCopy>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
};

export default ProjectPage;
