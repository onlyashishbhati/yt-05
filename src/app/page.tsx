import AnimatedH1 from "./components/AnimatedH1/AnimatedH1";

/**
 * Starting point for the home page.
 *
 * The finished project adds a preloader (a GSAP timeline that animates a
 * progress bar, then wipes away with a clip-path reveal) before this hero
 * is shown. That preloader is left out here — this is the plain hero
 * section you'll build the preloader and entrance animation on top of.
 */
export default function Home() {
  return (
    <div className="page min-h-[100svh] w-full bg-bg">
      <section className="index-hero relative flex h-[100svh] w-screen items-center justify-center overflow-hidden bg-bg">
        <div className="hero-img absolute top-0 left-0 h-full w-full">
          <img
            src="/home/hero-img.jpg"
            alt="Abstract architectural massing study in warm tones"
            className="relative h-full w-full object-cover"
          />
        </div>

        <div className="hero-header w-[65%] max-[900px]:w-[90%] text-center">
          <AnimatedH1 className="text-[10vw] max-[900px]:text-[20vw]">
            Weight, Light, and the Space Between.
          </AnimatedH1>
        </div>

        <div className="hero-footer fixed bottom-0 left-0 flex w-screen items-center justify-between p-5">
          <div className="site-info relative h-4 w-max [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
            <a
              href="/work"
              className="relative block font-mono text-[14px] uppercase text-copy"
            >
              View Selected Work
            </a>
          </div>

          <div className="contact-link relative h-4 w-max [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
            <a
              href="/"
              className="relative block font-mono text-[14px] uppercase text-copy"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
