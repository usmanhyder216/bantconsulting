'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      
      <main style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '6rem', position: 'relative' }}>
        <div className="noise-bg"></div>

        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          
          {/* Back Button */}
          <div style={{ marginBottom: '2.5rem' }}>
            <Link 
              href="/" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              <ArrowLeft size={18} /> Back to Home
            </Link>
          </div>

          {/* Header */}
          <header style={{ marginBottom: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                backgroundColor: 'rgba(79, 70, 229, 0.08)', 
                color: 'var(--color-accent)', 
                fontSize: '0.85rem', 
                fontWeight: 600, 
                padding: '0.5rem 1.25rem', 
                borderRadius: '100px', 
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1.5rem'
              }}>
                <Shield size={14} /> Trust & Security
              </span>
              
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                fontFamily: 'var(--font-outfit)', 
                lineHeight: 1.15, 
                color: 'var(--color-primary)', 
                marginBottom: '1.5rem',
                letterSpacing: '-1px'
              }}>
                Privacy Policy
              </h1>

              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                Last Updated: May 19, 2026. Your privacy and security are paramount to how B&T Consulting operates.
              </p>
            </motion.div>
          </header>

          {/* Cards of Principles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(0,0,0,0.03)', boxShadow: 'var(--shadow-sm)' }}
            >
              <Lock color="var(--color-accent)" size={28} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Data Security</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>Enterprise-grade encryption and secure access controls for all internal assets.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(0,0,0,0.03)', boxShadow: 'var(--shadow-sm)' }}
            >
              <Eye color="var(--color-accent)" size={28} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Transparency</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>Clear insights into what data we process, how it is analyzed, and who has access.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(0,0,0,0.03)', boxShadow: 'var(--shadow-sm)' }}
            >
              <FileText color="var(--color-accent)" size={28} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Compliance</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>Fully aligned with CCPA, GDPR, and global enterprise compliance architectures.</p>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: '#1F2937', fontSize: '1.05rem', lineHeight: 1.8 }}
          >
            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-outfit)', color: 'var(--color-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
              1. Information We Collect
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              At B&T Consulting, we collect information to provide strategic consulting services and support your enterprise needs. This includes:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li><strong>Contact Information:</strong> Name, work email address, company name, phone number, and physical mailing address.</li>
              <li><strong>Project Context:</strong> High-level architectures, technical challenges, and organizational goals shared during consultation inquiries.</li>
              <li><strong>Technical Data:</strong> IP addresses, browser types, and standard analytics regarding your interactions with our website to optimize page speeds and layout performance.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-outfit)', color: 'var(--color-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
              2. How We Use Your Data
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We process data strictly under lawful, business-focused principles. We use the collected data to:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Respond directly to strategic consulting requests and custom inquiries.</li>
              <li>Conduct background research on organizational scopes before structured client discovery phases.</li>
              <li>Send occasional enterprise newsletters, security audits, and technological insights (which you may opt out of at any time).</li>
              <li>Optimize and protect our digital infrastructure against security vectors.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-outfit)', color: 'var(--color-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
              3. Data Retention & Safeguards
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We retain personal data only for as long as necessary to fulfill the business scopes outlined in our active contracts or until deletion is formally requested. All retained data is protected by enterprise-grade cryptographic standards, strict localized firewalls, and credentialed Zero Trust parameters to eliminate lateral access vectors.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-outfit)', color: 'var(--color-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
              4. Contact Us Regarding Privacy
            </h2>
            <p style={{ marginBottom: '2rem' }}>
              If you have any questions, regulatory requests, or concerns regarding your privacy data, please get in touch with our Chief Information Officer at:
            </p>
            <div style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(0,0,0,0.03)', display: 'inline-block', width: '100%', marginBottom: '4rem' }}>
              <strong style={{ display: 'block', color: 'var(--color-primary)' }}>B&T Consulting Information Officer</strong>
              <span style={{ display: 'block', color: 'var(--color-text-muted)' }}>Email: privacy@bandtconsulting.com</span>
              <span style={{ display: 'block', color: 'var(--color-text-muted)' }}>Address: 12 Greenway Plz #1100, Houston, TX 77046</span>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </>
  );
}
