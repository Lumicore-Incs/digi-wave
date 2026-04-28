import AdvantageCTA from '@/components/advantage/AdvantageCTA';
import AdvantageHero from '@/components/advantage/AdvantageHero';
import AdvantagesList from '@/components/advantage/AdvantagesList';
import AdvantageScrollBackground from '@/components/advantage/AdvantageScrollBackground';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageLoader from '@/components/PageLoader';

export default function OurAdvantagePage() {
  return (
    <>
      <PageLoader />
      <main>
        <Header />
        <div style={{ position: 'relative', background: 'white', overflow: 'hidden' }}>
          <AdvantageScrollBackground reverse={true} />
          <AdvantageHero />
          <AdvantagesList />
          <AdvantageCTA />
        </div>
        <Footer />
      </main>
    </>
  );
}
