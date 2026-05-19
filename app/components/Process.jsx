'use client';
import { Search, Compass, ShieldAlert, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover & Audit',
      desc: 'We begin by deeply understanding your business, analyzing your current IT infrastructure, and identifying gaps and opportunities.',
      icon: <Search size={28} />
    },
    {
      num: '02',
      title: 'Strategy & Design',
      desc: 'Our architects design a customized, scalable roadmap tailored to your budget, timeline, and long-term goals.',
      icon: <Compass size={28} />
    },
    {
      num: '03',
      title: 'Implement & Deploy',
      desc: 'We execute the strategy with precision, ensuring minimal disruption to your daily operations during migration or integration.',
      icon: <Cpu size={28} />
    },
    {
      num: '04',
      title: 'Optimize & Manage',
      desc: 'Post-deployment, we provide continuous monitoring, support, and optimization to ensure peak performance and security.',
      icon: <ShieldAlert size={28} />
    }
  ];

  return (
    <section id="process" className="section bg-light-alt" style={{ borderTop: '1px solid rgba(0,0,0,0.03)', borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-outfit)' }}>Our Proven Process</motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>A proven methodology engineered for speed, stability, and success.</motion.p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem' }}>
                {steps.map((step, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02, translateY: -8 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      style={{ background: 'linear-gradient(145deg, var(--color-surface) 0%, rgba(243, 244, 246, 0.6) 100%)', padding: '3rem', borderRadius: '1.5rem', boxShadow: 'var(--shadow-md)', border: '1px solid rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '150px', height: '150px', background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', opacity: 0.05, borderRadius: '50%', zIndex: 0 }}></div>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <span style={{ position: 'absolute', top: '-1.5rem', right: '-1.5rem', fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-secondary)', opacity: 0.5, fontFamily: 'var(--font-outfit)', lineHeight: 1 }}>{step.num}</span>
                        <div style={{ width: '50px', height: '50px', background: 'var(--color-bg-alt)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
                            {step.icon}
                        </div>
                        <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', fontFamily: 'var(--font-outfit)' }}>{step.title}</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
