import AdvantageCTA from '@/components/advantage/AdvantageCTA';
import AdvantageHero from '@/components/advantage/AdvantageHero';
import AdvantagesList from '@/components/advantage/AdvantagesList';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function OurAdvantagePage() {
  return (
    <main>
      <Header />
      <AdvantageHero />
      <AdvantagesList />
      <AdvantageCTA />
      <Footer />
    </main>
  );
}
