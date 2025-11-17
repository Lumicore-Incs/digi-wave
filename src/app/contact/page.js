import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ContactForm from '@/components/contact/ContactForm';
import ContactHero from '@/components/contact/ContactHero';
import ContactProcess from '@/components/contact/ContactProcess';

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactProcess />
      <Footer />
    </main>
  );
}
