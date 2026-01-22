"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonSquare from "@/app/components/buttons/btn-square";


function GoogleReviews() {
const reviews = [
    {
        name:"Robert McAllister",
        body:"Zack, and his team of professionals were outstanding. Great customer service with full awareness of every aspect of the project communicated well throughout. The foam installed gave us a 40% reduction in the blower door CFM test! Clean, organized and efficient, the team left my home exactly the way it was before they showed up, but now it is more efficient and quiet! Thank you!",
        job_title:"Homeowner",
    },
    {
        name:"Dawn Coker",
        body:"WELL worth the read! Customer service ? This company is right on point! From Zack and Amy to the rest of their team, wow! Until I found this company, I had an awful and long time getting one to return my calls or come out for an estimate. I saw an ad, left a message on a Sunday, they came out the next day! Before Erik left he gave me an estimate for the walls from (Cozy Walls Insulation.) They were out here the following week to complete the job! I have HORRIBLE allergies that can cause my eyes to swell shut to causing vertigo. I was concerned that the smell of foam spray would be an issue. Amy, Cozy Walls said they would come out to try a wall to see how it went. If it was ok, complete the job, if not, we would figure something out. To me this is a company that truly cares about their customers! They went above and beyond from start to finish. I would recommend them to anyone!",
        job_title:"Homeowner",
    },
    {
        name:"James Leonard",
        body:"Amy and Zach, thank you for being so easy to work with and how well your company does business. It was a pleasure working with you. You Zach and all your employees were great..I was very impressed with wow they handled this project. Our home feels so much more comfortable now that it's getting colder, warmer, alot quieter and the furnace doesn't run as much, thank you..feel free to use this review on your website",
        job_title:"Homeowner",
    },
    {
        name:"Rachel M.",
        body:"We were tired of cold drafts and high heating bills. Cozy Wall Foam came out, explained everything clearly, and had the job done in a day. Our home feels warmer, quieter, and much more comfortable!",
        job_title:"Homeowner",
    },
    {
    name: "Tom R.",
    body: "Cozy Wall Foam insulated our house and the difference was immediate. The drafts are gone and our heating system isn't working nearly as hard. Great team — clean, fast, and super professional.",
    job_title: "Homeowner"
},
    {
        name:"Lindsey P.",
        body:"From the free estimate to the final cleanup, Cozy Wall Foam exceeded our expectations. No mess, no hassle! just amazing results. Our older house now feels brand new.",
        job_title:"Renovation Client",
    },
{
    name: "Danielle S.",
    body: "We used Cozy Wall Foam for our family's older home. Their team was prompt, respectful, and made the whole place feel more solid and quiet. I'd recommend them to any homeowner.",
    job_title: "Home Renovator"
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

    <div className="gap-2 px-4 pt-[35px] pb-[35px] bg-[var(--accent-primary)]">
        <div className="max-w-screen-lg mx-auto px-4">
  <div className="flex flex-wrap relative">
    <div className="w-full">
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
    <div className="w-full text-center">
      <ButtonSquare
              className="" // Adding additional class
              style={{ }} // Adding inline style
              id="" // Adding an ID
              href="https://g.page/r/CXd4pXblTJcPEBM/review" // Dynamic href
              target="_blank" // Open in new tab
            >
              Leave a Review
            </ButtonSquare>
    </div>

    </div>
    </div>
    </section>
    </>
  );
}

export default GoogleReviews;
