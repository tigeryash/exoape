import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isAnimating: boolean;
  setIsAnimating: (value: boolean) => void;
};

const Nav = ({ isOpen, setIsOpen, isAnimating, setIsAnimating }: Props) => {
  const menuToggle = useRef<HTMLDivElement>(null);
  const menuOverlay = useRef<HTMLDivElement>(null);
  const menuContent = useRef<HTMLDivElement>(null);
  const menuPreviewImg = useRef<HTMLDivElement>(null);
  const menuLinks = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLParagraphElement>(null);

  const [previewImg, setPreviewImg] = useState<string>("");

  const animationMenuToggle = () => {
    gsap.to(
      menuButton.current?.id === "menu-open" ? menuButton.current : null,
      {
        x: isOpen ? -5 : 5,
        y: isOpen ? -10 : 10,
        rotation: isOpen ? -5 : 5,
        opacity: 0,
        delay: 0.25,
        duration: 0.5,
        ease: "power2.out",
      }
    );

    gsap.to(
      menuButton.current?.id === "menu-close" ? menuButton.current : null,
      {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        delay: 0.5,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  };

  const openMenu = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    if (!isAnimating) return;
    animationMenuToggle();

    gsap.to(menuContent.current, {
      rotation: 0,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 1.25,
      ease: "power4.inOut",
    });

    gsap.to([".link a", ".social a"], {
      y: "0%",
      opacity: 1,
      duration: 1,
      delay: 0.75,
      stagger: 0.1,
      ease: "power3.inOut",
    });

    gsap.to(menuOverlay.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 175%, 0 100%)",
      duration: 1.25,
      ease: "power4.inOut",
      onComplete: () => {
        setIsAnimating(false);
      },
    });
  }, [isAnimating]);

  return (
    <>
      <nav>
        <div className="logo">
          <a href="">Void Construct</a>
        </div>
        <div className="menu-toggle" ref={menuToggle} onClick={openMenu}>
          <p ref={menuButton} id={isOpen ? "menu-close" : "menu-open"}>
            {isOpen ? "Close" : "Menu"}
          </p>
        </div>
      </nav>

      <div className="menu-overlay" ref={menuOverlay}>
        <div className="menu-content" ref={menuContent}>
          <div className="menu-items">
            <div className="col-lg">
              <div className="menu-preview-img" ref={menuPreviewImg}>
                <img src="/image1.jpg" alt="" />
              </div>
            </div>
            <div className="col-sm">
              <div className="menu-links" ref={menuLinks}>
                <div className="link">
                  <a href="">Visions</a>
                </div>
                <div className="link">
                  <a href="">Core</a>
                </div>
                <div className="link">
                  <a href="">Signals</a>
                </div>
                <div className="link">
                  <a href="">Connect</a>
                </div>
              </div>
              <div className="menu-socials">
                <div className="social">
                  <a href="#" target="_blank">
                    Behance
                  </a>
                </div>
                <div className="social">
                  <a href="#" target="_blank">
                    Dribbble
                  </a>
                </div>
                <div className="social">
                  <a href="#" target="_blank">
                    Instagram
                  </a>
                </div>
                <div className="social">
                  <a href="#" target="_blank">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-footer">
            <div className="col-lg">
              <a href="">Run Sequence</a>
            </div>
            <div className="col-sm">
              <a href="">Origin</a>
              <a href="">Join Signal</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
