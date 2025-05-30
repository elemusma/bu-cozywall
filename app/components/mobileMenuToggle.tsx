import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ButtonSquare from "./buttons/btn-square";
import { Company, Phone } from "@/app/components/globals";
import Logo from "@/app/components/logo";
// import AboutLinks from "./reusable/nav/aboutLinks";
// import CareersLinks from "./reusable/nav/careersLinks";
// import IndustriesLinks from "./reusable/nav/industriesLinks";
// import LocationsLinks from "./reusable/nav/locationsLinks";
// import ProjectsLinks from "./reusable/nav/projectsLinks";
// import ServicesLinks from "./reusable/nav/servicesLinks";
import SocialIcons from "@/app/components/socialIcons";

const MobileMenuToggle = () => {
  const pathname = usePathname(); // Get the current route
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggle = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        id="mobileMenuToggle"
        className="openModalBtn nav-toggle"
        title={`mobile menu nav toggle for ${Company}`}
        style={{ cursor: "pointer" }}
        onClick={handleToggle}
      >
        <div style={{ padding: "10px 0px" }}>
          <div className="line-1 bg-[var(--neutral-dark)]"></div>
          <div className="line-2 bg-[var(--neutral-dark)]"></div>
          <div className="line-3 bg-[var(--neutral-dark)]"></div>
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="mobileMenu"
          className={`modal-custom mobile-menu ${isModalOpen ? "active" : ""}`}
          style={{ display: "block" }}
        >
          {/* Modal Content */}
          <div
            className="bg-white modal-content-menu modal-content-custom"
            style={{
              background: "",
              paddingTop: "50px",
            }}
          >
            {/* Close Button */}
            <span className="close-custom" id="navMenuClose" onClick={handleClose}>
              &times;
            </span>

            {/* Logo Section */}
            <div style={{ width: "100%", maxWidth: "205px" }} id="logoMain">
              <Link
                href="/"
                title={`Homepage link for ${Company}`}
                onClick={handleClose}
              >
                {/** Replace `logoSVG()` with your logo component or JSX */}
                <Logo />
              </Link>
            </div>
            <div className="h-[25px]"></div>
            <ButtonSquare
              className="" // Adding additional class
              style={{ }} // Adding inline style
              id="" // Adding an ID
              href="#get-estimate" // Dynamic href
              onClick={handleClose}
            >
              Free Estimate!
            </ButtonSquare>
            <div className="w-full lg:w-1/3 text-right flex justify-start">
              <SocialIcons />
            </div>
            <div className="h-[25px]"></div>
            {/* Navigation Menu */}
            <Link
              href="#about"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-0 block py-4"
            >
              About Our Team
            </Link>
            <Link
              href="#services"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-00 block py-4"
            >
              Insulation Services
            </Link>
            <Link
              href="#industries"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-00 block py-4"
            >
              Industries Served
            </Link>
            <Link
              href="#process"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-00 block py-4"
            >
              Process
            </Link>
            <Link
              href="#testimonials"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-00 block py-4"
            >
              Testimonials / Reviews
            </Link>
            <Link
              href="#gallery"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-00 block py-4"
            >
              Gallery
            </Link>
            <Link
              href="#videos"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-00 block py-4"
            >
              Videos
            </Link>
             <Link
                href={`tel:+1${Phone}`}
                className={`flex items-center gap-1 uppercase font-proxima-bold tracking-[.2em] text-xl px-4`}
                style={{}}
              >
                {Phone} 
              </Link>

            {/* Spacer */}
            <div style={{ height: "25px" }}></div>

            {/* CTA Button */}
            <ButtonSquare
              className="" // Adding additional class
              style={{}} // Adding inline style
              id="" // Adding an ID
              href="#get-estimate" // Dynamic href
              onClick={handleClose}
            >
              Free Estimate!
            </ButtonSquare>

            <div style={{ height: "25px" }}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenuToggle;
