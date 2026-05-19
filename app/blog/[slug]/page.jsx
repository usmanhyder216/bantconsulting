'use client';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, ChevronRight, Share2, Bookmark } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const articlesData = {
  "hybrid-cloud": {
    category: "Cloud Strategy",
    readTime: "5 min read",
    date: "May 15, 2026",
    title: "Why Hybrid Cloud is the Future of Enterprise IT",
    excerpt: "Discover why leading organizations are selecting hybrid cloud architectures to combine the control of private networks with the scaling agility of public clouds.",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "paragraph",
        text: "For the past decade, the corporate world was told that a wholesale migration to the public cloud was inevitable. Startups and mid-sized businesses rushed to migrate, enjoying the rapid provisioning and lack of capital expenditure. However, as large-scale enterprises undertook this journey, they encountered a more complex reality. High data egress fees, regulatory compliance requirements, and the need for low-latency operations proved that the public cloud is not a one-size-fits-all solution."
      },
      {
        type: "paragraph",
        text: "This has given rise to the modern hybrid cloud strategy. Rather than forcing every workload into a public cloud, leading enterprises are constructing architectures that combine private clouds, on-premises datacenters, and public cloud environments into a single, unified system."
      },
      {
        type: "heading",
        text: "The Hybrid Equation: Balance Control with Agility"
      },
      {
        type: "paragraph",
        text: "A successful hybrid cloud strategy is built on putting the right workload in the right place. Public clouds are unmatched in their ability to handle highly variable or unpredictable workloads. For instance, customer-facing web applications that experience seasonal traffic spikes are ideal candidates for public cloud auto-scaling."
      },
      {
        type: "paragraph",
        text: "Conversely, proprietary algorithms, legacy banking systems, and sensitive patient records often require the absolute control of a private cloud or on-premises environment. By retaining these core assets locally, companies can satisfy strict data sovereignty requirements (such as GDPR or HIPAA) while avoiding the unpredictable network latency and potential security vectors of the public web."
      },
      {
        type: "blockquote",
        text: "Hybrid cloud is not a compromise between public agility and private security; it is a deliberate strategy to achieve the best of both worlds simultaneously."
      },
      {
        type: "heading",
        text: "Overcoming Complexity with Unified Orchestration"
      },
      {
        type: "paragraph",
        text: "Historically, the main objection to hybrid setups was the operational overhead. Managing two separate environments meant duplicating teams, toolsets, and security policies. Modern DevOps practices have resolved this through unified orchestration platforms."
      },
      {
        type: "paragraph",
        text: "Technologies like Kubernetes, combined with multi-cloud management layers (such as Google Anthos or Azure Arc), allow developers to package applications into standard containers. These containers can run identically whether they are deployed on a local server in Dallas or an AWS datacenter in Virginia. This abstraction layer enables a single operations team to deploy, monitor, and secure the entire hybrid estate through a single pane of glass."
      },
      {
        type: "heading",
        text: "Smart Cost Management"
      },
      {
        type: "paragraph",
        text: "The financial narrative around the public cloud has shifted. Many enterprises that migrated 100% of their operations to public infrastructure are now experiencing 'cloud shock' when receiving their monthly bills. Continuous, baseline workloads that run 24/7 are actually more cost-effective to host on modern, efficient private servers."
      },
      {
        type: "paragraph",
        text: "By utilizing hybrid architectures, finance teams can optimize their IT budgets. They run stable, predictable baseline workloads on lower-cost private infrastructure while bursting to the public cloud only when demand exceeds capacity. This hybrid billing model prevents over-provisioning and ensures that every dollar spent on infrastructure delivers direct business value."
      }
    ]
  },
  "zero-trust": {
    category: "Cybersecurity",
    readTime: "7 min read",
    date: "May 10, 2026",
    title: "Understanding Zero Trust: The Key to Modern Defense",
    excerpt: "Traditional perimeter security is no longer sufficient. Learn how implementing a strict Zero Trust framework protects your remote workforce and corporate data.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "paragraph",
        text: "For decades, cybersecurity was modeled after medieval castles. Organizations built high digital walls—firewalls, VPNs, and intrusion prevention systems—to protect their internal networks. Anyone inside the wall was deemed 'trusted,' while everyone outside was 'untrusted.' This perimeter-based model worked well when all employees sat in physical offices and accessed servers located in local server rooms."
      },
      {
        type: "paragraph",
        text: "But today, the castle walls have dissolved. Your employees are working from home, hotels, and airports. Your corporate applications live in third-party SaaS clouds. Once an attacker breaches the perimeter—whether through a phished password or an unpatched device—they gain free rein to move laterally across the entire internal network. The castle-and-moat system is no longer just outdated; it is highly dangerous."
      },
      {
        type: "heading",
        text: "The Zero Trust Philosophy: 'Never Trust, Always Verify'"
      },
      {
        type: "paragraph",
        text: "Zero Trust is a modern security paradigm that replaces implicit trust with explicit validation. Under a Zero Trust model, no user, device, or network is assumed to be safe simply because of its location. Every single access request, whether originating from outside or inside the corporate network, must be fully authenticated, authorized, and encrypted before access is granted."
      },
      {
        type: "paragraph",
        text: "This shift requires analyzing real-time context. When an employee requests access to financial records, the system doesn't just check their username and password. It analyzes their device health, their geographic location, the time of day, and their typical behavior patterns. If a request looks anomalous—such as an accountant logging in from an unmanaged device in a different state—access is instantly denied or elevated security prompts are triggered."
      },
      {
        type: "blockquote",
        text: "In cybersecurity, trust is a vulnerability. Zero Trust eliminates this vulnerability by treating every access request as a potential threat until proven otherwise."
      },
      {
        type: "heading",
        text: "The Three Core Pillars of Zero Trust"
      },
      {
        type: "paragraph",
        text: "Implementing Zero Trust is a journey, but it is always anchored by three fundamental principles:"
      },
      {
        type: "paragraph",
        text: "1. Explicit Verification: Always authenticate and authorize based on all available data points, including user identity, location, device health, service or workload, resource context, and anomalies."
      },
      {
        type: "paragraph",
        text: "2. Least Privilege Access: Limit user access with Just-In-Time (JIT) and Just-Enough-Access (JEA) models. By giving employees only the absolute minimum access required to do their job, you drastically reduce the blast radius if an account is compromised."
      },
      {
        type: "paragraph",
        text: "3. Assume Breach: Operate under the assumption that your network has already been compromised. Minimize lateral movement by segmenting your network into tiny, isolated cells (micro-segmentation). Encrypt all sessions end-to-end and use real-time analytics to detect threats immediately."
      },
      {
        type: "heading",
        text: "The Path to Implementation"
      },
      {
        type: "paragraph",
        text: "Many leadership teams feel overwhelmed by Zero Trust because they view it as a massive, all-or-nothing software purchase. In reality, Zero Trust is a strategy, not a specific tool. The path begins by mapping your enterprise's most critical assets and data flows. From there, you incrementally implement identity verification (such as multi-factor authentication), secure your devices, and segment your networks. By taking an iterative approach, you can systematically modernize your security posture without disrupting daily business operations."
      }
    ]
  },
  "ai-governance": {
    category: "Artificial Intelligence",
    readTime: "6 min read",
    date: "May 02, 2026",
    title: "AI Governance: Building Trust in Corporate Workflows",
    excerpt: "As AI tools integrate deeply into business units, setting clear governance policies ensures ethical data usage, transparency, and high performance.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "paragraph",
        text: "Artificial Intelligence has transitioned from an experimental technology to a core engine of corporate innovation. Organizations are deploying AI models to automate customer support, analyze massive financial datasets, write code, and optimize complex supply chains. The productivity gains are undeniable. However, this rapid adoption has created an regulatory and operational vacuum."
      },
      {
        type: "paragraph",
        text: "Without proper oversight, AI tools can introduce severe liabilities. Generative models can leak intellectual property, produce 'hallucinated' outputs that lead to bad business decisions, and perpetuate societal biases in hiring and credit scoring. To capture the benefits of AI without exposing their business to catastrophic risk, enterprises must establish a robust AI Governance framework."
      },
      {
        type: "heading",
        text: "What is AI Governance?"
      },
      {
        type: "paragraph",
        text: "AI Governance is a structured system of policies, processes, and tools designed to ensure that an organization's AI initiatives are ethical, transparent, secure, and aligned with corporate values. It is the bridge between theoretical data science and corporate responsibility."
      },
      {
        type: "paragraph",
        text: "Governance is not about slowing down innovation. On the contrary, clear guardrails actually accelerate adoption. When product managers and engineers understand the regulatory boundaries and ethical expectations, they can build models with the confidence that they won't be scrapped later due to compliance violations."
      },
      {
        type: "blockquote",
        text: "AI Governance is not a brake; it is the steering wheel that allows you to drive your AI strategy at maximum speed safely."
      },
      {
        type: "heading",
        text: "The Four Key Pillars of a Governance Framework"
      },
      {
        type: "paragraph",
        text: "To build a robust governance structure, enterprises should focus on four essential pillars:"
      },
      {
        type: "paragraph",
        text: "1. Data Privacy and Security: Establish strict rules on what data can be fed into AI models. Ensure that proprietary intellectual property is never used to train public models and that customer data remains strictly segmented and compliant with regional privacy laws."
      },
      {
        type: "paragraph",
        text: "2. Algorithmic Transparency: Implement 'explainable AI' (XAI) tools. If a model recommends rejecting a credit application or prioritizing a patient, operators must be able to understand the underlying weights and factors that drove that decision."
      },
      {
        type: "paragraph",
        text: "3. Continuous Performance Auditing: AI models are not static; they suffer from 'drift' as real-world data changes over time. Establish regular auditing cycles to monitor model drift, accuracy, and fairness."
      },
      {
        type: "paragraph",
        text: "4. Human-in-the-Loop Integration: For high-stakes applications—such as legal analysis, medical decisions, or customer-facing advice—ensure a qualified human reviews the AI output before it is finalized or delivered."
      },
      {
        type: "heading",
        text: "Moving Forward: Setting up your AI Safety Board"
      },
      {
        type: "paragraph",
        text: "A successful AI Governance strategy cannot be managed solely by the IT department or the legal team. It requires a cross-functional AI Safety Board. This board should include representatives from engineering, security, legal, human resources, and product management. By uniting these diverse viewpoints, your organization can foster a culture of responsible innovation, unlocking the full power of artificial intelligence while maintaining the absolute trust of your clients and stakeholders."
      }
    ]
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const router = useRouter();
  
  const article = articlesData[slug];

  if (!article) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--color-bg-main)', fontFamily: 'var(--font-outfit)' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Article Not Found</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>We couldn't find the article you were looking for.</p>
          <Link href="/" className="btn btn-primary">Go Back Home</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <main style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '6rem', position: 'relative' }}>
        <div className="noise-bg"></div>

        {/* Article Container */}
        <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
          
          {/* Breadcrumbs & Back Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => router.back()} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s', padding: 0 }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              <ArrowLeft size={18} /> Back to Insights
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              <span>Insights</span>
              <ChevronRight size={14} />
              <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>{article.category}</span>
            </div>
          </div>

          {/* Article Header */}
          <header style={{ marginBottom: '3rem' }}>
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
                <Tag size={14} /> {article.category}
              </span>
              
              <h1 style={{ 
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', 
                fontFamily: 'var(--font-outfit)', 
                lineHeight: 1.15, 
                color: 'var(--color-primary)', 
                marginBottom: '2rem',
                letterSpacing: '-1px'
              }}>
                {article.title}
              </h1>

              {/* Meta Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                    <Clock size={16} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                {/* Social Sharing (Simple Mock UI) */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    }}
                    title="Copy Article Link"
                    style={{ border: '1px solid rgba(0,0,0,0.08)', background: 'var(--color-surface)', padding: '0.6rem', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', transition: 'all 0.2s' }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-secondary)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-surface)'; e.currentTarget.style.color = 'var(--color-text-muted)'; }}
                  >
                    <Share2 size={16} />
                  </button>
                  <button 
                    title="Bookmark"
                    style={{ border: '1px solid rgba(0,0,0,0.08)', background: 'var(--color-surface)', padding: '0.6rem', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', transition: 'all 0.2s' }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-secondary)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-surface)'; e.currentTarget.style.color = 'var(--color-text-muted)'; }}
                  >
                    <Bookmark size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '4rem', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.05)' }}
          >
            <img 
              src={article.img} 
              alt={article.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>

          {/* Article Content */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: 'var(--color-text-main)', fontSize: '1.125rem', lineHeight: 1.8 }}
            >
              {article.content.map((block, idx) => {
                if (block.type === 'paragraph') {
                  return (
                    <p key={idx} style={{ marginBottom: '2rem', color: '#1F2937' }}>
                      {block.text}
                    </p>
                  );
                }
                if (block.type === 'heading') {
                  return (
                    <h2 key={idx} style={{ 
                      fontSize: '1.85rem', 
                      fontFamily: 'var(--font-outfit)', 
                      color: 'var(--color-primary)', 
                      marginTop: '3.5rem', 
                      marginBottom: '1.5rem',
                      fontWeight: 700 
                    }}>
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === 'blockquote') {
                  return (
                    <blockquote key={idx} style={{ 
                      borderLeft: '4px solid var(--color-accent)', 
                      paddingLeft: '2rem', 
                      margin: '3rem 0', 
                      fontStyle: 'italic', 
                      color: 'var(--color-primary)',
                      fontSize: '1.3rem',
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontFamily: 'var(--font-outfit)',
                      backgroundColor: 'rgba(79, 70, 229, 0.03)',
                      paddingTop: '1.5rem',
                      paddingBottom: '1.5rem',
                      paddingRight: '1.5rem',
                      borderRadius: '0 var(--border-radius-md) var(--border-radius-md) 0'
                    }}>
                      "{block.text}"
                    </blockquote>
                  );
                }
                return null;
              })}
            </motion.div>
          </div>

          {/* Call to Action Callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              marginTop: '6rem', 
              padding: '3rem', 
              background: 'linear-gradient(135deg, var(--color-primary) 0%, #111A30 100%)', 
              borderRadius: '1.5rem', 
              color: 'var(--color-surface)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div className="noise-bg" style={{ opacity: 0.05 }}></div>
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
              <h3 style={{ color: '#ffffff', fontFamily: 'var(--font-outfit)', fontSize: '2rem', marginBottom: '1rem' }}>Need strategic IT advice?</h3>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Our team at B&T Consulting is ready to design and execute a tailored technology strategy that moves your business forward. Let's discuss your next project.
              </p>
              <Link href="/#contact" className="btn btn-primary" style={{ backgroundColor: '#ffffff', color: 'var(--color-primary)' }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-secondary)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; }}
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </>
  );
}
