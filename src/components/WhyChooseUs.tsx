import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section className="w-full py-8 md:py-16 bg-[#E7F7FF]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-14 text-center">
          ¿Por qué elegir <span className='text-[#00AEFF]'>ICAP ARGDEBRA</span>?
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Contenedor de la imagen */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/choice1.png"
                alt="Why Choose Us"
                fill
                priority
                className="object-cover rounded-lg transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>

          {/* Contenedor del texto */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-[#00AEFF] mb-3 md:mb-4">
              ¿Quienes somos?            </h3>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              El Instituto de capacitación y Actualización Profesional – ICAP ARGDEBRA es un espacio académico que contribuye al fortalecimiento de las competencias de profesionales en todas las áreas, está especializada en la formación académica a modo general, Teniendo como objetivos la enseñanza, la investigación y, en particular por medio de la educación a distancia, a través de diversas capacitaciones y actualizaciones, teniendo como meta el poder llegar a los usuarios interesados para formarlos a nivel profesional.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="px-6 py-3 text-white bg-[#00AEFF] rounded-md 
                               hover:bg-[#0277AD] transition-all duration-300 
                               transform hover:scale-105 shadow-md">
                Saber más
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}