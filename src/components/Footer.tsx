import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Logo */}
          <div className="flex justify-center items-center bg-white py-12 px-4 md:col-span-2">
            <Image
              src="/logo.png"
              alt="Logo Argdebra"
              width={180}
              height={90}
              className="mb-4"
              priority
            />
          </div>

          {/* Enlaces y contacto */}
          <div className="md:col-span-3 bg-[#00AEFF] py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Enlaces rápidos */}
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                  <li><Link href="/cursos" className="hover:text-gray-200 transition-colors">Cursos</Link></li>
                  <li><Link href="/nosotros" className="hover:text-gray-200 transition-colors">Nosotros</Link></li>
                  <li><Link href="/convenios" className="hover:text-gray-200 transition-colors">Convenios</Link></li>
                  <li><Link href="/contacto" className="hover:text-gray-200 transition-colors">Contacto</Link></li>
                </ul>
              </div>

              {/* Contacto y redes */}
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-lg mb-4">Contáctanos</h3>
                
                <div className="text-sm mb-4 space-y-1">
                  <p className="flex items-center gap-2"><FiPhone /> Teléfono: 061 - 605292</p>
                  <p className="flex items-center gap-2"><FaWhatsapp /> 942018158 / 942018189</p>
                </div>

                <div className="flex justify-center sm:justify-start space-x-4 mb-6">
                  <a
                    href="https://www.facebook.com/profile.php?id=100090634964809"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 text-2xl transition-colors"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://wa.me/51942018158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 text-2xl transition-colors"
                  >
                    <FaWhatsapp />
                  </a>
                </div>

                <div className="text-sm">
                  <p className="mb-2">© 2024 Argdebra. Todos los derechos reservados.</p>
                  <div className="flex flex-col space-y-1">
                    <Link href="/terminos" className="hover:text-gray-200 transition-colors">
                      Términos y condiciones
                    </Link>
                    <Link href="/privacidad" className="hover:text-gray-200 transition-colors">
                      Política de Privacidad
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
