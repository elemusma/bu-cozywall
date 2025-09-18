"use client";
import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";
// import "@/app/styles/footer.scss";
import "@/app/styles/social-icons.scss";
import {
  Phone, Address
} from "./globals.js";
import Logo from "./logo";
import SocialIcons from "@/app/components/socialIcons";
import ButtonSquare from "@/app/components/buttons/btn-square";

export default function Footer() {
  // const pathname = usePathname(); // Get the current route
  return (
    <>
      <footer>
      <section>
        <div className="max-w-screen-lg mx-auto py-3 px-4">
          <div className="flex flex-wrap justify-center relative">
            <div className="w-full text-center">
              <div className="md:w-1/2 w-full flex justify-center mx-auto mb-4">
              <Logo />
              </div>
              <ButtonSquare
              className="" // Adding additional class
              style={{ }} // Adding inline style
              id="" // Adding an ID
              href="#get-estimate" // Dynamic href
              target="_self" // Open in same tab
            >
              Book My Free Estimate
            </ButtonSquare>
            <Link
                href={`tel:+1${Phone}`}
                className={`text-center text-3xl block py-4 gap-1 uppercase font-proxima-bold tracking-[.2em] px-4`}
                style={{}}
              >
                {Phone} 
              </Link>
              <p><strong>{Address}</strong></p>
              <SocialIcons />
              <p className="pt-4"><strong>Copyright &copy; {new Date().getFullYear()} Cozy Wall Foam Insulation, LLC - All Rights Reserved.</strong></p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#d9d9d9] p-4 text-center">
        {/* <div className=""> */}
<a href="https://buildupuniversity.com/" target="_blank" title="Learn how to build and market trades businesses and convert your cash into long-term real estate that will build passive wealth for you in the background" className="block">
        <Image
          src="/photos/BuildUp-University.png"
          alt="Injection Spray Foam Insulation"
          width={100}
          height={100}
          className="w-[150px] h-auto mx-auto object-contain object-center"
          />
          </a>
          {/* </div> */}
      </section>
</footer>
    </>
  );
}
