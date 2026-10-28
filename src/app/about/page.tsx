import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

/**
 * Starting point for the about / practice page.
 *
 * The finished project wraps this page in Lenis for smooth scroll and pins
 * the "What we do best" header in place with a ScrollTrigger while the
 * practice-area list scrolls past it underneath. Both of those are left out
 * here: the header renders in normal document flow above the list, so you
 * can add the pin (and the Lenis wrapper it depends on) in the tutorial.
 */
const AboutPage = () => {
  return (
    <div className="page relative min-h-[100svh] w-full bg-bg">
      <section className="about-hero relative w-screen overflow-hidden bg-bg">
        <div className="about-hero-bg absolute inset-0 h-full w-full overflow-hidden">
          <img
            src="/about/hero.jpg"
            alt="Studio Kestrel — architectural massing study"
            className="relative h-full w-full object-cover"
          />
        </div>

        <div className="container relative z-[1] flex min-h-[125svh] max-[900px]:min-h-[100svh] flex-col justify-between gap-12 px-5 pt-16 pb-16">
          <AnimatedH1 className="w-[85%] max-[900px]:w-full text-[7.5vw] max-[900px]:text-[12vw]">
            Shaping Rooms Around How Light Moves
          </AnimatedH1>

          <div className="about-tagline flex w-3/4 max-[900px]:w-screen gap-8 max-[900px]:flex-col max-[900px]:gap-4">
            <div className="col flex-[6]">
              <AnimatedCopy animateOnScroll={false}>Who We Are</AnimatedCopy>
            </div>
            <div className="col flex-[2]">
              <AnimatedCopy animateOnScroll={false}>
                An architecture and interiors practice working in wood,
                stone, and steel — one project at a time.
              </AnimatedCopy>
            </div>
          </div>
          <AnimatedH1 className="w-[85%] max-[900px]:w-full text-[7.5vw] max-[900px]:text-[12vw]">
            with Restraint and Craft
          </AnimatedH1>
        </div>
      </section>

      <section className="about-copy relative w-screen py-32">
        <div className="container mx-auto w-1/2 max-[900px]:w-full px-5">
          <AnimatedCopy tag="h2">The Origin</AnimatedCopy>

          <div className="about-copy-wrapper mt-8">
            <AnimatedCopy className="mb-8 block">
              Studio Kestrel began with a simple frustration: too many
              buildings talk over their sites instead of listening to them.
              We founded the practice to do the opposite — to let
              topography, light, and material logic set the terms, and to
              build spaces that feel inevitable rather than imposed. Every
              commission starts with the land, the client&apos;s daily
              rhythms, and the constraints of the budget, in that order.
            </AnimatedCopy>

            <AnimatedCopy className="mb-8 block">
              Our approach is deliberately unhurried. Whether it&apos;s a
              ground-up house, a considered addition, or a full interior
              fit-out, we work in close collaboration with clients,
              engineers, and craftspeople to make sure every decision — down
              to a door pull — earns its place. We favour a small number of
              materials used well over a long list used thinly.
            </AnimatedCopy>

            <AnimatedCopy className="mb-8 block">
              At Studio Kestrel, we push back against trend cycles and
              aim instead for buildings that will still make sense in
              twenty years. Good architecture, to us, is measured in how
              quietly it ages — not how loudly it launches.
            </AnimatedCopy>

            <div className="about-copy-img relative h-[500px] w-full overflow-hidden">
              <div className="about-copy-img-wrapper relative h-full w-full overflow-hidden">
                <ParallaxImage
                  src="/about/about-copy.jpg"
                  alt="Studio Kestrel team reviewing site drawings"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise relative w-screen">
        <div className="expertise-header w-screen pt-16">
          <div className="container flex flex-col gap-8 px-5">
            <div className="row flex justify-between">
              <AnimatedH1 className="text-[7.5vw] max-[900px]:text-[12vw]">
                What we <br /> do best
              </AnimatedH1>

              <div className="expertise-img-1 relative w-[15%] overflow-hidden max-[900px]:hidden">
                <img
                  src="/about/expertise-img-1.jpg"
                  alt="Timber joinery detail"
                  className="relative h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="row flex justify-between">
              <div className="expertise-img-2 w-[30%] max-[900px]:w-full">
                <img
                  src="/about/expertise-img-2.jpg"
                  alt="Concrete and light study"
                  className="relative h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="services relative mx-auto flex w-1/2 max-[900px]:w-full pt-[5.5em] pb-[1em] max-[900px]:px-5 max-[900px]:pb-16">
          <div className="col flex-1 max-[900px]:hidden"></div>
          <div className="col flex-1">
            <div className="service mb-32 max-[900px]:mb-16">
              <AnimatedCopy tag="h3" className="mb-2 block">(01)</AnimatedCopy>
              <AnimatedCopy tag="h2" className="mb-2 block">Concept Design</AnimatedCopy>
              <AnimatedCopy>01 Site & Context Analysis</AnimatedCopy>
              <AnimatedCopy>02 Massing & Orientation Studies</AnimatedCopy>
              <AnimatedCopy>03 Feasibility & Budget Alignment</AnimatedCopy>
              <AnimatedCopy>04 Client Brief Development</AnimatedCopy>
              <AnimatedCopy>05 Planning Strategy</AnimatedCopy>
            </div>
            <div className="service mb-32 max-[900px]:mb-16">
              <AnimatedCopy tag="h3" className="mb-2 block">(02)</AnimatedCopy>
              <AnimatedCopy tag="h2" className="mb-2 block">Interior Architecture</AnimatedCopy>
              <AnimatedCopy>01 Spatial Planning</AnimatedCopy>
              <AnimatedCopy>02 Material & Finish Selection</AnimatedCopy>
              <AnimatedCopy>03 Custom Joinery & Cabinetry</AnimatedCopy>
              <AnimatedCopy>04 Lighting Design</AnimatedCopy>
              <AnimatedCopy>05 Furniture Curation</AnimatedCopy>
            </div>
            <div className="service mb-32 max-[900px]:mb-16">
              <AnimatedCopy tag="h3" className="mb-2 block">(03)</AnimatedCopy>
              <AnimatedCopy tag="h2" className="mb-2 block">Technical Delivery</AnimatedCopy>
              <AnimatedCopy>01 Construction Documentation</AnimatedCopy>
              <AnimatedCopy>02 Structural Coordination</AnimatedCopy>
              <AnimatedCopy>03 Detailing & Specification</AnimatedCopy>
              <AnimatedCopy>04 Contractor Tendering</AnimatedCopy>
              <AnimatedCopy>05 Permitting Support</AnimatedCopy>
            </div>
            <div className="service mb-32 max-[900px]:mb-16">
              <AnimatedCopy tag="h3" className="mb-2 block">(04)</AnimatedCopy>
              <AnimatedCopy tag="h2" className="mb-2 block">Materials & Craft</AnimatedCopy>
              <AnimatedCopy>01 Timber & Joinery Detailing</AnimatedCopy>
              <AnimatedCopy>02 Stone & Masonry Selection</AnimatedCopy>
              <AnimatedCopy>03 Metalwork & Fixtures</AnimatedCopy>
              <AnimatedCopy>04 Sustainable Material Sourcing</AnimatedCopy>
              <AnimatedCopy>05 Artisan Collaboration</AnimatedCopy>
            </div>
            <div className="service">
              <AnimatedCopy tag="h3" className="mb-2 block">(05)</AnimatedCopy>
              <AnimatedCopy tag="h2" className="mb-2 block">Site Delivery</AnimatedCopy>
              <AnimatedCopy>01 Construction Administration</AnimatedCopy>
              <AnimatedCopy>02 Quality & Site Inspections</AnimatedCopy>
              <AnimatedCopy>03 Schedule & Budget Tracking</AnimatedCopy>
              <AnimatedCopy>04 Snagging & Handover</AnimatedCopy>
              <AnimatedCopy>05 Post-Occupancy Review</AnimatedCopy>
            </div>
          </div>
        </div>
      </section>

      <section className="about-outro-banner relative mt-32 h-[75vh] w-screen overflow-hidden bg-bg">
        <div className="about-outro-img relative h-full w-full">
          <ParallaxImage
            src="/about/about-outro.jpg"
            alt="Studio Kestrel completed interior"
          />
        </div>
      </section>

      <section className="founder-voice relative w-screen py-32">
        <div className="container mx-auto w-1/2 max-[900px]:w-[95%] border-l border-copy/[.125] px-5">
          <AnimatedCopy tag="h2" className="mb-12 block">
            &quot;We&apos;re not interested in a building that photographs
            well and lives badly. We design for the fifth year of living
            in a house, not the opening week.&quot;
          </AnimatedCopy>

          <div className="founder-image mb-5 w-[200px]">
            <img
              src="/about/founder.jpg"
              alt="Portrait of Studio Kestrel's founding principal"
              className="relative h-full w-full object-cover"
            />
          </div>
          <div className="founter-info">
            <AnimatedCopy>Marisol Okafor-Vance</AnimatedCopy>
            <AnimatedCopy>Founding Principal</AnimatedCopy>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
