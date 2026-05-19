import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Contact Us | B&T Consulting',
  description: 'Get in touch with B&T Consulting. Let us know how our IT advisory team can support your enterprise goals.',
}

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1, paddingTop: 'calc(80px + 4rem)' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-outfit)', marginBottom: '1rem' }}>Contact B&T Consulting</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '600px', marginInline: 'auto' }}>
            Whether you have a specific project in mind or want to explore how we can optimize your IT strategy, our partners are ready to assist you.
          </p>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
