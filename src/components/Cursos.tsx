'use client'; 

import { useState } from 'react';
import Image from 'next/image';

type Curso = {
  id: number;
  titulo: string;
  categoria: string;
  descripcion: string;
  duracion: string;
  estudiantes: string;
  precio: number;
  rating: number;
  imagen: string;
};

const cursosData: Curso[] = [
  {
    id: 1,
    titulo: 'Docencia',
    categoria: 'Docencia',
    descripcion: 'Domina los fundamentos de la docencia',
    duracion: '6 semanas',
    estudiantes: '1.5k estudiantes',
    precio: 30.5,
    rating: 4.5,
    imagen: '/cursos/marketing.jpg',
  },
  {
    id: 2,
    titulo: 'Docencia',
    categoria: 'Docencia',
    descripcion: 'Domina los fundamentos de la docencia',
    duracion: '6 semanas',
    estudiantes: '1.5k estudiantes',
    precio: 30.5,
    rating: 4.5,
    imagen: '/cursos/marketing.jpg',
  },
  {
    id: 3,
    titulo: 'Docencia',
    categoria: 'Docencia',
    descripcion: 'Domina los fundamentos de la docencia',
    duracion: '6 semanas',
    estudiantes: '1.5k estudiantes',
    precio: 30.5,
    rating: 4.5,
    imagen: '/cursos/marketing.jpg',
  },
  {
    id: 4,
    titulo: 'Docencia',
    categoria: 'Docencia',
    descripcion: 'Domina los fundamentos de la docencia',
    duracion: '6 semanas',
    estudiantes: '1.5k estudiantes',
    precio: 30.5,
    rating: 4.5,
    imagen: '/cursos/marketing.jpg',
  },
  {
    id: 5,
    titulo: 'Docencia',
    categoria: 'Docencia',
    descripcion: 'Domina los fundamentos de la docencia',
    duracion: '6 semanas',
    estudiantes: '1.5k estudiantes',
    precio: 30.5,
    rating: 4.5,
    imagen: '/cursos/marketing.jpg',
  },
  {
    id: 6,
    titulo: 'Docencia',
    categoria: 'Docencia',
    descripcion: 'Domina los fundamentos de la docencia',
    duracion: '6 semanas',
    estudiantes: '1.5k estudiantes',
    precio: 30.5,
    rating: 4.5,
    imagen: '/cursos/marketing.jpg',
  },
];

export default function Cursos() {
    const [busqueda, setBusqueda] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
  
    const cursosFiltradosPorTexto = cursosData.filter((curso) =>
      curso.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );
  
    const cursosFiltrados = cursosFiltradosPorTexto.filter((curso) =>
      categoriaSeleccionada === 'todos'
        ? true
        : curso.categoria === categoriaSeleccionada
    );
  
    const categorias = Array.from(new Set(cursosData.map((c) => c.categoria)));
  
    return (
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="flex flex-col items-center md:flex-row md:justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Explora Nuestros Cursos Populares
            </h2>
  
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 md:mt-0">
              
              <input
                type="text"
                placeholder="Buscar cursos..."
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
  
              <select
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={categoriaSeleccionada}
                onChange={(e) => setCategoriaSeleccionada(e.target.value)}
              >
                <option value="todos">Todas las Categorías</option>
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cursosFiltrados.map((curso) => (
              <div
                key={curso.id}
                className="rounded-lg shadow hover:shadow-md transition-shadow bg-white overflow-hidden"
              >
                <div className="w-full h-40 relative">
                  <Image
                    src={curso.imagen}
                    alt={curso.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
  
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {curso.titulo}
                    </h3>
                    <p className="text-orange-500 font-bold text-md">
                      ${curso.precio}
                    </p>
                  </div>
  
                  <p className="text-gray-500 mb-2">
                    {curso.descripcion}
                  </p>
  
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{curso.duracion}</span>
                    <span>{curso.estudiantes}</span>
                    <span className="text-yellow-400 flex items-center">
                      &#9733; {curso.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
  
            {cursosFiltrados.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                No se encontraron cursos para tu búsqueda o filtro.
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }
  