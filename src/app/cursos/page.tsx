// src/app/cursos/page.tsx
"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

// Tipos para nuestros cursos
interface Curso {
  id: string;
  titulo: string;
  categoria: string;
  imagen: string;
}

// Datos de los programas ICAP ARGDEBRA
const cursosData: Curso[] = [
  {
    id: "1",
    titulo: "ADMINISTRACIÓN DE EMPRESAS",
    categoria: "Administración",
    imagen: "/images/cursos/administracion.jpg",
  },
  {
    id: "2",
    titulo: "ADMINISTRACIÓN Y GESTIÓN PÚBLICA",
    categoria: "Administración",
    imagen: "/images/cursos/administracion-publica.jpg",
  },
  {
    id: "3",
    titulo: "CONTABILIDAD",
    categoria: "Contabilidad",
    imagen: "/images/cursos/contabilidad.jpg",
  },
  {
    id: "4",
    titulo: "PLANIFICACIÓN Y PRESUPUESTO PÚBLICO",
    categoria: "Economía",
    imagen: "/images/cursos/planificacion.jpg",
  },
  {
    id: "5",
    titulo: "SALUD OCUPACIONAL",
    categoria: "Salud",
    imagen: "/images/cursos/salud-ocupacional.jpg",
  },
  {
    id: "6",
    titulo: "HEMOTERAPIA Y BANCO DE SANGRE",
    categoria: "Salud",
    imagen: "/images/cursos/hemoterapia.jpg",
  },
  {
    id: "7",
    titulo: "EMERGENCIAS OBSTÉTRICAS",
    categoria: "Salud",
    imagen: "/images/cursos/obstetricas.jpg",
  },
  {
    id: "8",
    titulo: "ENFERMERÍA NEONATAL Y PEDIÁTRICA",
    categoria: "Salud",
    imagen: "/images/cursos/neonatal.jpg",
  },
  {
    id: "9",
    titulo: "ENFERMERÍA TÉCNICA",
    categoria: "Salud",
    imagen: "/images/cursos/enfermeria.jpg",
  },
];

// Categorías disponibles
const categorias = [
  "Todas",
  "Administración",
  "Contabilidad",
  "Economía",
  "Salud",
];

export default function CursosPage() {
  const [filteredCursos, setFilteredCursos] = useState<Curso[]>(cursosData);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  // Efecto para aplicar filtros cuando cambien los criterios
  useEffect(() => {
    let resultado = cursosData;

    // Filtrar por búsqueda
    if (busqueda) {
      resultado = resultado.filter((curso) =>
        curso.titulo.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (categoriaSeleccionada !== "Todas") {
      resultado = resultado.filter(
        (curso) => curso.categoria === categoriaSeleccionada
      );
    }

    setFilteredCursos(resultado);
  }, [busqueda, categoriaSeleccionada]);

  // Función para manejar clic en curso
  const handleCursoClick = (titulo: string) => {
    const mensaje = encodeURIComponent(
      `Hola, me interesa obtener más información sobre el programa de ${titulo}. ¿Podrían brindarme más detalles?`
    );
    const whatsappUrl = `https://wa.me/51942018158?text=${mensaje}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Head>
        <title>
          Nuestros Cursos | Instituto de Capacitación y Actualización
          Profesional
        </title>
        <meta
          name="description"
          content="Explora nuestros programas de capacitación profesional de 12 meses y 1200 horas académicas."
        />
      </Head>
      <main className="min-h-screen bg-gray-50">
        {/* Banner principal */}
        <div className="relative w-full h-64 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/header-background.jpg"
              alt="Fondo de programas de capacitación"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-[#00AEFF]/80"></div>
          </div>

          <div className="relative container mx-auto px-14 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
              Nuestros Programas
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl drop-shadow-md">
              Explora nuestra amplia selección de cursos de alta calidad
              diseñados para impulsar tu desarrollo profesional
            </p>
          </div>
        </div>

        {/* Sección de filtros y búsqueda */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Barra de búsqueda */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm border"
                    placeholder="Buscar programa..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Filtro por categoría */}
              <div className="w-full md:w-auto">
                <select
                  className="w-full md:w-48 pl-3 pr-10 py-2 text-base text-gray-900 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
                  value={categoriaSeleccionada}
                  onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                >
                  {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Resultados */}
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900">
              {filteredCursos.length}{" "}
              {filteredCursos.length === 1
                ? "programa disponible"
                : "programas disponibles"}
            </h2>
          </div>

          {/* Grid de cursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCursos.map((curso) => {
              const esSalud = curso.categoria === "Salud";
              return (
                <div
                  key={curso.id}
                  onClick={() => handleCursoClick(curso.titulo)}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-[#E7F7FF] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 mx-auto mb-3 bg-[#00AEFF] rounded-full flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <div className="w-24 h-2 bg-[#00AEFF] rounded-full mx-auto"></div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                        {curso.categoria}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                      {curso.titulo}
                    </h3>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Duración:</span>
                        <span>12 meses</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Horas académicas:</span>
                        <span>1200 horas</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Créditos:</span>
                        <span>{esSalud ? "36" : "24"} créditos</span>
                      </div>
                    </div>

                    <div className="text-center">
                      <span className="text-sm text-[#00AEFF] font-medium hover:text-blue-700 transition-colors">
                        Click para más información →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mensaje cuando no hay resultados */}
          {filteredCursos.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.529.94-6.071 2.929M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No se encontraron programas
              </h3>
              <p className="text-gray-600">
                Intenta con diferentes términos de búsqueda o categorías
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
