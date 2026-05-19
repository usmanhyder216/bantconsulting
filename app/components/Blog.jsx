'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const articles = [
    {
      slug: "hybrid-cloud",
      category: "Cloud Strategy",
      readTime: "5 min read",
      date: "May 15, 2026",
      title: "Why Hybrid Cloud is the Future of Enterprise IT",
      excerpt: "Discover why leading organizations are selecting hybrid cloud architectures to combine the control of private networks with the scaling agility of public clouds.",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "zero-trust",
      category: "Cybersecurity",
      readTime: "7 min read",
      date: "May 10, 2026",
      title: "Understanding Zero Trust: The Key to Modern Defense",
      excerpt: "Traditional perimeter security is no longer sufficient. Learn how implementing a strict Zero Trust framework protects your remote workforce and corporate data.",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "ai-governance",
      category: "Artificial Intelligence",
      readTime: "6 min read",
      date: "May 02, 2026",
      title: "AI Governance: Building Trust in Corporate Workflows",
      excerpt: "As AI tools integrate deeply into business units, setting clear governance policies ensures ethical data usage, transparency, and high performance.",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="insights" className="section bg-light-alt" style={{ borderTop: '1px solid rgba(0,0,0,0.03)', borderBottom: '1px solid rgba(0,0,0,0.03)', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-outfit)' }}
            >
              Industry Insights
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }} 
              style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '600px' }}
            >
              Expert perspectives, tech trends, and strategic advice to guide your digital evolution.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="#" className="btn btn-secondary" style={{ whiteSpace: 'nowrap' }}>
              View All Insights <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          {articles.map((article, idx) => (
            <Link href={`/blog/${article.slug}`} key={idx} style={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}>
              <motion.article 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                style={{ 
                  background: 'var(--color-surface)', 
                  borderRadius: '1.5rem', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-md)', 
                  border: '1px solid rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <div 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      backgroundImage: `url('${article.img}')`, 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center',
                      transition: 'transform 0.5s ease'
                    }}
                    className="article-img"
                  />
                  <span style={{ 
                    position: 'absolute', 
                    top: '1.25rem', 
                    left: '1.25rem', 
                    background: 'rgba(255, 255, 255, 0.95)', 
                    backdropFilter: 'blur(4px)',
                    color: 'var(--color-primary)', 
                    fontSize: '0.8rem', 
                    fontWeight: 600, 
                    padding: '0.4rem 1rem', 
                    borderRadius: '100px', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px' 
                  }}>
                    {article.category}
                  </span>
                </div>

                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 style={{ 
                    fontSize: '1.35rem', 
                    lineHeight: 1.3, 
                    marginBottom: '1rem', 
                    fontFamily: 'var(--font-outfit)', 
                    color: 'var(--color-primary)',
                    fontWeight: 600
                  }}>
                    {article.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--color-text-muted)', 
                    fontSize: '0.95rem', 
                    lineHeight: 1.6, 
                    marginBottom: '2rem',
                    flex: 1
                  }}>
                    {article.excerpt}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    fontWeight: 600, 
                    color: 'var(--color-accent)', 
                    fontSize: '0.95rem',
                    marginTop: 'auto'
                  }}>
                    Read Full Article <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
