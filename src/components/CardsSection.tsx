"use client";

import { useState } from 'react';
import { FaLightbulb, FaCompass, FaGraduationCap, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function MisionVisionSection() {
  const [activeTab, setActiveTab] = useState('mision');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-[#F9F9F9]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Quiénes Somos</h2>
          <div className="w-20 h-1 bg-[#00AEFF] mx-auto mt-4"></div>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'mision' 
                  ? "bg-[#00AEFF] text-white shadow-md" 
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab('mision')}
            >
              Nuestra Misión
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'vision' 
                  ? "bg-[#00AEFF] text-white shadow-md" 
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab('vision')}
            >
              Nuestra Visión
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="max-w-5xl mx-auto">
          {/* Misión */}
          {activeTab === 'mision' && (
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="flex flex-col justify-center"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Misión</h3>
                <p className="text-gray-600 mb-6">
                  Promovemos la especialización profesional mediante capacitación actualizada y de calidad con un enfoque práctico. Preparamos a nuestros alumnos para destacar en el mundo laboral actual, sin perder la ética e innovación en los procesos de enseñanza.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#00AEFF]">
                  <p className="text-gray-700 italic">
                    "Nuestro compromiso es la excelencia educativa y el desarrollo profesional de calidad."
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  variants={itemVariants}
                >
                  <div className="mb-4 text-[#00AEFF] flex justify-center">
                    <FaGraduationCap size={40} />
                  </div>
                  <h4 className="font-semibold text-gray-800">Capacitación especializada</h4>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  variants={itemVariants}
                >
                  <div className="mb-4 text-[#00AEFF] flex justify-center">
                    <FaLightbulb size={40} />
                  </div>
                  <h4 className="font-semibold text-gray-800">Innovación educativa</h4>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  variants={itemVariants}
                >
                  <div className="mb-4 text-[#00AEFF] flex justify-center">
                    <FaHandshake size={40} />
                  </div>
                  <h4 className="font-semibold text-gray-800">Ética profesional</h4>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  variants={itemVariants}
                >
                  <div className="mb-4 text-[#00AEFF] flex justify-center">
                    <FaCompass size={40} />
                  </div>
                  <h4 className="font-semibold text-gray-800">Enfoque práctico</h4>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
          
          {/* Visión */}
          {activeTab === 'vision' && (
            <motion.div
              className="flex flex-col md:flex-row gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="md:w-1/2 bg-white rounded-xl overflow-hidden shadow-lg"
                variants={itemVariants}
              >
                <div className="h-48 bg-gradient-to-r from-[#005ea6] to-[#00AEFF] flex items-center justify-center">
                  <span className="text-6xl text-white">
                    <FaLightbulb />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Visión</h3>
                  <p className="text-gray-600">
                    Ser el instituto con más reconocimiento a nivel nacional, líder en especialización y capacitación profesional, destacándonos por:
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2"
                variants={containerVariants}
              >
                <motion.div 
                  className="bg-white p-5 rounded-lg shadow-md mb-4 border-l-4 border-[#00AEFF] hover:shadow-lg transition-all"
                  variants={itemVariants}
                >
                  <h4 className="font-semibold text-gray-800">Alcance nacional</h4>
                  <p className="text-gray-600 text-sm">Llegando a las zonas más alejadas del país</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-5 rounded-lg shadow-md mb-4 border-l-4 border-[#00AEFF] hover:shadow-lg transition-all"
                  variants={itemVariants}
                >
                  <h4 className="font-semibold text-gray-800">Calidad metodológica</h4>
                  <p className="text-gray-600 text-sm">Metodología diferenciada y de alta calidad</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-5 rounded-lg shadow-md mb-4 border-l-4 border-[#00AEFF] hover:shadow-lg transition-all"
                  variants={itemVariants}
                >
                  <h4 className="font-semibold text-gray-800">Alianzas estratégicas</h4>
                  <p className="text-gray-600 text-sm">Con universidades, colegios profesionales y entidades públicas y privadas</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-5 rounded-lg shadow-md border-l-4 border-[#00AEFF] hover:shadow-lg transition-all"
                  variants={itemVariants}
                >
                  <h4 className="font-semibold text-gray-800">Alto nivel académico</h4>
                  <p className="text-gray-600 text-sm">Programas de interés y utilidad para los sectores productivos y de servicios</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}