import Image from 'next/image';

export default function Instituciones() {
  const instituciones = [
    {
      nombre: ['ASOCIACION DE GRADUADOS', 'DE LA UNIVERSIDAD NACIONAL DE TRUJILLO'],
      titulo: 'AGUNT',
      logo: '/AGUNT.png',
      link: 'https://www.institucion-a.org',
    },
    {
      nombre: ['UNIVERSIDAD NACIONAL', 'DE LA AMAZONIA PERUANA'],
      titulo: 'UNAP',
      logo: '/UNAP.png',
      link: 'https://www.institucion-b.org',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          Instituciones que nos Acreditan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch justify-items-center">
          {instituciones.map((inst) => (
            <div
              key={inst.titulo}
              className="flex flex-col items-center text-center w-full max-w-sm"
            >
              <a
                href={inst.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-6 w-full hover:opacity-80 transition-opacity"
              >
                <div className="w-48 h-48 relative">
                  <Image
                    src={inst.logo}
                    alt={`Logo de ${inst.nombre.join(' ')}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-xl text-gray-800">{inst.titulo}</h3>
                  <div className="flex flex-col gap-1">
                    {inst.nombre.map((linea, index) => (
                      <p key={index} className="text-sm text-gray-600">{linea}</p>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}