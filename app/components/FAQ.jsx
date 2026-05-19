'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "What services does B&T Consulting offer?",
      a: "We specialize in end-to-end digital transformation, cloud migrations (AWS, Azure, Google Cloud), enterprise-grade cybersecurity strategies, strategic IT consulting, custom software development, and 24/7 managed IT services."
    },
    {
      q: "How does B&T Consulting charge for its services?",
      a: "We offer flexible pricing models customized to your project scope and operational needs, including flat-rate project pricing, retainer-based consulting, and managed services SLAs. All assessments are transparent with no hidden costs."
    },
    {
      q: "How do you ensure cybersecurity compliance (SOC2, HIPAA, GDPR)?",
      a: "Our cybersecurity experts conduct regular vulnerability scans, penetration testing, and access controls audits. We implement zero-trust architectures, end-to-end data encryption, and robust compliance checklists to meet and exceed SOC2, HIPAA, GDPR, and ISO 27001 requirements."
    },
    {
      q: "Can B&T Consulting integrate with our existing in-house IT team?",
      a: "Absolutely. We frequently work in co-managed IT models, serving as an extension of your internal team. We can provide high-level architecture planning, specialized security expertise, or handle routine operations so your core team can focus on growth."
    },
    {
      q: "What is your typical onboarding timeframe?",
      a: "Typically, our initial discovery and audit phase takes 1 to 2 weeks. From there, we design your roadmap and can initiate implementation within days of agreement, ensuring a smooth transition with minimal disruption."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-outfit)' }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }} 
            style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}
          >
            Find quick answers to common questions about our services, engagement model, and methodologies.
          </motion.p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                style={{ 
                  background: 'var(--color-surface)', 
                  borderRadius: '1.25rem', 
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '1.75rem 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <span style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: 600, 
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-outfit)',
                    paddingRight: '1rem'
                  }}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center' }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div style={{ 
                        padding: '0 2rem 1.75rem', 
                        color: 'var(--color-text-muted)', 
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        borderTop: '1px solid rgba(0,0,0,0.02)'
                      }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
