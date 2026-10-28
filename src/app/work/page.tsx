import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

interface Project {
  id: number;
  name: string;
  imageUrl: string;
}

const projectsData: Project[] = [
  { id: 1, name: "Riverhouse", imageUrl: "/projects/project-banner-1.jpg" },
  { id: 2, name: "The Annex", imageUrl: "/projects/project-banner-2.jpg" },
  { id: 3, name: "Pine Ridge Retreat", imageUrl: "/projects/project-banner-3.jpg" },
  { id: 4, name: "Salt Block", imageUrl: "/projects/project-banner-4.jpg" },
  { id: 5, name: "Meridian Loft", imageUrl: "/projects/project-banner-5.jpg" },
  { id: 6, name: "Cantilever House", imageUrl: "/projects/project-banner-6.jpg" },
  { id: 7, name: "Atelier North", imageUrl: "/projects/project-banner-7.jpg" },
];

/**
 * Starting point for the work index.
 *
 * The finished project wraps this page in Lenis for smooth scroll, drives
 * each banner image with the GSAP/Lenis-powered ParallaxImage, and plays a
 * view-transition wipe when a project card is clicked (via
 * next-view-transitions' useTransitionRouter). Those are left out here —
 * project links are plain anchors and ParallaxImage/AnimatedH1 render
 * statically, so you have the full layout and data to animate in the
 * tutorial.
 */
const Page = () => {
  return (
    <div className="page min-h-[100svh] w-full bg-bg">
      <section className="work-hero relative min-h-[100svh] w-screen bg-bg">
        <div className="container mx-auto flex min-h-[100svh] w-4/5 max-[900px]:w-[90%] flex-col justify-center gap-8 px-5 py-32 text-center">
          <AnimatedH1 className="text-center text-[7vw] max-[900px]:text-[11vw]">
            Projects that hold their ground
          </AnimatedH1>
          <AnimatedCopy animateOnScroll={false} className="mx-auto w-1/2 max-[900px]:w-full">
            Houses, additions, and interiors shaped by site, light, and material
          </AnimatedCopy>
        </div>
      </section>

      <section className="projects relative w-full">
        {projectsData.map((project) => (
          <div className="project relative h-[100svh] w-screen overflow-hidden" key={project.id}>
            <div className="project-banner-img relative flex h-full w-full items-center justify-center overflow-hidden">
              <ParallaxImage src={project.imageUrl} alt={`${project.name} — architecture project`} />
              <div className="project-title relative z-[1]">
                <a href="/project">
                  <AnimatedH1 className="text-[7.5vw] max-[900px]:text-[12vw]">
                    {project.name}
                  </AnimatedH1>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Page;
