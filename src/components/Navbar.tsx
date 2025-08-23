"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"; 
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);


  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (pathname === "/") {
      const contactSection = document.getElementById("contacto");
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.location.href = "/#contacto";
    }
  };
    
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Cursos", href: "/cursos" },
    { label: "Convenios", href: "/convenios" },
    { label: "Promotores", href: "/promotores" },
    {
      label: "Contáctanos",
      href: "/#contacto",
      onClick: handleContactClick,
    },
  ];

  return (
    <header className="relative z-30">
      {/* Barra de contacto superior */}
      <div className="hidden md:block bg-[#00AEFF] text-white py-2">
        <div className="flex items-center justify-between px-4 md:px-12">
          <div className="flex items-center space-x-6 text-sm">
            <p className="flex items-center gap-2">
              <FiPhone size={16} /> 
              Teléfono: 061 - 605292
            </p>
            <p className="flex items-center gap-2">
              <FaWhatsapp size={16} /> 
              942018158 / 942018189
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/TUPAGINA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              <FaFacebook size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <div className="bg-[#E7F7FF]">
        <div className="flex items-center justify-between py-4 px-4 md:px-12">
          <div className="flex items-center">
            <Link href="/" className="z-20">
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={40}
              />
            </Link>
            <div className="hidden md:flex flex-col justify-center items-center text-center ml-6 pl-3 border-l-2 border-[#00AEFF]">
              <span className="text-[#FF0000] text-3xl font-extrabold leading-tight block mb-1">
                ICAP ARGDEBRA
              </span>
              <span className="text-[#00AEFF] text-xs font-semibold leading-tight block">
                INSTITUTO DE CAPACITACION Y
              </span>
              <span className="text-[#00AEFF] text-xs font-semibold leading-tight block">
                ACTUALIZACION PROFESIONAL
              </span>
            </div>
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-40 text-gray-800" 
            aria-label="Abrir menú"
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
                        ? "border-blue-500 text-blue-500"
                        : "border-transparent hover:border-blue-500 hover:text-blue-500"}
                      transition-colors
                    `}
                  >
                    <Link href={item.href} onClick={item.onClick}>
                      {item.label}
                    </Link>
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
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-30 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col h-full">
            {/* Header del menú */}
            <div className="bg-[#E7F7FF] py-6 px-6 text-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={40}
                className="mx-auto mb-3"
              />
              <h1 className="text-[#FF0000] text-xl font-extrabold mb-1">
                ICAP ARGDEBRA
              </h1>
              <p className="text-[#00AEFF] text-xs font-normal">
                INSTITUTO DE CAPACITACION Y ACTUALIZACION PROFESIONAL
              </p>
            </div>
            
            {/* Contenido del menú */}
            <div className="flex-1 overflow-y-auto bg-white">
              <nav className="py-6">
                <ul className="space-y-2 px-6">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <Link 
                        href={item.href}
                        className={`
                          block py-3 px-4 text-lg font-medium rounded-lg transition-colors
                          ${pathname === item.href 
                            ? "bg-[#00AEFF] text-white" 
                            : "text-gray-700 hover:bg-gray-100"}
                        `}
                        onClick={item.onClick ? item.onClick : closeMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contacto e Ingreso */}
              <div className="px-6 py-4">
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <FiPhone size={16} className="text-[#00AEFF]" /> 
                    <span>061 - 605292</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <FaWhatsapp size={16} className="text-green-500" /> 
                    <span>942018158 / 942018189</span>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="https://www.facebook.com/TUPAGINA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <FaFacebook size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link
                  href="/register"
                  className="block w-full py-3 bg-[#00AEFF] text-white text-center text-lg font-semibold rounded-lg
                             hover:bg-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  Ingresar
                </Link>
              </div>
            </div>
        </div>
      </div>
    </header>
  );
}