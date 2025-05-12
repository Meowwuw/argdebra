"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation  } from "swiper/modules";
import Image from "next/image";

const categories = [
  { name: "PROGRAMAS DE GESTIÓN Y ADMINISTRACIÓN", image: "/categoria5.webp" },
  { name: "PROGRAMAS DE INGENIERIA", image: "/categoria2.jpg" },
  { name: "PROGRAMAS DE DERECHO", image: "/categoria3.jpg" },
  { name: "PROGRAMAS DE EDUCACIÓN", image: "/categoria4.jpg" },
  { name: "PROGRAMAS DE SALUD", image: "/categoria1.jpg" },
  { name: "PROGRAMAS TÉCNICOS", image: "/categoria6.jpg" },
];

export default function CategoryCarousel() {
  return (
    <div className="mx-auto px-4 md:px-12 w-full py-8 md:py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-2 md:px-6 text-center">
        
        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-8">
          Nuestras Principales Categorias
        </h2>

        {/* Botón "Ver más" a la derecha */}
        <div className="flex justify-end items-center mb-4">
          <button className="text-[#00AEFF] font-semibold">Ver más</button>
        </div>

        <Swiper
          // Con 1 slide en mobile, y breakpoints para aumentar
          slidesPerView={1}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={true}

          // Breakpoints de Swiper para distintos anchos:
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50, // Estilo de escritorio
            },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={400}
                  className="w-full h-[250px] md:h-[400px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-40 transition-all duration-300">
                  <h3 className="text-white text-lg md:text-xl font-bold px-4 text-center">
                    {category.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
