import AboutHero from '@/components/about/AboutHero';
import CompanyNetwork from '@/components/about/CompanyNetwork';
import CTASection from '@/components/about/CTASection';
import OurStory from '@/components/about/OurStory';
import WorkProcess from '@/components/about/WorkProcess';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TeamSection from '@/components/TeamSection';

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <OurStory />
      <CompanyNetwork />
      <TeamSection />
      <WorkProcess />
      <CTASection />
      <Footer />
    </main>
  );
}
