"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


function GoogleReviews() {
const reviews = [
    {
        name:"Rachel M.",
        body:"We were tired of cold drafts and high heating bills. Cozy Wall Foam came out, explained everything clearly, and had the job done in a day. Our home feels warmer, quieter, and much more comfortable!",
        job_title:"Homeowner",
    },
    {
        name:"Marcus T.",
        body:"Professional, on time, and clean. Cozy Wall Foam insulated our retail space and we saw a noticeable difference in our energy usage right away. Highly recommend them for commercial work.",
        job_title:"Store Owner",
    },
    {
        name:"Lindsey P.",
        body:"From the free estimate to the final cleanup, Cozy Wall Foam exceeded our expectations. No mess, no hassle! just amazing results. Our older house now feels brand new.",
        job_title:"Renovation Client",
    },
    {
        name:"Erik S.",
        body:"We manage several municipal buildings and Cozy Wall Foam helped us meet energy codes fast. Their team was responsive and efficient we will definitely be using them for future projects.",
        job_title:"Facility Manager",
    }
]

const [expandedStates, setExpandedStates] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpandedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
}

const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  // const [navigationReady, setNavigationReady] = useState(false);
  
  return (
    <>
    <section className="relative">
      <div className="absolute top-[-100px]" id="testimonials"></div>
{/* Custom Arrows */}
      <div ref={prevRef} className="swiper-button-custom-prev absolute lg:left-20 left-4 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer">
        <Image src="/photos/arrow-left-outline.png" alt="Previous" width={40} height={40} />
      </div>
      <div ref={nextRef} className="swiper-button-custom-next absolute lg:right-20 right-4 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer">
        <Image src="/photos/arrow-right-outline.png" alt="Next" width={40} height={40} />
      </div>

    <div className="gap-2 px-4 pt-[35px] bg-[var(--accent-primary)]">
        <div className="max-w-screen-lg mx-auto py-3 px-4">
  <div className="flex flex-wrap relative">
    <div className="w-full px-4">
<h2 className="text-white text-4xl font-proxima-light text-center">TESTIMONIALS</h2>
    </div>
      <div className="w-full">
        <Swiper
          loop={true}
          navigation={{
            prevEl: prevRef.current!,
            nextEl: nextRef.current!,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          spaceBetween={0}
          autoplay={true}
          modules={[Navigation, Pagination, Autoplay]}
        >
         {reviews.map((review, index) => {
  const text = review.body || "No review text available";
  const isLongText = text.length > 200;
  const isExpanded = expandedStates[index] || false;

  return (
    <SwiperSlide key={index} className="w-full">
      <div className="p-6">
        <div className="flex gap-4 mb-4">
          <Image
            src={"/photos/review-quotes.png"}
            alt={`${review.name}'s profile`}
            className="w-6 h-6 rounded-full object-contain"
            width={48}
            height={48}
          />
          <div>
            <p className="text-sm text-[#acacac] font-proxima">
          {isExpanded ? text : `${text.slice(0, 200)}...`}
          {isLongText && (
            <button onClick={() => toggleExpand(index)} className="ml-2 text-blue-500">
              <strong>{isExpanded ? "Read Less" : "Read More"}</strong>
            </button>
          )}
        </p>
            <h3 className="font-semibold text-[#cccccc]">{review.name}</h3>
            <p className="text-sm text-[#acacac]">{review.job_title}</p>
          </div>
        </div>

        
      </div>
    </SwiperSlide>
  );
})}

        </Swiper>
      </div>
    </div>

    </div>
    </div>
    </section>
    </>
  );
}

export default GoogleReviews;
