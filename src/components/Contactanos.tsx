"use client";
import { FormEvent, useState } from "react";

export default function Contactanos() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    setEnviado(true);
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <section className="py-10 bg-gray-100" id="contacto">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Contáctanos
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Queremos conocer tus dudas, comentarios o sugerencias. ¡Estamos aquí para ayudarte!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Información de Contacto
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong>Teléfono:</strong>
                  <div className="flex flex-col ml-1">
                    <span>942018158 - 942018189</span>
                  </div>
                </li>
                <li>
                  <strong>Email:</strong>
                  <div className="flex flex-col ml-1">
                    <a
                      className="text-blue-500 hover:underline"
                      href="mailto:ICAP.ARGDEBRA@GMAIL.COM"
                    >
                      ICAP.ARGDEBRA@GMAIL.COM
                    </a>
                    <a
                      className="text-blue-500 hover:underline"
                      href="mailto:ICAP.PEDIDOS@GMAIL.COM"
                    >
                      ICAP.PEDIDOS@GMAIL.COM
                    </a>
                  </div>
                </li>
                <li>
                  <strong>Dirección:</strong> Psje. Rafael de Souza 261 Pucallpa-Ucayali
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <iframe
                title="Ubicación de la institución"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.705478450724!2d-99.16893078481508!3d19.426143386886974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3d73ab7401%3A0x95d16d5c88f1d86f!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1693580987308!5m2!1ses!2smx"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            {enviado ? (
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-green-600 mb-2">
                  ¡Mensaje enviado con éxito!
                </h3>
                <p className="text-gray-600">
                  Pronto nos pondremos en contacto contigo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    rows={5}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-600 transition-colors"
                >
                  Enviar
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section >
  );
}
