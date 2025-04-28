"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FiFileText, FiExternalLink, FiChevronDown, FiSearch } from 'react-icons/fi';

export default function Convenios() {
  const [activeTab, setActiveTab] = useState('todos');
  const [expandedResolution, setExpandedResolution] = useState<number | null>(null);

  interface Resolucion {
    id: number;
    universidad: string;
    titulo: string;
    fecha: string;
    descripcion: string;
    imagen: string;
    pdf: string;
  }

  // Lista de convenios/resoluciones
  const resoluciones: Resolucion[] = [
    {
      id: 1,
      universidad: 'AGUNT',
      titulo: 'Resolución N° 0123-2023-AGUNT',
      fecha: '15/03/2023',
      descripcion: 'Convenio marco de cooperación interinstitucional para la certificación de programas de capacitación profesional.',
      imagen: '/convenios/agunt-1.jpg',
      pdf: '/documentos/resolucion-agunt-1.pdf'
    },
    {
      id: 2,
      universidad: 'AGUNT',
      titulo: 'Resolución N° 0235-2023-AGUNT',
      fecha: '27/06/2023',
      descripcion: 'Autorización para el desarrollo de programas de especialización y diplomados con certificación universitaria.',
      imagen: '/convenios/agunt-2.jpg',
      pdf: '/documentos/resolucion-agunt-2.pdf'
    },
    {
      id: 3,
      universidad: 'AGUNT',
      titulo: 'Resolución N° 0356-2024-AGUNT',
      fecha: '10/01/2024',
      descripcion: 'Renovación y ampliación del convenio de cooperación académica para cursos de actualización profesional.',
      imagen: '/convenios/agunt-3.jpg',
      pdf: '/documentos/resolucion-agunt-3.pdf'
    },
    {
      id: 4,
      universidad: 'UNAP',
      titulo: 'Resolución N° 2145-2023-UNAP',
      fecha: '05/05/2023',
      descripcion: 'Convenio específico para la realización de programas académicos con certificación universitaria.',
      imagen: '/convenios/unap-1.jpg',
      pdf: '/documentos/resolucion-unap-1.pdf'
    },
    {
      id: 5,
      universidad: 'UNAP',
      titulo: 'Resolución N° 3567-2023-UNAP',
      fecha: '18/11/2023',
      descripcion: 'Acuerdo de colaboración académica para la certificación de cursos y programas de especialización profesional.',
      imagen: '/convenios/unap-2.jpg',
      pdf: '/documentos/resolucion-unap-2.pdf'
    }
  ];

  // Filtrar resoluciones según la pestaña activa
  const filteredResolutions = activeTab === 'todos' 
    ? resoluciones 
    : resoluciones.filter(res => res.universidad === activeTab);

  // Función para alternar la expansión de una resolución
  const toggleResolution = (id: number) => {
    setExpandedResolution(expandedResolution === id ? null : id);
  };

  return (
    <>
      <Head>
        <title>Convenios | Instituto de Capacitación y Actualización Profesional</title>
        <meta name="description" content="Conoce nuestros convenios y acreditaciones con universidades que respaldan nuestros certificados y programas académicos." />
      </Head>

      <main className="min-h-screen bg-gray-50 ">
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/header-background.jpg" 
            alt="Fondo de convenios institucionales"
            fill
            style={{objectFit: 'cover'}}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-[#00AEFF]/80"></div>
        </div>
        
        {/* Contenido del banner */}
        <div className="relative container mx-auto px-14 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Convenios Institucionales</h1>
          <p className="text-white text-lg md:text-xl max-w-2xl drop-shadow-md">
            Resoluciones que acreditan nuestra capacidad para emitir certificados avalados por prestigiosas universidades.
          </p>
        </div>
      </div>

        {/* Contenido Principal */}
        <div className="container mx-auto px-4 py-12">
          {/* Introducción */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gray-600">
              En el Instituto de Capacitación y Actualización Profesional, contamos con el respaldo oficial de prestigiosas 
              universidades que avalan la calidad académica de nuestros programas. Estas acreditaciones nos permiten 
              emitir certificados con valor oficial reconocido por estas instituciones educativas.
            </p>
          </div>

          {/* Tabs de filtrado */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm bg-white">
              <button
                onClick={() => setActiveTab('todos')}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                  activeTab === 'todos' 
                    ? 'bg-[#00AEFF] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveTab('AGUNT')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'AGUNT' 
                    ? 'bg-[#00AEFF] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                AGUNT (3)
              </button>
              <button
                onClick={() => setActiveTab('UNAP')}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                  activeTab === 'UNAP' 
                    ? 'bg-[#00AEFF] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                UNAP (2)
              </button>
            </div>
          </div>

          {/* Listado de Resoluciones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResolutions.map((resolucion) => (
              <div 
                key={resolucion.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-60 bg-gray-200">
                  <div className="absolute top-0 right-0 bg-[#00AEFF] text-white px-3 py-1 text-sm font-medium z-10">
                    {resolucion.universidad}
                  </div>
                  {/* Aquí iría la imagen real - esta es solo un placeholder */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <FiFileText size={60} className="text-gray-400" />
                    <span className="sr-only">Imagen del documento {resolucion.titulo}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{resolucion.titulo}</h3>
                    <span className="text-sm text-gray-500">{resolucion.fecha}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {resolucion.descripcion}
                  </p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <button 
                      onClick={() => toggleResolution(resolucion.id)}
                      className="flex items-center text-[#00AEFF] hover:text-blue-700"
                    >
                      <span>Más detalles</span>
                      <FiChevronDown 
                        className={`ml-1 transition-transform ${expandedResolution === resolucion.id ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    <a 
                      href={resolucion.pdf} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-50 text-[#00AEFF] rounded-md hover:bg-blue-100"
                    >
                      <FiExternalLink className="mr-2" />
                      <span>Ver documento</span>
                    </a>
                  </div>
                  
                  {/* Contenido expandible */}
                  {expandedResolution === resolucion.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="font-medium text-gray-800 mb-2">Información adicional</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Vigencia: 3 años a partir de la fecha de emisión</li>
                        <li>• Alcance: Nacional</li>
                        <li>• Tipo: Convenio de certificación académica</li>
                        <li>• Departamentos académicos: Todos</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Sección de consulta */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">¿Necesitas verificar la autenticidad de un certificado?</h2>
              <p className="text-gray-600">
                Puedes consultar la validez de cualquier certificado emitido por nuestro instituto
                ingresando el código de verificación.
              </p>
            </div>
            
            <div className="max-w-lg mx-auto">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Ingresa el código de verificación"
                  className="flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00AEFF] focus:border-transparent"
                />
                <button className="bg-[#00AEFF] text-white px-5 py-3 rounded-r-md hover:bg-blue-600 flex items-center">
                  <FiSearch className="mr-2" />
                  <span>Verificar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}