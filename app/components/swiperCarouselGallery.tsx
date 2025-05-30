"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export interface Slide {
  imageSrc: string;
  imageAlt?: string;
}

export interface SwiperCarouselProps {
  slides: Slide[];
  sliderId?: string;
}

const SwiperCarouselGallery: React.FC<SwiperCarouselProps> = ({ slides }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    setNavigationReady(true);
  }, []);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const lightboxSlides = slides.map((slide) => ({
    src: slide.imageSrc,
    alt: slide.imageAlt || "Slide Image",
  }));

  return (
    <div className="relative">
      {/* Custom Arrows */}
      <div ref={prevRef} className="swiper-button-custom-prev absolute left-4 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer">
        <Image src="/photos/arrow-left.png" alt="Previous" width={40} height={40} />
      </div>
      <div ref={nextRef} className="swiper-button-custom-next absolute right-4 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer">
        <Image src="/photos/arrow-right.png" alt="Next" width={40} height={40} />
      </div>

      {navigationReady && (
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={{
            prevEl: prevRef.current!,
            nextEl: nextRef.current!,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 5000 }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper !static overflow-hidden"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt || "Slide Image"}
                  width={300}
                  height={500}
                  className="w-full lg:h-[200px] md:h-[300px] h-[350px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxSlides}
          index={photoIndex}
        />
      )}
    </div>
  );
};

export default SwiperCarouselGallery;
