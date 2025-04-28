import Hero from '../components/Hero';
import CardsSection from '../components/CardsSection';
import CategoryCarousel from '../components/CategoryCarousel';
import WhyChooseUs from '../components/WhyChooseUs';
import Instituciones from '../components/Instituciones';
import Cursos from '../components/Cursos';
import Contactanos from '../components/Contactanos';

export default function Home() {
  return (
    <>
    <div>
      <Hero />
      <CardsSection />
      <CategoryCarousel />
      <WhyChooseUs />
      <Cursos />
      <Instituciones />
      <Contactanos />
      </div>
    </>
  );
}
