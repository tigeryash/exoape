import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Content = ({ isAnimating }: { isAnimating: boolean }) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!isAnimating) return;
    gsap.to(container.current, {
      rotation: 10,
      x: 300,
      y: 450,
      scale: 1.5,
      duration: 1.25,
      ease: "power4.inOut",
    });
  }, [isAnimating]);

  return (
    <main className="container" ref={container}>
      <section className="hero">
        <div className="hero-img">
          <img src="/image2.jpg" alt="" />
        </div>
        <h1>Digital architecture that rises from the void.</h1>
      </section>
    </main>
  );
};

export default Content;
