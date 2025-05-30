"use client";
import Image from "next/image";
import Tabs, {Tab} from "@/app/components/reusable/tabs";
import ContentBlock from "@/app/components/reusable/content-block";
import Nav from "./components/nav";
import Link from "next/link";
import './styles/home.scss';
import './styles/fonts.scss';
import { Phone } from "./components/globals";
import SwiperCarouselGallery from "./components/swiperCarouselGallery";
import { useEffect } from "react";
import * as motion from "motion/react-client";
import ContactForm from "./components/forms/ContactForm";
// import Logo from "./components/logo";
// import ButtonSquare from "./components/buttons/btn-square";
import Testimonials from "./components/reusable/testimonials";
import Footer from "./components/footer";
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay:custom, duration: 0.8, ease: "easeOut" },
  }),
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay:custom, duration: 0.8, ease: "easeOut" },
  }),
};
const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay:custom, duration: 0.8, ease: "easeOut" },
  }),
};

export default function Home() {
useEffect(() => {
  const aspectRatio = 560 / 315;

  const resizeIframes = () => {
    const iframes = document.querySelectorAll<HTMLIFrameElement>("iframe");
    iframes.forEach((iframe) => {
      iframe.style.height = `${iframe.offsetWidth / aspectRatio}px`;
    });
  };

  resizeIframes(); // Initial resize
  window.addEventListener("resize", resizeIframes);

  return () => {
    window.removeEventListener("resize", resizeIframes);
  };
}, []);

  
  const tabsData: Tab[] = [
  {
    title: "RESIDENTIAL",
    content: (
      <div className="space-y-4">
        <p>
          Cozy Wall Foam Insulation is the perfect solution for homeowners looking to improve
          energy efficiency, comfort, and indoor air quality. Our pour-in-place foam fills every
          gap within your walls, helping regulate indoor temperature while reducing energy bills.
        </p>
        <p>
          Whether you&apos;re renovating an older home or building new, our minimally invasive
          installation process ensures clean, fast upgrades with long-lasting results.
        </p>
      </div>
    ),
    customTabButtonClassName: "lg:w-1/4 w-1/2",
    customTabButtonStyle: { fontSize: "1.2rem" },
  },
  {
    title: "COMMERCIAL",
    content: (
      <div className="space-y-4">
        <p>
          For commercial spaces, Cozy Wall Foam Insulation offers effective thermal and sound
          insulation that enhances comfort for employees and customers alike. Ideal for offices,
          retail spaces, and multi-use buildings.
        </p>
        <p>
          Our team works efficiently to minimize disruption, ensuring your operations can continue
          while improving energy performance and lowering utility costs.
        </p>
      </div>
    ),
    customTabButtonClassName: "lg:w-1/4 w-1/2",
    customTabButtonStyle: { fontSize: "1.2rem" },
  },
  {
    title: "GOVERNMENT",
    content: (
      <div className="space-y-4">
        <p>
          Cozy Wall Foam Insulation is a trusted partner for government and municipal projects,
          providing code-compliant insulation solutions for schools, offices, housing, and public
          buildings.
        </p>
        <p>
          Our team is experienced in meeting government standards and timelines while delivering
          energy-efficient performance, indoor comfort, and long-term durability.
        </p>
      </div>
    ),
    customTabButtonClassName: "lg:w-1/4 w-full",
    customTabButtonStyle: { fontSize: "1.2rem" },
  },
];


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
          className="top-0 left-0 z-0 object-cover object-center" // Ensures the image covers the section
        />
      <div className="py-[35px] relative w-full h-full">
<div className="bg-[#bb854b] absolute w-full mix-blend-multiply h-full top-0 pointer-events-none"></div>
        
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div> */}
        <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="relative inset-0 flex flex-col justify-center items-center text-white px-4 text-center space-y-4">

          <div className="relative py-2 px-4 rounded-lg w-full">
            <h1 className="text-4xl md:text-4xl font-bold">INJECTION SPRAY FOAM INSULATION</h1>
            <h2 className="minion-pro-italic text-2xl mt-2">Wrap Your Home in Comfort Year-Round with Expert Exterior Wall Insulation</h2>
          </div>

        </div>
        </motion.div>
      </div>
            <div className="w-full relative z-[1] md:mt-[125px] mt-[50px] pb-[25px]">
              <div className="md:w-3/4 w-full ml-auto">
              <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
            <p className="text-3xl uppercase text-white md:pl-[100px] pl-[75px] tracking-[.1em]">Modern Technology</p>
            </motion.div>
            <div className="my-2 border-t-4 border-[var(--accent-tertiary)] w-full"></div>
            <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
            <p className="text-3xl uppercase text-white md:pl-[0px] pl-[25px] tracking-[.1em]">Old Fashioned Values</p>
      </motion.div>
            </div>
          </div>
    </section>
    {/* start of about section */}
    <section className="py-[50px] relative">
      <div className="absolute top-[-100px]" id="about"></div>
<div className="max-w-screen-lg mx-auto py-3 px-4">
  <div className="flex flex-wrap relative">
    <div className="md:w-1/12 w-1/6 px-4">
    <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
    <Image
  src="/photos/About-Perfection.jpg"
  alt="Injection Spray Foam Insulation"
  width={50}
  height={200}
  className="w-[50px] h-[200px] object-contain object-top" // Ensures strict sizing
/>
  </motion.div>

    </div>
    <div className="md:w-4/12 w-2/3 px-4">
    <motion.div
        variants={fadeUpVariants}
        custom={.2} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
    <Link href="#about" className="block clip-custom-shape mb-2 uppercase font-proxima-bold italic">ABOUT COZY WALL</Link>
    </motion.div>
    <motion.div
        variants={fadeUpVariants}
        custom={.3} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
    <Link href="#services" className="block clip-custom-shape my-2 uppercase font-proxima-bold italic">INSULATION SERVICES</Link>
      </motion.div>
      <motion.div
        variants={fadeUpVariants}
        custom={.4} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
    <Link href="#testimonials" className="block clip-custom-shape my-2 uppercase font-proxima-bold italic">Testimonials / Reviews</Link>
      </motion.div>
      <motion.div
        variants={fadeUpVariants}
        custom={.5} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
    <Link href="#get-estimate" className="block clip-custom-shape my-2 uppercase font-proxima-bold italic">Get Free Estimate</Link>
      </motion.div>
    </div>
    <div className="md:w-6/12 w-full md:pt-0 pt-8 px-4">
    <motion.div
        variants={fadeUpVariants}
        custom={.6} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
    <h2 className="text-accent text-4xl font-proxima-light">ABOUT OUR TEAM</h2>
    <p className="proxima-nova-thin">At the heart of our company is a team that genuinely cares — about our customers, the quality of our work, and the experience we deliver every step of the way. We are committed to providing exceptional service with professionalism, integrity, and attention to detail. Every project we undertake reflects our dedication to excellence and our unwavering focus on customer satisfaction. We don&apos;t just complete tasks — we build trust, exceed expectations, and take pride in doing things the right way.</p>
    </motion.div>
    </div>
  </div>
</div>
    </section>
    {/* end of about section */}
    {/* start of services section */}
    <section className="relative pt-[50px]" id="">
      <div className="absolute top-[-100px]" id="services"></div>
      <div className="absolute w-full top-0 left-0 h-[90%] bg-[#ebebeb]"></div>
      <div className="max-w-screen-lg mx-auto py-3 px-4">
  <div className="flex flex-wrap justify-center items-stretch relative">
    <div className="w-full md:w-3/4 text-center pb-4">
    <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      <h2 className="text-accent text-4xl font-proxima-light">WALL FOAM INSULATION SERVICES</h2>
      <p className="text-lg">Whether you&apos;re dealing with cold spots, high energy costs, or just want a more efficient home, we&apos;ve got you covered.</p>
      </motion.div>
      </div>
      {/* start of individual service */}
      <div className="md:w-1/2 w-full relative px-4 my-4 group">
      <motion.div
        variants={fadeUpVariants}
        custom={.2} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      <div className="relative py-[100px] overflow-hidden">
      <Image
  src="/photos/Cozy-Wall-Foam-Insulation-7.jpg"
  alt="Injection Spray Foam Insulation"
  fill
  sizes="(max-width: 768px) 100vw, 50vw" // 👈 add this
  className="w-full absolute top-0 left-0 h-100 object-cover object-top transition-transform duration-500 group-hover:scale-110" // Ensures strict sizing
/>

<div className="relative w-3/4 mx-auto py-2">
  <div className="bg-[var(--accent-primary)] absolute w-full mix-blend-multiply h-full top-0 pointer-events-none"></div>
  <div className="relative inset-0 flex flex-col justify-center items-center text-white px-4 text-center space-y-4">
    <h3 className="text-xl font-aspira-bold m-0">Pour-In Foam Insulation</h3>
    <div className="my-1 border-t border-[var(--accent-tertiary)] w-full"></div>
    <p className="font-aspira-bold">Expands to seal every gap and void</p>
</div>
      </div>
      </div>
      </motion.div>
      </div>
      {/* end of individual service */}
      {/* start of individual service */}
     <div className="md:w-1/2 w-full relative px-4 my-4 group">
<motion.div
        variants={fadeUpVariants}
        custom={.4} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      <div className="relative py-[100px] overflow-hidden">
      <Image
  src="/photos/Cozy-Wall-Foam-Insulation-22.jpg"
  alt="Injection Spray Foam Insulation"
  fill
  sizes="(max-width: 768px) 100vw, 50vw" // 👈 add this
  className="w-full absolute top-0 left-0 h-100 object-cover object-top transition-transform duration-500 group-hover:scale-110" // Ensures strict sizing
/>

<div className="relative w-3/4 mx-auto py-2">
  <div className="bg-[var(--accent-primary)] absolute w-full mix-blend-multiply h-full top-0 pointer-events-none"></div>
  <div className="relative inset-0 flex flex-col justify-center items-center text-white px-4 text-center space-y-4">
    <h3 className="text-xl font-aspira-bold m-0">Existing Wall Insulation</h3>
    <div className="my-1 border-t border-[var(--accent-tertiary)] w-full"></div>
    <p className="font-aspira-bold">Upgrade without tearing up drywall</p>
</div>
      </div>
      </div>
</motion.div>
      </div>
      {/* end of individual service */}
      {/* start of individual service */}
     <div className="md:w-1/2 w-full relative px-4 my-4 group">
     <motion.div
        variants={fadeUpVariants}
        custom={.2} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      <div className="relative py-[100px] overflow-hidden">
      <Image
  src="/photos/Cozy-Wall-Foam-Insulation-14.jpg"
  alt="Injection Spray Foam Insulation"
  fill
  sizes="(max-width: 768px) 100vw, 50vw" // 👈 add this
  className="w-full absolute top-0 left-0 h-100 object-cover object-top transition-transform duration-500 group-hover:scale-110" // Ensures strict sizing
/>

<div className="relative w-3/4 mx-auto py-2">
  <div className="bg-[var(--accent-primary)] absolute w-full mix-blend-multiply h-full top-0 pointer-events-none"></div>
  <div className="relative inset-0 flex flex-col justify-center items-center text-white px-4 text-center space-y-4">
    <h3 className="text-xl font-aspira-bold m-0">Exterior / Interior Install</h3>
    <div className="my-1 border-t border-[var(--accent-tertiary)] w-full"></div>
    <p className="font-aspira-bold">Minimal disruption with maximum efficiency</p>
</div>
      </div>
      </div>
      </motion.div>
      </div>
      {/* end of individual service */}
      {/* start of individual service */}
     <div className="md:w-1/2 w-full relative px-4 my-4 group">
          <motion.div
        variants={fadeUpVariants}
        custom={.4} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      <div className="relative py-[100px] overflow-hidden">
      <Image
  src="/photos/Services-Cinder-Block.jpg"
  alt="Injection Spray Foam Insulation"
  fill
  sizes="(max-width: 768px) 100vw, 50vw" // 👈 add this
  className="w-full absolute top-0 left-0 h-100 object-cover object-top transition-transform duration-500 group-hover:scale-110" // Ensures strict sizing
/>

<div className="relative w-3/4 mx-auto py-2">
  <div className="bg-[var(--accent-primary)] absolute w-full mix-blend-multiply h-full top-0 pointer-events-none"></div>
  <div className="relative inset-0 flex flex-col justify-center items-center text-white px-4 text-center space-y-4">
    <h3 className="text-xl font-aspira-bold m-0">Cinder Block Wall Insulation</h3>
    <div className="my-1 border-t border-[var(--accent-tertiary)] w-full"></div>
    <p className="font-aspira-bold">Fill block cavities with foam for improved performance</p>
</div>
      </div>
      </div>
      </motion.div>
      </div>
      {/* end of individual service */}
      </div>
      </div>
    </section>
    {/* end of services section */}
    <motion.div
        variants={fadeUpVariants}
        custom={.2} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      <ContentBlock
        sectionClassName="pt-[50px] relative"
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
        background={
          <>
          <div className="absolute top-[-100px]" id="industries"></div>
          </>
        }
      >
        <h2 className="text-accent text-4xl font-proxima-light">INDUSTRIES SERVED</h2>
      </ContentBlock>
      <Tabs
        tabs={tabsData}
        containerClassName="my-custom-container max-w-screen-lg mx-auto"
        headerClassName="flex flex-wrap overflow-hidden justify-center mb-4 px-4 headerClassName"
        tabButtonClassName="px-4 py-2 border mr-2"
        activeTabButtonClassName="bg-blue-600 text-white activeTabButtonClassName"
        contentClassName="p-4"
      />
</motion.div>

<motion.div
        variants={fadeUpVariants}
        custom={.2} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      <ContentBlock
        sectionClassName="pt-[50px]"
        containerClassName="py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <Image
          src="/photos/Work-Sets-Us-Apart.jpg"
          alt="Injection Spray Foam Insulation"
          width={2000}
          height={2000}
          className="w-full h-auto object-cover object-center"
        />
      </ContentBlock>
      </motion.div>
      <motion.div
        variants={fadeUpVariants}
        custom={.2} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      <ContentBlock
        sectionClassName="pt-[50px]"
        containerClassName="py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
        background={
          <>
          <div className="absolute top-[-100px]" id="process"></div>
          </>
        }
      >
        <Image
          src="/photos/Our-Process.jpg"
          alt="Injection Spray Foam Insulation"
          width={2000}
          height={2000}
          className="w-full h-auto object-cover object-center"
        />
      </ContentBlock>
      </motion.div>


<div className="h-[100px]"></div>
      <Testimonials />
<div className="h-[50px]"></div>
<div className="h-[50px]"></div>
<motion.div
        variants={fadeUpVariants}
        custom={.2} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      <section className="bg-[#968f8d] py-8">
      <div className="max-w-screen-lg mx-auto py-3 px-4">
  <div className="flex flex-wrap justify-center relative">
    <div className="w-full md:w-3/4 text-center">
<p className="mb-0 tracking-[.2em] text-white text-4xl"><span className="font-proxima-thin">CALL US TODAY </span><a href={`tel:+1${Phone}`} className="font-proxima-bold">{Phone}</a></p>
    </div>
    </div>
    </div>
    </section>
    </motion.div>

<div className="h-[25px]"></div>

<motion.div
        variants={fadeUpVariants}
        custom={.2} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
<ContentBlock
        sectionClassName="pt-[50px]"
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
        background={
          <>
          <div className="absolute top-[-100px]" id="gallery"></div>
          </>
        }
      >
        <h2 className="text-accent text-6xl font-proxima-thin">GALLERY</h2>
      </ContentBlock>
    <SwiperCarouselGallery
            slides={[
              {imageSrc:"/photos/Cozy-Wall-Foam-Insulation-1.jpg", imageAlt:"Injection Spray Foam Insulation"},
              {imageSrc:"/photos/Cozy-Wall-Foam-Insulation-8.jpg", imageAlt:"Injection Spray Foam Insulation"},
              {imageSrc:"/photos/Cozy-Wall-Foam-Insulation-15.jpg", imageAlt:"Injection Spray Foam Insulation"},
              {imageSrc:"/photos/Cozy-Wall-Foam-Insulation-19.jpg", imageAlt:"Injection Spray Foam Insulation"},
              {imageSrc:"/photos/Cozy-Wall-Foam-Insulation-21.jpg", imageAlt:"Injection Spray Foam Insulation"}
            ]}
            sliderId="completed-projects-commercial"
          />
</motion.div>

<motion.div
        variants={fadeUpVariants}
        custom={.2} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
          <ContentBlock
        sectionClassName="pt-[50px]"
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
        background={
          <>
          <div className="absolute top-[-100px]" id="videos"></div>
          </>
        } 
        >
        <h2 className="text-accent text-6xl font-proxima-thin">VIDEOS</h2>
      </ContentBlock>
        </motion.div>

        <section className="py-8">
      <div className="w-full py-3 px-4">
  <div className="flex flex-wrap justify-center relative">
    {/* start of col */}
    <div className="w-full lg:w-1/6 md:w-1/3 w-full text-center px-4">
    <motion.div
        variants={fadeUpVariants}
        custom={.2} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
<div className="w-full lg:h-[315px] md:h-[415px] h-[585px] md:my-0 my-4 overflow-hidden relative">
  <video
    playsInline
    autoPlay
    muted
    loop
    className="w-full h-full object-cover object-center"
  >
    <source src="/assets/Cozy-Wall-Foam-Insulation-Video-01.mp4#t=0.5" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

  </motion.div>
    </div>
    {/* end of col */}
    {/* start of col */}
    <div className="w-full lg:w-1/6 md:w-1/3 w-full text-center px-4">
    <motion.div
        variants={fadeUpVariants}
        custom={.4} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
<div className="w-full lg:h-[315px] md:h-[415px] h-[585px] md:my-0 my-4 overflow-hidden relative">
  <video
    playsInline
    autoPlay
    muted
    loop
    className="w-full h-full object-cover object-center"
  >
    <source src="/assets/Cozy-Wall-Foam-Insulation-Video-02.mp4#t=0.5" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
  </motion.div>
    </div>
    {/* end of col */}
    {/* start of col */}
    <div className="w-full lg:w-1/6 md:w-1/3 w-full text-center px-4">
    <motion.div
        variants={fadeUpVariants}
        custom={.6} // delay in seconds
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
<div className="w-full lg:h-[315px] md:h-[415px] h-[585px] md:my-0 my-4 overflow-hidden relative">
  <video
    playsInline
    autoPlay
    muted
    loop
    className="w-full h-full object-cover object-center"
  >
    <source src="/assets/Cozy-Wall-Foam-Insulation-Video-03.mp4#t=0.5" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
  </motion.div>
    </div>
    {/* end of col */}
    </div>
    </div>
    </section>

    <ContentBlock
        sectionClassName="relative py-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="md:w-3/4 w-full relative bg-[#c2c2c2] border-8 border-white pt-10 px-5"
        background={
          <>
          <div className="absolute top-[0px]" id="get-estimate"></div>
          <div className="bg-[#eeba67] absolute top-1/2 left-0 w-full h-[60%] -translate-y-1/2"></div>
          </>
        }
      >
        <h2 className="text-4xl font-aspira-thin uppercase text-center">
          Have a Question?
        </h2>
        <ContactForm />
      </ContentBlock>
<Footer />

    </>
  );
}
