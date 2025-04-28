"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Hero() {
    return (
        <main>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="w-full"
                >
                    <SwiperSlide>
                        <div className="relative h-[610px] bg-cover bg-center" style={{ backgroundImage: "url('/carrusel2.jpg')" }}>
                            <div className="absolute inset-0 bg-black opacity-40"></div> 
                            <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full">
                                <h2 className="text-4xl font-bold">Texto1</h2>
                                <p className="text-lg mt-4">Aprende habilidades clave para tu futuro</p>
                                <button className="mt-6 px-6 py-3 bg-[#00AEFF] text-white rounded-md hover:bg-[#0277AD] transition-colors">
                                    Más información
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative h-[610px] bg-cover bg-center" style={{ backgroundImage: "url('/carrusel1.jpg')" }}>
                            <div className="absolute inset-0 bg-black opacity-40"></div> 
                            <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full">
                                <h2 className="text-4xl font-bold">Texto2</h2>
                                <p className="text-lg mt-4">Explora el mundo de la programación</p>
                                <button className="mt-6 px-6 py-3 bg-[#00AEFF] text-white rounded-md hover:bg-[#0277AD] transition-colors">
                                    Más información
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

    
                    <SwiperSlide>
                        <div className="relative h-[610px] bg-cover bg-center" style={{ backgroundImage: "url('/carrusel3.jpg')" }}>
                            <div className="absolute inset-0 bg-black opacity-40"></div> 
                            <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full">
                                <h2 className="text-4xl font-bold">Texto3</h2>
                                <p className="text-lg mt-4">Desarrolla tu carrera en marketing digital</p>
                                <button className="mt-6 px-6 py-3 bg-[#00AEFF] text-white rounded-md hover:bg-[#0277AD] transition-colors">
                                    Más información
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </main>
    );
}
