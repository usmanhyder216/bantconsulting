'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <header className="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Background Image & Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          style={{ position: 'absolute', inset: 0 }}
        > */}
        <img
          src="/images/bt-heroo.webp"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* </motion.div> */}

        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(15,23,42,0.5), rgba(15,23,42,0.85))' }}></div>
        <div className="noise-bg"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 1rem', marginTop: '60px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '-1.5px', marginBottom: '1.5rem', fontFamily: 'var(--font-outfit)', lineHeight: 1.1, color: '#ffffff', maxWidth: '1000px', marginInline: 'auto' }}>
            Architecting the future of <span style={{ color: '#94A3B8' }}>Enterprise IT.</span>
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.35rem)', color: '#CBD5E1', marginBottom: '3rem', maxWidth: '750px', marginInline: 'auto', lineHeight: 1.6 }}>
            We empower large businesses and tech firms with strategic IT consulting, scalable architecture, and transformative digital solutions designed to accelerate growth.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn btn-primary btn-large" style={{ backgroundColor: '#ffffff', color: 'var(--color-primary)' }}>
              Book a Consultation
            </Link>
            <Link href="/#services" className="btn btn-secondary btn-large" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}>
              Explore Services <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
