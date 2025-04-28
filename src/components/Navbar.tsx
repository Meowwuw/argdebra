"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname === '/') {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#contacto';
    }
  };

  const menuItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Cursos', href: '/cursos' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Convenios', href: '/convenios' },
    { label: 'Promotores', href: '/promotores' },
    {
      label: 'Contáctanos',
      href: '/#contacto',
      onClick: handleContactClick
    },
  ];

  return (
    <header className="relative bg-[#E7F7FF]">
      <div className="flex items-center justify-between py-4 px-4 md:px-12">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={40}
            className="z-20"
          />
          <div className="hidden md:block ml-3 border-l-2 border-[#00AEFF] pl-3">
            <span className="text-[#00AEFF] text-sm font-semibold leading-tight block">
              INSTITUTO DE CAPACITACION Y
            </span>
            <span className="text-[#00AEFF] text-sm font-semibold leading-tight block">
              ACTUALIZACION PROFESIONAL
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-20 text-gray-800"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6 text-gray-800 text-lg">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li
                  key={item.href}
                  className={`
                border-b-2
                ${isActive
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent hover:border-blue-500 hover:text-blue-500'
                    }
                transition-colors
              `}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/register"
            className="px-4 py-2 bg-white text-[#00AEFF] rounded-md
                  hover:bg-[#00AEFF] hover:text-white transition-colors"
          >
            Ingresar
          </Link>
        </div>
      </div>

      {/* Menú móvil centrado vertical y horizontalmente */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#E7F7FF] z-10 flex flex-col items-center justify-center">
          <div className="mb-8 flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={50}
              className="mb-2"
            />
            <div className="text-center">
              <span className="text-[#00AEFF] text-sm font-semibold leading-tight block">
                INSTITUTO DE CAPACITACION Y
              </span>
              <span className="text-[#00AEFF] text-sm font-semibold leading-tight block">
                ACTUALIZACION PROFESIONAL
              </span>
            </div>
          </div>

          <nav className="flex flex-col items-center">
            <ul className="space-y-6 text-center">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li
                    key={item.href}
                    className={`
                  text-xl
                  ${isActive ? 'text-blue-500' : 'text-gray-800'}
                `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                );
              })}
              <li className="pt-8">
                <Link
                  href="/register"
                  className="px-6 py-2 bg-white text-[#00AEFF] rounded-md
                        hover:bg-[#00AEFF] hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ingresar
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}