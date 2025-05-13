'use client';

import { useState } from 'react';
import Image from 'next/image';

type Curso = {
  id: number;
  titulo: string;
  categoria: string;
  imagen: string;
};

const cursosData: Curso[] = [
  { id: 1, titulo: 'ADMINISTRACIÓN DE EMPRESAS', categoria: 'Administración', imagen: '/administracion.jpg' },
  { id: 4, titulo: 'ADMINISTRACIÓN Y GESTIÓN PÚBLICA', categoria: 'Administración', imagen: '/administracion2.jpg' },
  { id: 16, titulo: 'CONTABILIDAD', categoria: 'Contabilidad', imagen: '/contabilidad.jpg' },
  { id: 17, titulo: 'PLANIFICACIÓN Y PRESUPUESTO PÚBLICO', categoria: 'Economía', imagen: '/planificacion.jpg' },
  { id: 33, titulo: 'SALUD OCUPACIONAL', categoria: 'Salud', imagen: '/saludOcupacional.jpg' },
  { id: 38, titulo: 'HEMOTERAPIA Y BANCO DE SANGRE', categoria: 'Salud', imagen: '/hemoterapia.jpg' },
  { id: 43, titulo: 'EMERGENCIAS OBSTÉTRICAS', categoria: 'Salud', imagen: '/obstetricas.jpg' },
  { id: 50, titulo: 'ENFERMERÍA NEONATAL Y PEDIÁTRICA', categoria: 'Salud', imagen: '/neonatal.jpg' },
  { id: 52, titulo: 'ENFERMERÍA TÉCNICA', categoria: 'Salud', imagen: '/enfermeria.jpg' },
];

export default function Cursos() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');

  const cursosFiltrados = cursosData
    .filter((curso) =>
      curso.titulo.toLowerCase().includes(busqueda.toLowerCase())
    )
    .filter((curso) =>
      categoriaSeleccionada === 'todos' || curso.categoria === categoriaSeleccionada
    );

  const categorias = Array.from(new Set(cursosData.map((c) => c.categoria)));

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Explora Nuestros Cursos
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Buscar cursos..."
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <select
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          {cursosFiltrados.map((curso) => {
            const esSalud = curso.categoria === 'Salud';
            return (
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
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {curso.titulo}
                  </h3>
                  <p className="text-gray-500 mb-2">
                    Duración: 12 meses<br />
                    1200 horas<br />
                    {esSalud ? '36 créditos' : '24 créditos'}
                  </p>
                </div>
              </div>
            );
          })}

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
