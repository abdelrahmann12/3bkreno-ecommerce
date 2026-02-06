"use client"
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";


// const images = [
//   "/book_n.jpg",
//   "/book_n.jpg",
//   "/book_n.jpg",
//   "/book_n.jpg",
//   "/book_n.jpg",
// ];


export default function CategorysCarousel() {
  
  return (
    // <Carousel
    //   opts={{ align: "start" }}
    //   className="w-full max-w-7xl mx-auto"
    // >
    //   <CarouselContent>
    //     {images.map((img, index) => (
    //       <CarouselItem
    //         key={index}
    //         className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
    //       >
    //         <Card className="overflow-hidden">
    //           <div className="relative aspect-square w-full">
    //             <Image
    //               src={img}
    //               alt={`product ${index}`}
    //               fill
    //               className="object-cover"
    //             />
    //           </div>
    //         </Card>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>

    //   <CarouselPrevious />
    //   <CarouselNext />
    // </Carousel>
      <Swiper
      modules={[Autoplay]}
      slidesPerView={5}
      spaceBetween={20}
      loop
      autoplay={{ delay: 5000 }}
    >
      <SwiperSlide className=" cursor-pointer">Ramadan</SwiperSlide>
      <SwiperSlide>Puzzle</SwiperSlide>
      <SwiperSlide>Lego</SwiperSlide>
      <SwiperSlide>FamilyGames</SwiperSlide>
      <SwiperSlide>Art & Craft</SwiperSlide>
    </Swiper>
    
  );
}
