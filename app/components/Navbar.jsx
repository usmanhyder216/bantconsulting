'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(250, 250, 250, 0.85)',
      backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(0,0,0,0.05)', zIndex: 1000,
      transition: 'padding 0.4s, background-color 0.4s', padding: scrolled ? '0.75rem 0' : '1rem 0'
    }}>
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" className="logo" style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
          B&T <span style={{ fontWeight: 300, color: 'var(--color-text-muted)' }}>Consulting</span>
        </Link>
        <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/#about" className="nav-link" style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>About</Link>
          <Link href="/#services" className="nav-link" style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Services</Link>
          <Link href="/#process" className="nav-link" style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Process</Link>
          <Link href="/#industries" className="nav-link" style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Industries</Link>
          <Link href="/#insights" className="nav-link" style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Insights</Link>
          <Link href="/#faq" className="nav-link" style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>FAQ</Link>
        </div>
        <Link href="/contact" className="btn btn-primary">Let's Talk</Link>
      </div>
    </nav>
  );
}
