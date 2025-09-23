import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Schedule } from '@/components/sections/Schedule';
import { Team } from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import BMICalculator from '@/components/sections/BMICalculator';
import { Contact } from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Schedule />
        <Team />
        <Testimonials />
        <BMICalculator />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
