import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    "Profesionales especializados en diversas áreas",
    "Formación académica a distancia de calidad",
    "Metodología orientada a resultados",
    "Enfoque en investigación y actualización constante"
  ];

  return (
    <section className="w-full py-10 md:py-16 bg-[#E7F7FF]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            ¿Por qué elegir <span className="text-[#00AEFF]">ICAP ARGDEBRA</span>?
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Formamos profesionales de excelencia a través de metodologías innovadoras
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Contenedor de la imagen */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
              <Image
                src="/choice1.png"
                alt="ICAP ARGDEBRA - Educación de calidad"
                fill
                priority
                className="object-cover rounded-lg transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>

          {/* Contenedor del texto */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#00AEFF] mb-2">
                Excelencia académica a tu alcance
              </h3>
              <p className="text-gray-600 text-base">
                Somos un instituto especializado en capacitación profesional que impulsa el desarrollo de competencias mediante educación a distancia de alta calidad.
              </p>
            </div>
            
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-[#00AEFF] h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button className="px-6 py-3 text-white bg-[#00AEFF] rounded-md 
                             hover:bg-[#0277AD] transition-all duration-300 
                             font-medium shadow-md flex items-center gap-2">
                Conoce nuestros programas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}