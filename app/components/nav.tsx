"use client";
import { useEffect, useRef } from "react"; // Import the necessary hooks
import "../styles/nav-mobile.scss";

import ButtonSquare from "@/app/components/buttons/btn-square";
import Logo from "@/app/components/logo";
import MobileMenuToggle from "@/app/components/mobileMenuToggle";
import NavItems from "./nav-items";
// import NavItems from "./nav-items";

export default function Navigation() {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const blankSpaceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const header = headerRef.current;
    const blankSpace = blankSpaceRef.current;

    const parallaxEffect = () => {
      if (header && blankSpace) {
        if (window.scrollY < 199) {
          blankSpace.style.height = "0px";
          header.classList.add("relative");
          header.classList.add("inactive");
          header.classList.remove("fixed");
          header.classList.remove("active");
        } else if (window.scrollY > 200) {
          blankSpace.style.height = `${header.offsetHeight}px`;
          header.classList.add("fixed");
          header.classList.add("active");
          header.classList.remove("relative");
          header.classList.remove("inactive");
        }
      }
    };

    window.addEventListener("scroll", parallaxEffect);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);

  // console.log("hello there again");

  return (
    <>
      <div ref={blankSpaceRef} className="blank-space">
        {/* Blank space content */}
        {/* <ButtonSquare
          className="btn-free-estimate fixed lg:block hidden hover:bg-[var(--neutral-dark)] z-10 text-center leading-none top-1/4 right-[0.3px] -translate-y-1/2 text-sm" // Adding additional class
          style={{ padding: 5 }}
          id="" // Adding an ID
          href="tel:+1479.347.7521" // Dynamic href
        >
          <div>
            <svg
              className="w-4 h-4 m-auto mb-2"
              style={{ fill: "white" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
            </svg>
            Free<br></br>Estimate
          </div>
        </ButtonSquare> */}
      </div>
      <header
        ref={headerRef}
        className="bg-white relative w-full z-10"
        style={{
          top: 0,
          zIndex: 11,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <nav className="relative">
          <div className="hidden lg:block">
            <NavItems />
          </div>
          <div className="block lg:hidden max-w-screen-lg mx-auto pl-4">
            <div className="flex justify-between items-center">
              <div className="lg:w-1/4 md:w-1/5 w-1/3">
                <Logo />
              </div>
              <div
                className="md:w-6/12 w-1/6 flex flex-wrap"
                style={{ justifyContent: "end" }}
              >
                <MobileMenuToggle />
              </div>
              <div className="lg:w-1/4 w-5/12 md:pl-4">
                <ButtonSquare
                  className="lg:hidden !flex justify-center items-center text-sm text-center w-full" // Adding additional class
                  style={{
                    padding: "10px 10px",
                    fontSize: "12px",
                  }} // Adding inline style
                  id="" // Adding an ID
                  href="/#get-estimate" // Dynamic href
                >
                  <div className="px-2">
                    <svg
                      className="w-4 h-4 m-auto"
                      style={{ fill: "white" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
                    </svg>
                  </div>
                  <span>Free Estimate!</span>
                </ButtonSquare>
              </div>
            </div>
          </div>
          {/* <ButtonSquare
            className="absolute hidden md:block hover:bg-[var(--neutral-dark)]" // Adding additional class
            style={{ top: "50%", right: 0, transform: "translate(0, -50%)" }} // Adding inline style
            id="" // Adding an ID
            href="#get-estimate" // Dynamic href
          >
            Free Estimate!
          </ButtonSquare> */}
        </nav>
      </header>
    </>
  );
}
