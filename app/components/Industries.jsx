'use client';
import { HeartPulse, Landmark, ShoppingBag, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Industries() {
  const industries = [
    {
      title: 'Healthcare & Life Sciences',
      desc: 'HIPAA compliance, telehealth infrastructure, and secure data storage solutions designed to safeguard patient privacy.',
      icon: <HeartPulse size={28} />
    },
    {
      title: 'Financial Services',
      desc: 'Robust fintech solutions, high-frequency security controls, and secure transactional databases meeting SOC2 standards.',
      icon: <Landmark size={28} />
    },
    {
      title: 'Retail & E-Commerce',
      desc: 'Scalable cloud infrastructure to handle peak traffic demands, headless commerce integrations, and predictive data analytics.',
      icon: <ShoppingBag size={28} />
    },
    {
      title: 'Manufacturing & Logistics',
      desc: 'Real-time supply chain monitoring, automated inventory systems, and IoT integrations for operational transparency.',
      icon: <Factory size={28} />
    }
  ];

  return (
    <section id="industries" className="section">
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-outfit)' }}>Specialized Solutions</motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>Tailored technological and compliance strategies for every industry vertical.</motion.p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem' }}>
                {industries.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02, translateY: -8 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      style={{ padding: '3rem', borderRadius: '1.5rem', border: '1px solid var(--color-secondary)', display: 'flex', flexDirection: 'column', gap: '1.25rem', background: 'linear-gradient(145deg, var(--color-surface) 0%, rgba(59, 130, 246, 0.03) 100%)', boxShadow: 'var(--shadow-md)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '200px', height: '200px', background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', opacity: 0.03, borderRadius: '50%', zIndex: 0 }}></div>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ color: 'var(--color-accent)', width: '50px', height: '50px', background: 'var(--color-bg-alt)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                            {item.icon}
                        </div>
                        <h3 style={{ fontSize: '1.45rem', fontFamily: 'var(--font-outfit)' }}>{item.title}</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
