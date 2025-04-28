import ClientOnly from '@/components/ClientOnly';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { type ReactNode } from 'react';
import '@/app/globals.css';

export const metadata = {
  title: "Argdebra",
  description: "Instituto de capacitacion y actualizacion profesional",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <main className="flex-grow">
          {children}
        </main>
        <ClientOnly>
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}