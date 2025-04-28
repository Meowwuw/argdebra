import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#00AEFF] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex justify-center sm:justify-start">
            <Image
              src="/logo.png"
              alt="Logo Argdebra"
              width={180}
              height={90}
              className="mb-4"
              priority
            />
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/cursos" className="hover:text-gray-200 transition-colors">Cursos</Link></li>
              <li><Link href="/nosotros" className="hover:text-gray-200 transition-colors">Nosotros</Link></li>
              <li><Link href="/certificaciones" className="hover:text-gray-200 transition-colors">Convenios</Link></li>
              <li><Link href="/contacto" className="hover:text-gray-200 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Síguenos en:</h3>
            <div className="flex justify-center sm:justify-start space-x-4 mb-6">
              <a href="#" className="hover:text-gray-200 text-2xl transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-200 text-2xl transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-200 text-2xl transition-colors">
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
    </footer>
  );
};

export default Footer;