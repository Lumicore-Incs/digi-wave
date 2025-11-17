import About from '@/components/About';
import BrandLogos from '@/components/BrandLogos';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OurAdvantage from '@/components/OurAdvantage';
import Services from '@/components/Services';
import TeamSection from '@/components/TeamSection';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <OurAdvantage />
      <BrandLogos />
      <TeamSection />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
