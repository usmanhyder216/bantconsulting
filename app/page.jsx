import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Industries from './components/Industries';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

export default function Home() {
  return (
    <main>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Process />
      <About />
      <Industries />
      <Blog />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}


