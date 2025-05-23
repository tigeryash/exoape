import { useRef } from "react";

const Content = () => {
  const container = useRef<HTMLDivElement>(null);

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
