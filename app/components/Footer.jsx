import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-surface)', padding: '4rem 0 2rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
            <div>
                <Link href="/" className="logo" style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
                    B&T <span style={{ fontWeight: 300, color: 'rgba(255,255,255,0.7)' }}>Consulting</span>
                </Link>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>Strategic IT solutions for the modern enterprise.</p>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Privacy Policy</Link>
                <Link href="/terms" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Terms of Service</Link>
                <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>LinkedIn</Link>
            </div>
        </div>
        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
            <p>&copy; 2026 B&T Consulting. All rights reserved.</p>
        </div>
    </footer>
  );
}
