// src/app/cursos/page.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// Tipos para nuestros cursos
interface Curso {
  id: string;
  titulo: string;
  categoria: string;
  nivel: string;
  duracion: string;
  precio: number;
  valoracion: number;
  estudiantes: number;
  imagen: string;
  instructor: string;
  descripcionCorta: string;
}

// Datos de ejemplo para mostrar inicialmente
const cursosDummy: Curso[] = [
  {
    id: "1",
    titulo: "Fundamentos de Contabilidad",
    categoria: "Contabilidad",
    nivel: "Principiante",
    duracion: "40 horas",
    precio: 99.9,
    valoracion: 4.7,
    estudiantes: 324,
    imagen: "/images/cursos/contabilidad.jpg",
    instructor: "Dr. Juan Pérez",
    descripcionCorta:
      "Aprende los conceptos fundamentales de la contabilidad aplicada a empresas.",
  },
  {
    id: "2",
    titulo: "Gestión de Proyectos Avanzado",
    categoria: "Gestión",
    nivel: "Avanzado",
    duracion: "60 horas",
    precio: 149.9,
    valoracion: 4.9,
    estudiantes: 218,
    imagen: "/images/cursos/gestion.jpg",
    instructor: "Dra. María García",
    descripcionCorta:
      "Metodologías ágiles y tradicionales para la gestión efectiva de proyectos complejos.",
  },
  {
    id: "3",
    titulo: "Diseño de Estructuras",
    categoria: "Ingeniería",
    nivel: "Intermedio",
    duracion: "50 horas",
    precio: 129.9,
    valoracion: 4.5,
    estudiantes: 176,
    imagen: "/images/cursos/ingenieria.jpg",
    instructor: "Ing. Carlos López",
    descripcionCorta:
      "Fundamentos del diseño estructural para edificaciones seguras y eficientes.",
  },
  {
    id: "4",
    titulo: "Fundamentos de Docencia Virtual",
    categoria: "Docencia",
    nivel: "Principiante",
    duracion: "30 horas",
    precio: 89.9,
    valoracion: 4.8,
    estudiantes: 412,
    imagen: "/images/cursos/docencia.jpg",
    instructor: "Prof. Ana Martínez",
    descripcionCorta:
      "Metodologías efectivas para la enseñanza en entornos virtuales.",
  },
  {
    id: "5",
    titulo: "Administración de Empresas",
    categoria: "Administración",
    nivel: "Intermedio",
    duracion: "45 horas",
    precio: 119.9,
    valoracion: 4.6,
    estudiantes: 256,
    imagen: "/images/cursos/administracion.jpg",
    instructor: "Dr. Roberto Sánchez",
    descripcionCorta:
      "Estrategias y herramientas para la administración efectiva de empresas.",
  },
  {
    id: "6",
    titulo: "Construcción Sostenible",
    categoria: "Ingeniería",
    nivel: "Avanzado",
    duracion: "55 horas",
    precio: 159.9,
    valoracion: 4.7,
    estudiantes: 198,
    imagen: "/images/cursos/construccion.jpg",
    instructor: "Ing. Laura Torres",
    descripcionCorta:
      "Técnicas y materiales para construir de manera responsable con el medio ambiente.",
  },
];

// Categorías disponibles (se pueden extraer dinámicamente de los cursos)
const categorias = [
  "Todas",
  "Contabilidad",
  "Gestión",
  "Ingeniería",
  "Docencia",
  "Administración",
];

// Niveles disponibles
const niveles = ["Todos", "Principiante", "Intermedio", "Avanzado"];

export default function CursosPage() {
  const [cursos, setCursos] = useState<Curso[]>(cursosDummy);
  const [filteredCursos, setFilteredCursos] = useState<Curso[]>(cursosDummy);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [nivelSeleccionado, setNivelSeleccionado] = useState("Todos");

  // Efecto para aplicar filtros cuando cambien los criterios
  useEffect(() => {
    let resultado = cursos;

    // Filtrar por búsqueda
    if (busqueda) {
      resultado = resultado.filter(
        (curso) =>
          curso.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
          curso.descripcionCorta
            .toLowerCase()
            .includes(busqueda.toLowerCase()) ||
          curso.instructor.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (categoriaSeleccionada !== "Todas") {
      resultado = resultado.filter(
        (curso) => curso.categoria === categoriaSeleccionada
      );
    }

    // Filtrar por nivel
    if (nivelSeleccionado !== "Todos") {
      resultado = resultado.filter(
        (curso) => curso.nivel === nivelSeleccionado
      );
    }

    setFilteredCursos(resultado);
  }, [busqueda, categoriaSeleccionada, nivelSeleccionado, cursos]);

  // Función para renderizar estrellas según valoración
  const renderEstrellas = (valoracion: number) => {
    const estrellas = [];
    const entero = Math.floor(valoracion);
    const decimal = valoracion - entero;

    // Estrellas completas
    for (let i = 0; i < entero; i++) {
      estrellas.push(
        <svg
          key={`star-${i}`}
          className="w-4 h-4 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Media estrella si es necesario
    if (decimal >= 0.5) {
      estrellas.push(
        <svg
          key="star-half"
          className="w-4 h-4 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Estrellas vacías hasta completar 5
    while (estrellas.length < 5) {
      estrellas.push(
        <svg
          key={`star-empty-${estrellas.length}`}
          className="w-4 h-4 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return estrellas;
  };

  return (
    <>
      <Head>
        <title>
          Nuestros Cursos | Instituto de Capacitación y Actualización Profesional
        </title>
        <meta
          name="description"
          content="Conoce nuestros convenios y acreditaciones con universidades que respaldan nuestros certificados y programas académicos."
        />
      </Head>
      <main className="min-h-screen bg-gray-50 ">
        <div className="relative w-full h-64 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/header-background.jpg"
              alt="Fondo de convenios institucionales"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-[#00AEFF]/80"></div>
          </div>

          {/* Contenido del banner */}
          <div className="relative container mx-auto px-14 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
              Nuestros Cursos
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Barra de búsqueda */}
              <div className="md:col-span-2">
                <label
                  htmlFor="busqueda"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Buscar cursos
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="busqueda"
                    className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm border"
                    placeholder="Buscar por título, descripción o instructor"
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
              <div>
                <label
                  htmlFor="categoria"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Categoría
                </label>
                <select
                  id="categoria"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
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

              {/* Filtro por nivel */}
              <div>
                <label
                  htmlFor="nivel"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nivel
                </label>
                <select
                  id="nivel"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={nivelSeleccionado}
                  onChange={(e) => setNivelSeleccionado(e.target.value)}
                >
                  {niveles.map((nivel) => (
                    <option key={nivel} value={nivel}>
                      {nivel}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Resultados */}
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-900">
              {filteredCursos.length}{" "}
              {filteredCursos.length === 1
                ? "curso encontrado"
                : "cursos encontrados"}
            </h2>
          </div>

          {/* Grid de cursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCursos.map((curso) => (
              <Link href={`/cursos/${curso.id}`} key={curso.id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 bg-gray-200 relative">
                    {/* Aquí iría la imagen del curso, por ahora usamos un placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <span className="text-sm">Imagen del curso</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium mb-2">
                        {curso.categoria}
                      </span>
                      <span className="text-sm text-gray-500">
                        {curso.nivel}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {curso.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {curso.descripcionCorta}
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      {curso.instructor}
                    </p>

                    <div className="flex items-center mb-2">
                      <div className="flex mr-1">
                        {renderEstrellas(curso.valoracion)}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({curso.valoracion.toFixed(1)})
                      </span>
                      <span className="mx-2 text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">
                        {curso.estudiantes} estudiantes
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-blue-700">
                        S/. {curso.precio.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-600">
                        {curso.duracion}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mensaje cuando no hay resultados */}
          {filteredCursos.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No se encontraron cursos
              </h3>
              <p className="text-gray-600">
                Intenta con diferentes términos de búsqueda o filtros
              </p>
            </div>
          )}

          {/* Paginación (para implementación futura) */}
          <div className="mt-8 flex justify-center">
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Anterior</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Siguiente</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
