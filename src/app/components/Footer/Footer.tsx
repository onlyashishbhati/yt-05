"use client";

/**
 * Starting point for the site footer.
 *
 * In the finished project the big "Kestrel" wordmark is split into
 * characters with SplitType and revealed with a GSAP timeline gated behind
 * a ScrollTrigger, the same pattern used by AnimatedH1/AnimatedCopy. For now
 * it's static markup with the final layout and typography so you can wire
 * the reveal animation onto it in the tutorial.
 */
const Footer = () => {
  return (
    <div className="footer relative w-full overflow-x-hidden bg-bg-deep pt-24">
      <div className="container relative flex w-full flex-col justify-end gap-16 p-5">
        <div className="footer-content flex w-full flex-col gap-16 max-[900px]:gap-16 min-[901px]:flex-row">
          <div className="flex-1">
            <h3 className="mb-6 w-2/5 max-[900px]:w-full font-display [font-weight:500] uppercase leading-[0.85] text-copy text-[2.25vw] max-[900px]:text-[8vw]">
              Considered spaces, in your inbox
            </h3>
            <div className="flex w-[65%] max-[900px]:w-full items-center gap-4 border-b border-copy/[.125] py-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full bg-transparent py-2.5 font-mono text-[14px] uppercase text-copy placeholder:text-copy placeholder:opacity-50 outline-none"
              />
              <button className="cursor-pointer bg-copy px-5 py-2.5 font-display [font-weight:700] uppercase text-bg text-[20px]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col-reverse items-end justify-between gap-16 min-[901px]:flex-col">
            <div className="row flex w-full min-[901px]:w-[90%] flex-col gap-4 min-[901px]:flex-row max-[900px]:hidden">
              <div className="footer-socials flex flex-1 gap-8">
                <a href="/" className="relative block font-mono text-[14px] uppercase text-copy">
                  Instagram
                </a>
                <a href="/" className="relative block font-mono text-[14px] uppercase text-copy">
                  LinkedIn
                </a>
              </div>
              <div className="langs flex flex-1 gap-8">
                <p className="relative block font-mono text-[14px] uppercase text-copy">
                  EN
                </p>
                <p className="relative block font-mono text-[14px] uppercase text-copy opacity-50">
                  FR
                </p>
              </div>
            </div>

            <div className="row flex w-full min-[901px]:w-[90%] flex-col gap-8 min-[901px]:flex-row">
              <div className="location flex-1">
                <h3 className="mb-3 w-full font-display [font-weight:500] uppercase leading-[0.85] text-copy text-[2.25vw] max-[900px]:text-[8vw]">
                  Portland
                </h3>
                <p className="relative block font-mono text-[14px] uppercase text-copy">
                  118 NW Couch Street
                </p>
                <p className="relative block font-mono text-[14px] uppercase text-copy">
                  Portland, OR 97209
                </p>
                <p className="relative block font-mono text-[14px] uppercase text-copy">
                  USA
                </p>
              </div>

              <div className="location flex-1">
                <h3 className="mb-3 w-full font-display [font-weight:500] uppercase leading-[0.85] text-copy text-[2.25vw] max-[900px]:text-[8vw]">
                  Lisbon
                </h3>
                <p className="relative block font-mono text-[14px] uppercase text-copy">
                  Rua do Alecrim 24
                </p>
                <p className="relative block font-mono text-[14px] uppercase text-copy">
                  1200-014 Lisboa
                </p>
                <p className="relative block font-mono text-[14px] uppercase text-copy">
                  Portugal
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-logo overflow-hidden text-center [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
          <h1 className="whitespace-nowrap font-display [font-weight:800] uppercase leading-[0.85] text-copy text-center text-[11vw] max-[900px]:text-[17vw]">
            Kestrel
          </h1>
        </div>

        <div className="footer-copyright flex w-full flex-col items-start justify-between gap-2 min-[901px]:flex-row min-[901px]:items-center">
          <p className="relative block font-mono text-[14px] uppercase text-copy">
            Studio Kestrel &copy;2026. All rights reserved.
          </p>
          <p className="relative block font-mono text-[14px] uppercase text-copy">
            Built by Script Valley
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
