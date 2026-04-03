"use client";
import React, { useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { FiSearch, FiMapPin } from "react-icons/fi";

type Promotor = {
  id: number;
  nombre: string;
  region: string;
  foto: string;
  whatsapp?: string;
  email?: string;
};

const PROMOTORES: Promotor[] = [
  {
    id: 1,
    nombre: "Pedro A. Arguelles De Bracamonte",
    region: "(Gerente general)",
    foto: "/promotores/PedroArguelles.jpg",
  },
  {
    id: 2,
    nombre: "Marisol Guerrero",
    region: "Secretaria General",
    foto: "/promotores/MarisolGuerrero.jpg",
  },
  {
    id: 4,
    nombre: "Luis Enrique Paredes Paredes",
    region: "Iquitos",
    foto: "/promotores/LuisParedes.png",
  },
  {
    id: 5,
    nombre: "Nee Salomon Chavez Navarro",
    region: "Iquitos",
    foto: "/promotores/NeeChavez.jpeg",
  },
  {
    id: 6,
    nombre: "Salomon Martin Escobar",
    region: "Tocache",
    foto: "/promotores/SalomonEscobar.jpg",
  },
  {
    id: 7,
    nombre: "Segundo Cueva Graciano",
    region: "Iquitos",
    foto: "/promotores/SegundoCueva.png",
  },
  {
    id: 8,
    nombre: "Segundo Jesus Medina Vasquez",
    region: "Huanuco",
    foto: "/promotores/SegundoMedina.png",
  },
  {
    id: 9,
    nombre: "Victor Enrique Mejia Melendez",
    region: "Iquitos",
    foto: "/promotores/VictorMejia.png",
  },
  {
    id: 10,
    nombre: "Tercero Isidoro Coquinche Sangama",
    region: "Tarapoto",
    foto: "/promotores/TerceroConquinche.jpg",
  },
  {
    id: 11,
    nombre: "Alfredo Valderrama Tello",
    region: "Pucallpa",
    foto: "/promotores/AlfredoValderrama.jpeg",
  },
  {
    id: 12,
    nombre: "Fredy Mafaldo Paredes",
    region: "Pucallpa - Iquitos",
    foto: "/promotores/FredyParedes.png",
  },
  {
    id: 13,
    nombre: "Juan Carlos Vargas Cardenas",
    region: "Contamana",
    foto: "/promotores/JuanVargas.png",
  },
  {
    id: 14,
    nombre: "Carlos Alberto Avila Quiñe",
    region: "Lima",
    foto: "/promotores/CarlosAvila.png",
  },
  {
    id: 15,
    nombre: "Julio Cesar Amayo Payac",
    region: "Pucallpa",
    foto: "/promotores/man.png",
  },
  {
    id: 16,
    nombre: "Johajan Paul Del Aguila Pacaya",
    region: "Iquitos",
    foto: "/promotores/Johajan.jpeg",
  },
  {
    id: 17,
    nombre: "David Rios Saavedra",
    region: "Tarapoto",
    foto: "/promotores/DavidRios.png",
  },
  {
    id: 18,
    nombre: "Jorge Luis Sanchez Carpio",
    region: "Chiclayo",
    foto: "/promotores/JorgeSanchez.png",
  },
  {
    id: 19,
    nombre: "Dimas Puga Tuanama",
    region: "Pucallpa",
    foto: "/promotores/DimasTuanama.jpg",
  },
  {
    id: 20,
    nombre: "Juan Carlos Rodriguez Moreno",
    region: "Pucallpa",
    foto: "/promotores/JuanCarlos.jpeg",
  },
  {
    id: 21,
    nombre: "Aracely Guerrero Roman",
    region: "Moyobamba",
    foto: "/promotores/AracelyGuerrero.png",
  },
  {
    id: 22,
    nombre: "Alfonso Carmelo Chavez Otarola",
    region: "Iquitos - Nauta - Requena",
    foto: "/promotores/man.png",
  },
  {
    id: 23,
    nombre: "Maria Socorro Muñoz Mori",
    region: "Jaen",
    foto: "/promotores/MariaSocorro.png",
  },
  {
    id: 24,
    nombre: "Karen Veronica Escudero Melendez",
    region: "Iquitos",
    foto: "/promotores/KarenEscudero.jpeg",
    whatsapp: "51988888888",
    email: "juan@icap.pe",
  },
  {
    id: 25,
    nombre: "Julio Ysac Guerra Achong",
    region: "Aucayacu",
    foto: "/promotores/JulioGuerra2.jpeg",
  },
];

export default function Promotores() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroRegion, setFiltroRegion] = useState<string>("todos");

  const regiones = useMemo(
    () => Array.from(new Set(PROMOTORES.map((p) => p.region))).sort(),
    [],
  );

  const filtrados = useMemo(() => {
    const term = busqueda.trim().toLowerCase();
    return PROMOTORES.filter((p) => {
      const coincideRegion =
        filtroRegion === "todos" || p.region === filtroRegion;
      const coincideTexto =
        term.length === 0 ||
        p.nombre.toLowerCase().includes(term) ||
        p.region.toLowerCase().includes(term);
      return coincideRegion && coincideTexto;
    });
  }, [busqueda, filtroRegion]);

  return (
    <>
      <Head>
        <title>
          Promotores | Instituto de Capacitación y Actualización Profesional
        </title>
        <meta
          name="description"
          content="Conoce a nuestros promotores oficiales, su nombre y foto para una atención personalizada."
        />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Banner */}
        <div className="relative w-full h-64 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/header-background.jpg"
              alt="Fondo de promotores ICAP"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-[#00AEFF]/80"></div>
          </div>

          <div className="relative container mx-auto px-14 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
              Promotores Oficiales
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl drop-shadow-md">
              Encuentra al promotor de tu región. Visualiza su nombre y foto.
            </p>
          </div>
        </div>

        {/* Contenido */}
        <div className="container mx-auto px-4 py-12">
          {/* Filtros */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            {/* Tabs de región */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFiltroRegion("todos")}
                className={`px-4 py-2 rounded-md text-sm font-medium border ${
                  filtroRegion === "todos"
                    ? "bg-[#00AEFF] text-white border-transparent"
                    : "bg-white text-gray-700 hover:bg-gray-100 border-gray-200"
                }`}
              >
                Todas
              </button>
              {regiones.map((r) => (
                <button
                  key={r}
                  onClick={() => setFiltroRegion(r)}
                  className={`px-4 py-2 rounded-md text-sm font-medium border ${
                    filtroRegion === r
                      ? "bg-[#00AEFF] text-white border-transparent"
                      : "bg-white text-gray-700 hover:bg-gray-100 border-gray-200"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Búsqueda */}
            <div className="w-full md:w-80">
              <div className="flex items-center bg-white border border-gray-200 rounded-md px-3">
                <FiSearch className="mr-2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Buscar por nombre o región"
                  className="w-full py-2 outline-none text-gray-900 placeholder:text-gray-400 caret-sky-500"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Grid de promotores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtrados.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
              >
                <div className="relative w-36 h-36 mb-4">
                  <Image
                    src={p.foto}
                    alt={`Foto de ${p.nombre}`}
                    fill
                    className="rounded-full object-cover object-top"
                    sizes="144px"
                    priority
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-800">{p.nombre}</h3>

                <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
                  <FiMapPin className="shrink-0" />
                  <span>{p.region}</span>
                </div>

                {/* Si luego quieres botones de contacto, descomenta: */}
                {/* <div className="mt-4 flex gap-2">
                  {p.whatsapp && (
                    <a
                      href={`https://wa.me/${p.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-sm rounded-md bg-green-50 text-green-700 hover:bg-green-100"
                    >
                      WhatsApp
                    </a>
                  )}
                  {p.email && (
                    <a
                      href={`mailto:${p.email}`}
                      className="px-3 py-2 text-sm rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100"
                    >
                      Email
                    </a>
                  )}
                </div> */}
              </div>
            ))}
          </div>

          {/* Vacío */}
          {filtrados.length === 0 && (
            <div className="mt-10 text-center text-gray-600">
              No se encontraron promotores con esos criterios.
            </div>
          )}
        </div>
      </main>
    </>
  );
}
