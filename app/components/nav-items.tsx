"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import "../styles/nav-items.scss";
import "../styles/nav.scss";
import Logo from "./logo";
// import { usePathname } from "next/navigation";
import { Phone } from "@/app/components/globals";
import ButtonSquare from "./buttons/btn-square";

export default function NavItems({ logoContainerClassName = "" }) {
    // const pathname = usePathname(); // Get the current route
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const handleToggle = () => {
    //   setIsModalOpen((prevState) => !prevState);
    // };
  
    // const handleClose = () => {
    //   setIsModalOpen(false);
    // };

  const menuRef = useRef<boolean>(false);
  // const router = useRouter();
  // const currentPath = router.pathname;
  // const pathname = usePathname(); // Get the current route

  useEffect(() => {
    // Prevent multiple initializations
    if (menuRef.current) return;
    menuRef.current = true;

    const handleDropdowns = () => {
      const menuItems = document.querySelectorAll(".menu-item-has-children");

      menuItems.forEach((item) => {
        const subMenu = item.querySelector(".sub-menu") as HTMLElement;

        // if (window.matchMedia("(min-width: 1200px)").matches) {
        // Remove any existing listeners first
        const mouseoverHandler = () => {
          console.log("Mouseover triggered"); // Debugging
          if (subMenu && !subMenu.classList.contains("active-sub-menu")) {
            subMenu.classList.add("active-sub-menu");

            // Calculate dynamic height based on children
            let totalHeight = 0;
            const children = subMenu.querySelectorAll("li");
            children.forEach((child) => {
              totalHeight += (child as HTMLElement).offsetHeight;
            });

            subMenu.style.height = `${totalHeight}px`;
          }
        };

        const mouseoutHandler = () => {
          if (subMenu?.classList.contains("active-sub-menu")) {
            subMenu.classList.remove("active-sub-menu");
            subMenu.style.height = "0px";
          }
        };

        item.addEventListener("mouseover", mouseoverHandler);
        item.addEventListener("mouseout", mouseoutHandler);

        // Cleanup function to remove event listeners
        return () => {
          item.removeEventListener("mouseover", mouseoverHandler);
          item.removeEventListener("mouseout", mouseoutHandler);
        };
        // }
      });
    };

    // Initial setup
    handleDropdowns();

    // Re-run on window resize
    window.addEventListener("resize", handleDropdowns);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleDropdowns);
    };
  }, []);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <div
          className={`w-3/4 md:w-2/3 lg:order-2 order-1 relative ${
            logoContainerClassName || "lg:w-1/6"
          }`}
        >
          <Logo className="relative px-4" />
        </div>

        <div className="lg:w-5/6 w-7/12 lg:order-3 order-3 flex lg:justify-end items-center justify-center">
        <Link
                href={`tel:+1${Phone}`}
                className={`flex items-center gap-1 uppercase font-proxima-bold tracking-[.2em] text-xl px-4`}
                style={{}}
              >
                {Phone} 
              </Link>
          {/* <ul className="main-menu m-0">
            <li className="relative text-left">
              
            </li>
          </ul> */}
          <ButtonSquare
              className="" // Adding additional class
              style={{ }} // Adding inline style
              id="" // Adding an ID
              href="#get-estimate" // Dynamic href
            >
              Book Your Free Estimate
            </ButtonSquare>
        </div>
      </div>
    </>
  );
}
