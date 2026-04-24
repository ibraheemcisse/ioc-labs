export default function App() {
  return (
    <div style={{fontFamily: 'monospace', background: '#0f1419', color: '#e6edf3', minHeight: '100vh'}}>
      <section style={{padding: '120px 24px 80px', borderBottom: '1px solid #21262d', maxWidth: '768px', margin: '0 auto'}}>
        <h1 style={{fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 'bold', lineHeight: 1.2, marginBottom: '32px'}}>
          Your cluster looks healthy.<br/>
          <span style={{color: '#00d9ff'}}>It might not be.</span>
        </h1>
        <p style={{color: '#8b949e', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.8, marginBottom: '48px'}}>
          Hidden failures in EKS clusters don't announce themselves.
          They wait until a pod restarts, a volume reattaches, or a
          deployment scales — then you have an incident with no obvious cause.
        </p>
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
          <a href="https://calendly.com/ibrahim-umar-cisse/30min" target="_blank" rel="noopener noreferrer"
            style={{background: '#00d9ff', color: '#0f1419', padding: '14px 28px', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.95rem'}}>
            Book a 30-min diagnostic
          </a>
          <a href="https://linkedin.com/in/ibraheemcisse" target="_blank" rel="noopener noreferrer"
            style={{border: '1px solid #30363d', color: '#e6edf3', padding: '14px 28px', textDecoration: 'none', fontSize: '0.95rem'}}>
            DM on LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
