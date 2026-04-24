export default function App() {
  return (
    <div style={{fontFamily: 'monospace', background: '#0f1419', color: '#e6edf3', minHeight: '100vh'}}>

      {/* Hero */}
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

      {/* Video */}
      <section style={{padding: '80px 24px', borderBottom: '1px solid #21262d', maxWidth: '768px', margin: '0 auto'}}>
        <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
          <iframe
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '1px solid #21262d'}}
            src="https://www.youtube.com/embed/wemB4mq58Nk"
            title="EKS Cluster Hidden Failure Demo"
            allowFullScreen
          />
        </div>
      </section>

      {/* Example */}
      <section style={{padding: '80px 24px', borderBottom: '1px solid #21262d', maxWidth: '768px', margin: '0 auto'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '32px'}}>This is what it looks like</h2>
        <p style={{color: '#8b949e', lineHeight: 1.9, fontSize: '1.05rem'}}>
          EBS CSI controller. 11 restarts. AccessDenied on every credential request.
          No alert fired. Postgres PVC already bound — nothing broke immediately.
          <br/><br/>
          Three days later postgres restarts. Volume reattachment fails.
          Production incident. No warning.
        </p>
      </section>

      {/* What I Do */}
      <section style={{padding: '80px 24px', borderBottom: '1px solid #21262d', background: 'rgba(255,255,255,0.02)', maxWidth: '768px', margin: '0 auto'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '48px'}}>What happens in a session</h2>
        {['Structured health check across all system components',
          'Root cause identified — not just symptoms',
          'Fix path and prevention strategy documented'].map((item, i) => (
          <div key={i} style={{display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start'}}>
            <span style={{color: '#00d9ff', fontWeight: 'bold', flexShrink: 0}}>→</span>
            <span style={{color: '#8b949e', fontSize: '1.05rem'}}>{item}</span>
          </div>
        ))}
      </section>

      {/* Offer */}
      <section style={{padding: '80px 24px', borderBottom: '1px solid #21262d', maxWidth: '768px', margin: '0 auto'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '48px'}}>Two ways to work together</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px'}}>
          <div style={{border: '1px solid #21262d', padding: '32px'}}>
            <h3 style={{color: '#00d9ff', fontWeight: 'bold', marginBottom: '12px'}}>30-min diagnostic — $100</h3>
            <p style={{color: '#8b949e', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.7}}>
              Starts with a free 15-min discovery call.<br/>
              Payment via Wise before work begins.
            </p>
            <a href="https://calendly.com/ibrahim-umar-cisse/30min" target="_blank" rel="noopener noreferrer"
              style={{display: 'block', textAlign: 'center', border: '1px solid #30363d', color: '#e6edf3', padding: '12px', textDecoration: 'none', fontSize: '0.9rem'}}>
              Book now
            </a>
          </div>
          <div style={{border: '1px solid #00d9ff', padding: '32px', background: 'rgba(0,217,255,0.03)'}}>
            <h3 style={{color: '#00d9ff', fontWeight: 'bold', marginBottom: '12px'}}>Full cluster audit — $400</h3>
            <p style={{color: '#8b949e', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.7}}>
              Free scoping call first.<br/>
              Payment via Wise once scope is agreed.
            </p>
            <a href="https://calendly.com/ibrahim-umar-cisse/30min" target="_blank" rel="noopener noreferrer"
              style={{display: 'block', textAlign: 'center', background: '#00d9ff', color: '#0f1419', padding: '12px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold'}}>
              Get started
            </a>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section style={{padding: '64px 24px', borderBottom: '1px solid #21262d', maxWidth: '768px', margin: '0 auto'}}>
        <div style={{color: '#8b949e', fontSize: '0.9rem', lineHeight: 2.2}}>
          <p>15 production incidents documented end-to-end</p>
          <p>
            <a href="https://github.com/ibraheemcisse/aws-terraform-platform" target="_blank" rel="noopener noreferrer"
              style={{color: '#00d9ff', textDecoration: 'none'}}>
              github.com/ibraheemcisse/aws-terraform-platform ↗
            </a>
          </p>
          <p>AWS Community Builder · CKA · Terraform Associate</p>
          <p>9,000+ engineers reached on LinkedIn in 48 hours</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{padding: '64px 24px', maxWidth: '768px', margin: '0 auto'}}>
        <div style={{color: '#8b949e', fontSize: '0.85rem', lineHeight: 2}}>
          <p>Also available: technical writing, architecture diagrams, runbooks alongside real engineering work.</p>
          <p>Open to full-time and contract SRE / DevOps / Platform Engineering roles. Remote or KL-based.</p>
          <div style={{marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #21262d'}}>
            <a href="mailto:ibrahim.umar.cisse@gmail.com" style={{color: '#00d9ff', textDecoration: 'none'}}>
              ibrahim.umar.cisse@gmail.com
            </a>
            {' · '}
            <a href="https://ioc-labs.com" style={{color: '#8b949e', textDecoration: 'none'}}>
              ioc-labs.com
            </a>
            {' · '}
            <a href="https://linkedin.com/in/ibraheemcisse" style={{color: '#8b949e', textDecoration: 'none'}}>
              LinkedIn
            </a>
            {' · '}
            <a href="https://github.com/ibraheemcisse" style={{color: '#8b949e', textDecoration: 'none'}}>
              GitHub
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
