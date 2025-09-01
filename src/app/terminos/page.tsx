import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FiClock, FiTool, FiHome } from "react-icons/fi";

export default function EnConstruccion() {
  return (
    <>
      <Head>
        <title>Estamos trabajando en esta página | ICAP</title>
        <meta
          name="description"
          content="Esta sección está en construcción. Vuelve pronto."
        />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Banner */}
        <div className="relative w-full h-64 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/header-background.jpg"
              alt="Fondo en construcción"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-[#00AEFF]/80" />
          </div>

          <div className="relative container mx-auto px-14 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-md">
              Estamos trabajando en esta página
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Pronto estará disponible. Gracias por tu paciencia.
            </p>
          </div>
        </div>

        {/* Contenido */}
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-2xl bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <FiTool className="h-8 w-8 text-[#00AEFF]" />
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              En construcción
            </h2>
            <p className="mt-2 text-gray-600">
              Estamos afinando los últimos detalles para ofrecerte una mejor
              experiencia. Vuelve a visitarnos más tarde.
            </p>

            {/* Loader simple */}
            <div className="mt-8">
              <div className="mx-auto h-2 w-40 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-1/2 animate-pulse rounded-full bg-[#00AEFF]" />
              </div>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-gray-500">
                <FiClock className="shrink-0" />
                <span>Actualizando contenidos…</span>
              </div>
            </div>

            {/* Acciones */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-md bg-[#00AEFF] px-5 py-3 text-white hover:bg-blue-600"
              >
                <FiHome className="h-5 w-5" />
                <span>Volver al inicio</span>
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-5 py-3 text-[#00AEFF] hover:bg-blue-100"
              >
                <span>Contáctanos</span>
              </Link>
            </div>

            {/* Nota opcional */}
            <p className="mt-6 text-xs text-gray-400">
              Si necesitas verificar un certificado o información urgente, usa
              nuestras opciones de contacto.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
