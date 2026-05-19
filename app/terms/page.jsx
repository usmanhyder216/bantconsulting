'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Award, Scale, HelpCircle, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
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
                <Scale size={14} /> Legal Framework
              </span>
              
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                fontFamily: 'var(--font-outfit)', 
                lineHeight: 1.15, 
                color: 'var(--color-primary)', 
                marginBottom: '1.5rem',
                letterSpacing: '-1px'
              }}>
                Terms of Service
              </h1>

              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                Effective Date: May 19, 2026. Please read these terms carefully before engaging with our consulting resources.
              </p>
            </motion.div>
          </header>

          {/* Cards of Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(0,0,0,0.03)', boxShadow: 'var(--shadow-sm)' }}
            >
              <Award color="var(--color-accent)" size={28} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Professional Integrity</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>Dedicated to delivering elite technological consulting standards globally.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(0,0,0,0.03)', boxShadow: 'var(--shadow-sm)' }}
            >
              <FileText color="var(--color-accent)" size={28} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Intellectual Property</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>Protection of our proprietary analytical processes, designs, and systems.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(0,0,0,0.03)', boxShadow: 'var(--shadow-sm)' }}
            >
              <HelpCircle color="var(--color-accent)" size={28} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Service Scope</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>Clear delineation of advisory scopes versus direct execution parameters.</p>
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
              1. Engagement & Services
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              These Terms of Service govern your use of the B&T Consulting website and our preliminary advisory assets. By accessing this site, you accept these terms in full. Custom engineering solutions and full-scale advisory programs are governed additionally by customized master service agreements (MSAs) and structured statements of work (SOWs).
            </p>

            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-outfit)', color: 'var(--color-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
              2. Intellectual Property Rights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Unless explicitly specified otherwise under a separate signed SOW, all intellectual property, materials, concepts, architectural designs, infographics, and methodologies published on this website remain the sole property of B&T Consulting.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Visitors are granted a limited license to view and print individual pages for non-commercial educational purposes, provided all copyright notices remain intact. Any redistribution or reproduction of this content for commercial gain is strictly prohibited without direct, written authorization from our legal counsel.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-outfit)', color: 'var(--color-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
              3. Disclaimer of Advisory Liability
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              The materials and case studies available on this site are designed to present general IT and organizational concepts. They do not represent final technical specifications or definitive advisory decisions.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Technology landscapes, security standards, and architectures shift rapidly. B&T Consulting assumes no liability for immediate system decisions executed solely based on general blog posts, public case studies, or general site materials without specialized engagement structures.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-outfit)', color: 'var(--color-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
              4. Delineation of Service Limitations
            </h2>
            <p style={{ marginBottom: '4rem' }}>
              Any strategic consultation recommendations, technology analysis reviews, and architecture estimations completed during introductory consultation scopes represent estimations only. Standard warranties are strictly limited to those explicitly mapped out within formal master service contracts.
            </p>
          </motion.div>

        </div>
      </main>

      <Footer />
    </>
  );
}
