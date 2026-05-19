'use client';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section bg-light-alt">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{ width: '100%', aspectRatio: '1/1', borderRadius: '2rem 16rem 16rem 2rem', backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'var(--shadow-lg)',
              maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)' }}>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-outfit)' }}>Trusted by global leaders in technology.</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                    At B&T Consulting, we understand that enterprise IT isn't just about maintaining systems; it's about creating competitive advantages. With over a decade of experience advising top-tier corporations, our approach is deeply analytical, profoundly strategic, and meticulously executed.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
                        <CheckCircle2 color="var(--color-accent)" size={24} /> Bespoke architecture for unique business logic.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
                        <CheckCircle2 color="var(--color-accent)" size={24} /> Seamless integration with existing operations.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
                        <CheckCircle2 color="var(--color-accent)" size={24} /> Future-proofing through sustainable tech choices.
                    </li>
                </ul>
            </motion.div>
        </div>
    </section>
  );
}
