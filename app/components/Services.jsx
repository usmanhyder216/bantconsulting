'use client';
import { Server, Shield, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="section">
        <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-outfit)' }}>Our Expertise</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>Comprehensive IT strategies tailored for scale, performance, and operational excellence.</p>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{ background: 'var(--color-surface)', padding: '2.5rem', borderRadius: '1.5rem', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.03)' }}>
                    <div style={{ width: '60px', height: '60px', background: 'var(--color-bg-alt)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                        <Server size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-outfit)' }}>Infrastructure Modernization</h3>
                    <p style={{ color: 'var(--color-text-muted)' }}>Transform legacy systems into agile, cloud-native environments designed for limitless scalability.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ background: 'var(--color-surface)', padding: '2.5rem', borderRadius: '1.5rem', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.03)' }}>
                    <div style={{ width: '60px', height: '60px', background: 'var(--color-bg-alt)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                        <Shield size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-outfit)' }}>Cybersecurity Strategy</h3>
                    <p style={{ color: 'var(--color-text-muted)' }}>Fortify your digital assets with comprehensive security frameworks and proactive threat intelligence.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{ background: 'var(--color-surface)', padding: '2.5rem', borderRadius: '1.5rem', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.03)' }}>
                    <div style={{ width: '60px', height: '60px', background: 'var(--color-bg-alt)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                        <Cpu size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-outfit)' }}>Digital Transformation</h3>
                    <p style={{ color: 'var(--color-text-muted)' }}>Leverage cutting-edge technologies and AI integrations to streamline enterprise workflows.</p>
                </motion.div>
                
            </div>
        </div>
    </section>
  );
}
