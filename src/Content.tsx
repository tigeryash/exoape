import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Content = ({
  isAnimating,
  isOpen,
}: {
  isAnimating: boolean;
  isOpen: boolean;
}) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!isAnimating) return;
    if (!isOpen) {
      gsap.to(container.current, {
        rotation: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.25,
        ease: "power4.inOut",
      });
    } else {
      gsap.to(container.current, {
        rotation: 10,
        x: 300,
        y: 450,
        scale: 1.5,
        duration: 1.25,
        ease: "power4.inOut",
      });
    }
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
