import Footer from '@/components/Footer';
import Header from '@/components/Header';
import QuoteForm from '@/components/services/QuoteForm';
import ServicesCTA from '@/components/services/ServicesCTA';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/services/ServicesList';
import PageLoader from '@/components/PageLoader';

export default function ServicesPage() {
  return (
    <>
      <PageLoader />
      <main>
        <Header />
        <ServicesHero />
        <ServicesList />
        <QuoteForm />
        <ServicesCTA />
        <Footer />
      </main>
    </>
  );
}
