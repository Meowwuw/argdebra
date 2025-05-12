"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const paginationStyles = `
  .swiper-pagination-bullet {
    background-color: white !important;
    opacity: 0.5;
  }
  
  .swiper-pagination-bullet-active {
    background-color: white !important;
    opacity: 1;
  }
`;

const slides = [
  {
    title: "APRENDE A TU RITMO DESDE DONDE ESTÉS",
    description: "Programas a distancia diseñados para profesionales que buscan flexibilidad",
    image: "/carrusel1.jpg",
  },
  {
    title: "COORDINADOR BIM DE PROYECTOS DE EDIFICACIÓN",
    description: "Profesional especializado que gestiona y coordina la implementación de la metodología BIM en proyectos de construcción.",
    image: "/carrusel2.jpg",
  },
  {
    title: "ADMINISTRACIÓN DE CLÍNICAS Y HOSPITALES",
    description: "Gestión estratégica de recursos para asegurar eficiencia y calidad en la atención médica.",
    image: "/carrusel3.jpg",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [activeIndex]);

  return (
    <main>
      <style>{paginationStyles}</style>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[610px] bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-[#005ea6]/60 to-[#00AEFF]/70"></div>
              
              <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4">
                {/* Animación para el título */}
                {index === activeIndex && (
                  <motion.h2
                    key={`title-${key}`}
                    className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.h2>
                )}
                
                {/* Animación para la descripción */}
                {index === activeIndex && (
                  <motion.p
                    key={`desc-${key}`}
                    className="text-lg mt-4 max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    {slide.description}
                  </motion.p>
                )}
                
                {/* Animación para el botón */}
                {index === activeIndex && (
                  <motion.button
                    key={`button-${key}`}
                    className="mt-6 px-6 py-3 bg-[#00AEFF] text-white rounded-md hover:bg-[#0277AD] transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Más información
                  </motion.button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}