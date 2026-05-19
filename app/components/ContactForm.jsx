'use client';
import { Mail, MapPin, Send, Check, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { submitContactForm } from '../actions';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [status, setStatus] = useState('idle'); // idle, loading, success

    async function actionHandler(formData) {
        setStatus('loading');
        const result = await submitContactForm(formData);

        if (result.success) {
            setStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        }
    }

    return (
        <section id="contact" className="section">
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-outfit)' }}>Ready to elevate your IT?</h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                        Let's discuss how our consulting team can resolve your most complex technical challenges. Fill out the form, and a senior partner will be in touch shortly.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem', fontWeight: 500 }}>
                            <Mail color="var(--color-accent)" size={24} />
                            <span>contact@bandtconsulting.com</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem', fontWeight: 500 }}>
                            <MapPin color="var(--color-accent)" size={24} />
                            <span>12 Greenway Plz #1100, Houston, TX 77046</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ background: 'var(--color-surface)', padding: '3rem', borderRadius: '1.5rem', boxShadow: 'var(--shadow-lg)' }}>
                    <form action={actionHandler}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.95rem' }}>Full Name</label>
                            <input type="text" id="name" name="name" required placeholder="Jane Doe" style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-secondary)', borderRadius: '1rem', fontFamily: 'inherit', fontSize: '1rem', backgroundColor: 'var(--color-bg-main)' }} />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="company" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.95rem' }}>Company</label>
                            <input type="text" id="company" name="company" required placeholder="Acme Corp" style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-secondary)', borderRadius: '1rem', fontFamily: 'inherit', fontSize: '1rem', backgroundColor: 'var(--color-bg-main)' }} />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.95rem' }}>Work Email</label>
                            <input type="email" id="email" name="email" required placeholder="jane@acmecorp.com" style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-secondary)', borderRadius: '1rem', fontFamily: 'inherit', fontSize: '1rem', backgroundColor: 'var(--color-bg-main)' }} />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.95rem' }}>How can we help?</label>
                            <textarea id="message" name="message" rows={4} required placeholder="Tell us about your IT challenges..." style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-secondary)', borderRadius: '1rem', fontFamily: 'inherit', fontSize: '1rem', backgroundColor: 'var(--color-bg-main)' }}></textarea>
                        </div>
                        <button type="submit" disabled={status === 'loading'} className="btn btn-primary btn-block" style={{ backgroundColor: status === 'success' ? '#10B981' : undefined }}>
                            {status === 'idle' && <><Send size={20} /> Submit Inquiry</>}
                            {status === 'loading' && <><Loader2 size={20} className="spin" /> Sending...</>}
                            {status === 'success' && <><Check size={20} /> Message Sent</>}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
