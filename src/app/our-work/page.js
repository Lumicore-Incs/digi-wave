import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProjectShowcaseCarosal from '@/components/work/ProjectShowcaseCarosal';
import WorkCTA from '@/components/work/WorkCTA';
import WorkHero from '@/components/work/WorkHero';
import WorkStats from '@/components/work/WorkStats';
import PageLoader from '@/components/PageLoader';

export default function OurWorkPage() {
  return (
    <>
      <PageLoader />
      <main style={{ backgroundColor: 'green' }}>
        <Header />
        <WorkHero />
        {/* <ProjectShowcase /> */}
        <ProjectShowcaseCarosal />
        <WorkStats />
        <WorkCTA />
        <Footer />
      </main>
    </>
  );
}
