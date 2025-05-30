import Image from "next/image";
// import ContactForm from "../components/contactForm";
import type { Metadata } from "next";
// import ContentBlock from "../components/reusable/content-block";
import { Company } from "../components/globals";
import Nav from "../components/nav";
import Footer from "@/app/components/footer";
// import * as motion from "motion/react-client";


export const metadata: Metadata = {
  title:
    "Thank You - Commercial, Industrial & Residential Painting Services - Paint Innovators",
  description:
    "Thank you for choosing Paint Innovators. We will get back to you in no time.",
  openGraph: {
    title:
      "Thank You - Commercial, Industrial & Residential Painting Services - Paint Innovators",
    description:
      "Thank you for choosing Paint Innovators. We will get back to you in no time.",
    url: `${Company}/thank-you`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Company}/gallery/Industrial-50.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Thank You - Commercial, Industrial & Residential Painting Services - Cozy Wall Foam Insulation",
      },
    ],
  },
};
export default function ThankYou() {
  return (
    <>
    <Nav />
       <section className="relative w-full md:pt-[150px] pt-[100px]">
      <div
        className="absolute w-full h-full z-[1] top-0 left-0 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, rgba(27, 56, 100, 1) 0%, rgba(255, 255, 255, 0) 45%)'
        }}
      ></div>
      <Image 
        src="/photos/Cozy-Wall-Foam-Insulation-1.jpg" 
        alt="Injection Spray Foam Insulation" 
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw" // 👈 add this
        className="top-0 left-0 z-0"
    />
            <div className="py-[35px] relative w-full h-full">
            <div className="bg-[#bb854b] absolute w-full mix-blend-multiply h-full top-0 pointer-events-none"></div>
              
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div> */}
              <div className="relative inset-0 flex flex-col justify-center items-center text-white px-4 text-center space-y-4">
      
                <div className="relative py-2 px-4 rounded-lg w-full">
                  <h1 className="text-4xl md:text-4xl font-bold">THANK YOU</h1>
                  <h2 className="minion-pro-italic text-2xl mt-2">We will be reaching out to you soon.</h2>
                </div>
      
              </div>

            </div>
                  <div className="w-full relative z-[1] md:mt-[125px] mt-[50px] pb-[25px]">
                    <div className="md:w-3/4 w-full ml-auto">
                    
                  <p className="text-3xl uppercase text-white md:pl-[100px] pl-[75px] tracking-[.1em]">Modern Technology</p>

                  <div className="my-2 border-t-4 border-[var(--accent-tertiary)] w-full"></div>
                  
                  <p className="text-3xl uppercase text-white md:pl-[0px] pl-[25px] tracking-[.1em]">Old Fashioned Values</p>

                  </div>
                </div>
          </section>
          <Footer />
    </>
  );
}
