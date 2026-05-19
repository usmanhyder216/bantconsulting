'use client';
import { motion } from 'framer-motion';

export default function Partners() {
  const partners = ['AWS Partner Network', 'Microsoft Cloud', 'Google Cloud', 'Cisco', 'VMware Enterprise', 'Ignets', 'Cogent'];

  return (
    <section id="partners" className="section bg-light-alt" style={{ padding: '4rem 0', borderBottom: '1px solid rgba(0,0,0,0.03)', borderTop: '1px solid rgba(0,0,0,0.03)' }}>
      <div className="container">
        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, marginBottom: '2.5rem' }}>
          Engineered in collaboration with the best in the industry
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem', opacity: 0.7 }}>
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-outfit)', letterSpacing: '-0.5px' }}>
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
