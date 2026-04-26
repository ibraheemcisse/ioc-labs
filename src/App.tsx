export default function App() {
  return (
    <div style={{fontFamily: 'monospace', background: '#0f1419', color: '#e6edf3', minHeight: '100vh'}}>

      {/* Hero */}
      <section style={{padding: '120px 24px 80px', borderBottom: '1px solid #21262d', maxWidth: '768px', margin: '0 auto'}}>
        <h1 style={{fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 'bold', lineHeight: 1.2, marginBottom: '32px'}}>
          Your cluster looks healthy.<br/>
          <span style={{color: '#00d9ff'}}>It might not be.</span>
        </h1>
        <p style={{color: '#8b949e', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.8, marginBottom: '16px'}}>
          Hidden failures in EKS clusters don't announce themselves.
          They wait until a pod restarts, a volume reattaches, or a
          deployment scales — then you have an incident with no obvious cause.
        </p>
        <p style={{color: '#e6edf3', fontSize: '1rem', maxWidth: '600px', lineHeight: 1.8, marginBottom: '48px', fontStyle: 'italic'}}>
          Most engineers find out something was broken when it causes an outage.
          I find it before that.
        </p>
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center'}}>
          <a href="https://calendly.com/ibrahim-umar-cisse/30min" target="_blank" rel="noopener noreferrer"
            style={{background: '#00d9ff', color: '#0f1419', padding: '14px 28px', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.95rem'}}>
            Book a 30-min diagnostic
          </a>
          <a href="https://linkedin.com/in/ibraheemcisse" target="_blank" rel="noopener noreferrer"
            style={{border: '1px solid #30363d', color: '#e6edf3', padding: '14px 28px', textDecoration: 'none', fontSize: '0.95rem'}}>
            DM on LinkedIn
          </a>
          <a href="https://github.com/ibraheemcisse/aws-terraform-platform/blob/main/resume.md" target="_blank" rel="noopener noreferrer"
            style={{border: '1px solid #30363d', color: '#8b949e', padding: '14px 28px', textDecoration: 'none', fontSize: '0.95rem'}}>
            About me
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
        <p style={{color: '#8b949e', lineHeight: 1.9, fontSize: '1.05rem', marginBottom: '32px'}}>
          EBS CSI controller. 11 restarts. AccessDenied on every credential request.
          No alert fired. Postgres PVC already bound — nothing broke immediately.
          <br/><br/>
          Three days later postgres restarts. Volume reattachment fails.
          Production incident. No warning.
        </p>
        <p style={{color: '#e6edf3', fontSize: '0.95rem', lineHeight: 1.8, borderLeft: '2px solid #00d9ff', paddingLeft: '16px'}}>
          Most of these failures are invisible until a pod restarts, a volume needs
          to reattach, or a deployment scales under load. By then it is already an incident.
        </p>
      </section>

      {/* Real Incidents */}
      <section style={{padding: '80px 24px', borderBottom: '1px solid #21262d', background: 'rgba(0,217,255,0.02)', maxWidth: '768px', margin: '0 auto'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '48px'}}>Real problems I have solved in production</h2>
        {[
          'Resolved cluster-wide failure affecting live trade execution in under 1 hour — published blameless postmortem adopted as team standard',
          'Identified silent CI/CD pipeline reporting success while failing — eliminated invisible failure class across 12 production servers, reduced deployment failures by 83%',
          'Cut incident investigation time from 2 hours to 15 minutes in live forex platform — L1 teams resolved issues without escalation',
          'Caught EBS CSI CrashLoopBackOff after Pod Identity migration — 11 restarts, no alert fired, would have caused production incident on next postgres restart'
        ].map((item, i) => (
          <div key={i} style={{display: 'flex', gap: '16px', marginBottom: '28px', alignItems: 'flex-start'}}>
            <span style={{color: '#00d9ff', fontWeight: 'bold', flexShrink: 0}}>→</span>
            <span style={{color: '#8b949e', fontSize: '1rem', lineHeight: 1.8}}>{item}</span>
          </div>
        ))}
      </section>

      {/* What I Do */}
      <section style={{padding: '80px 24px', borderBottom: '1px solid #21262d', maxWidth: '768px', margin: '0 auto'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '48px'}}>What happens in a session</h2>
        {[
          'Structured health check across all system components — not just application pods',
          'Root cause identified — not just symptoms',
          'Fix path and prevention strategy documented so it does not happen again'
        ].map((item, i) => (
          <div key={i} style={{display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start'}}>
            <span style={{color: '#00d9ff', fontWeight: 'bold', flexShrink: 0}}>→</span>
            <span style={{color: '#8b949e', fontSize: '1.05rem'}}>{item}</span>
          </div>
        ))}
      </section>

      {/* Who This Is For */}
      <section style={{padding: '80px 24px', borderBottom: '1px solid #21262d', background: 'rgba(255,255,255,0.02)', maxWidth: '768px', margin: '0 auto'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '48px'}}>This is for you if</h2>
        {[
          'You run EKS in production without a dedicated SRE or platform team',
          'Your cluster looks fine but something feels off and you cannot pin it down',
          'You have had an incident with no obvious cause and you are not confident it will not happen again',
          'You are a startup that cannot afford a full-time platform engineer but needs production-grade reliability'
        ].map((item, i) => (
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
            <h3 style={{color: '#00d9ff', fontWeight: 'bold', marginBottom: '12px'}}>30-min diagnostic</h3>
            <p style={{color: '#00d9ff', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '8px'}}>First session $50</p>
            <p style={{color: '#8b949e', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.7}}>
              You bring the error. I tell you where to look.<br/>
              If I find nothing actionable — it is free.
            </p>
            <a href="https://calendly.com/ibrahim-umar-cisse/30min" target="_blank" rel="noopener noreferrer"
              style={{display: 'block', textAlign: 'center', border: '1px solid #30363d', color: '#e6edf3', padding: '12px', textDecoration: 'none', fontSize: '0.9rem'}}>
              Book now
            </a>
          </div>
          <div style={{border: '1px solid #00d9ff', padding: '32px', background: 'rgba(0,217,255,0.03)'}}>
            <h3 style={{color: '#00d9ff', fontWeight: 'bold', marginBottom: '12px'}}>Full cluster audit</h3>
            <p style={{color: '#00d9ff', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '8px'}}>$400</p>
            <p style={{color: '#8b949e', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.7}}>
              Free scoping call first.<br/>
              Full health check. Written report.<br/>
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
          <p>32,000+ engineers reached on LinkedIn in 72 hours</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{padding: '64px 24px', maxWidth: '768px', margin: '0 auto'}}>
        <div style={{color: '#8b949e', fontSize: '0.85rem', lineHeight: 2}}>
          <p>Also available: technical writing, architecture diagrams, runbooks alongside real engineering work.</p>
          <p>Open to full-time and contract SRE / DevOps / Cloud Engineering roles. Remote or relocation.</p>
          <div style={{marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #21262d'}}>
            <a href="mailto:ibrahimcisse@ioc-labs.com" style={{color: '#00d9ff', textDecoration: 'none'}}>
              ibrahimcisse@ioc-labs.com
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
