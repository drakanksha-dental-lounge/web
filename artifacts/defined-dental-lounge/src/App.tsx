import { useState, type FormEvent } from 'react';
import { ArrowRight, Sparkles, ScanLine, Smile, ShieldCheck, MoveUpRight, Phone } from 'lucide-react';

function Mark() {
  return (
    <img className="brand-mark" src={`${import.meta.env.BASE_URL}tooth-emblem-transparent.png`} width={40} height={40} alt="" aria-hidden="true" />
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return <div className="brand" aria-label="Defined Dental Lounge"><Mark /><div className="brand-name">DEFINED<span>DENTAL LOUNGE</span></div></div>;
}

function Home() {
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Defined Dental Lounge home"><Brand /></a>
        <a className="header-phone" href="tel:8121087111" aria-label="Call Defined Dental Lounge at 81210 87111"><Phone size={14} strokeWidth={1.7} /><span>81210 87111</span></a>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu">{menuOpen ? 'Close' : 'Menu'}</button>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#care" onClick={closeMenu}>Care</a>
          <a href="#visit" onClick={closeMenu}>Your first visit</a>
          <a className="nav-cta" href="#request" onClick={closeMenu}>Request a visit <ArrowRight size={13} /></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow fade-up">A more considered kind of care</div>
          <h1 className="fade-up delay">A little more<br /><em>at ease.</em></h1>
          <p className="hero-intro fade-up delay">Thoughtful dentistry, shaped around you. A place to feel heard, understand your options, and take care at your own pace.</p>
          <div className="hero-actions fade-up delay">
            <a className="button-gold" href="#request">Begin a conversation <ArrowRight size={14} /></a>
            <a className="text-link" href="#approach">Discover our approach</a>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="A calm, warmly detailed lounge with olive and limestone tones" />
        <div className="hero-seal">carefully<small>CONSIDERED</small></div>
        <div className="hero-index">DEFINED · DENTAL LOUNGE</div>
      </section>

      <div className="marquee" aria-hidden="true"><div>{Array.from({ length: 4 }, (_, index) => <span key={index}>Diagnose <i>·</i> Design <i>·</i> Deliver <i>·</i> Thoughtful care, by design <i>·</i></span>)}</div></div>

      <section className="section intro-grid" id="approach">
        <div>
          <div className="section-label">01 — A different feeling</div>
          <h2>Good care begins<br />with being <em>heard.</em></h2>
        </div>
        <div>
          <p className="intro-copy">The best dental experience is one that makes room for you. For your questions, your comfort, and the kind of outcome that feels right in your life. We believe in looking closely, explaining clearly, and making a plan together—without rushing the conversation.</p>
          <div className="intro-note">“Care should feel considered at every step—not just at the end.”</div>
        </div>
      </section>

      <section className="services" id="care">
        <div className="service-head">
          <div><div className="section-label">02 — Thoughtful dentistry</div><h2 className="section-title">Care for the whole<br />picture.</h2></div>
          <p>Every smile has its own story. Explore the kinds of care we can discuss together, then tell us what matters most to you.</p>
        </div>
        <div className="service-grid">
          <article className="service-row"><span className="service-number">01</span><h3>Preventive care</h3><p>Regular check-ups, cleaning, and a clear view of your oral health—built around the long game.</p><ShieldCheck className="service-icon" strokeWidth={1.2} /></article>
          <article className="service-row"><span className="service-number">02</span><h3>Restorative dentistry</h3><p>Careful attention to function and comfort, with options explained before decisions are made.</p><ScanLine className="service-icon" strokeWidth={1.2} /></article>
          <article className="service-row"><span className="service-number">03</span><h3>Cosmetic dentistry</h3><p>Subtle, considered possibilities for a smile that feels like you—never a one-size-fits-all ideal.</p><Sparkles className="service-icon" strokeWidth={1.2} /></article>
          <article className="service-row"><span className="service-number">04</span><h3>Personalised consultations</h3><p>Time to talk through what you’re noticing, what you hope for, and what could come next.</p><Smile className="service-icon" strokeWidth={1.2} /></article>
        </div>
      </section>

      <section className="process" id="visit">
        <div className="process-heading"><div><div className="section-label">03 — Your first visit</div><h2 className="section-title">Start with a<br />conversation.</h2></div><a className="text-link" href="#request" style={{ color: '#414a37' }}>Request a first visit <ArrowRight size={13} /></a></div>
        <div className="steps">
          <article className="step"><span className="step-num">01 / Tell us</span><h3>What brings you here?</h3><p>Share what you’re looking for and any questions you’d like to bring along. There’s no need to have it all figured out.</p></article>
          <article className="step"><span className="step-num">02 / Take a look</span><h3>Understand the picture</h3><p>We’ll learn about your oral health and listen to what matters to you before talking through possible next steps.</p></article>
          <article className="step"><span className="step-num">03 / Make a plan</span><h3>Choose what feels right</h3><p>Your options are explained clearly, so you can make informed decisions at a pace that feels comfortable.</p></article>
        </div>
      </section>

      <section className="appointment" id="request">
        <div className="appointment-layout">
          <div className="appointment-copy">
            <div className="section-label">04 — Start here</div>
            <h2>Let’s begin<br />with a hello.</h2>
            <p>Share a few details and what you’re hoping to discuss. This form helps you prepare a request on this device.</p>
            <div className="request-note">This is not sent to the clinic and does not confirm an appointment. No booking or clinic contact service is connected here.</div>
          </div>
          <form className="request-form" onSubmit={handleSubmit} onChange={() => sent && setSent(false)}>
            <div className="field"><label htmlFor="request-name">Your name</label><input required id="request-name" name="name" autoComplete="name" placeholder="Name" data-testid="input-name" /></div>
            <div className="field"><label htmlFor="request-email">Email address</label><input required id="request-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" data-testid="input-email" /></div>
            <div className="field"><label htmlFor="request-type">What would you like to discuss?</label><select required id="request-type" name="care" defaultValue="" data-testid="select-care"><option value="" disabled>Select an area of care</option><option>Preventive care</option><option>Restorative dentistry</option><option>Cosmetic dentistry</option><option>First visit / consultation</option><option>Something else</option></select></div>
            <div className="field"><label htmlFor="request-time">A good time to reach you</label><select id="request-time" name="time" defaultValue="" data-testid="select-time"><option value="" disabled>Choose a preference</option><option>Morning</option><option>Afternoon</option><option>No preference</option></select></div>
            <div className="field full"><label htmlFor="request-note">Anything else you’d like us to know? <span>(optional)</span></label><textarea id="request-note" name="note" placeholder="A question, a concern, or simply where you'd like to begin." data-testid="input-note" /></div>
            <button className="button-gold" type="submit" data-testid="button-prepare-request">Prepare my request <ArrowRight size={14} /></button>
            {sent && <div className="request-status" role="status" data-testid="status-request">Your request details are ready on this page, but have not been sent. Please note or copy the details for your own use; there is no clinic contact or booking service connected here.</div>}
          </form>
        </div>
      </section>

      <section className="faq" id="questions">
        <div><div className="section-label">A few helpful notes</div><h2>Good to know.</h2><p className="intro-copy">A little clarity before you get in touch.</p></div>
        <div>
          <details className="faq-item"><summary>What should I include in my request?</summary><p>A short note about what you’d like to discuss is a helpful place to begin. Please avoid including sensitive medical or financial information here.</p></details>
          <details className="faq-item"><summary>Does submitting this form book an appointment?</summary><p>No. This page has no booking system and does not send information to the clinic. It only displays a local reminder that your request details are ready.</p></details>
          <details className="faq-item"><summary>What if I’m feeling nervous about dental care?</summary><p>You’re welcome to say so in your request. A first conversation can be a chance to share concerns and understand what to expect, without pressure to decide anything.</p></details>
          <details className="faq-item"><summary>Where is the clinic and when is it open?</summary><p>Defined Dental Lounge is in Kondapur, Hyderabad. Call us at <a href="tel:8121087111">81210 87111</a> to confirm opening hours.</p></details>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <Brand light />
          <div className="footer-note">Diagnose. Design.<br />Deliver with care.</div>
          <nav className="footer-nav" aria-label="Footer navigation"><a href="#approach">OUR APPROACH</a><a href="#care">CARE</a><a href="#visit">FIRST VISIT</a><a href="#request">REQUEST</a></nav>
        </div>
        <div className="footer-contact" aria-label="Clinic contact details">
          <a href="tel:8121087111">Call 81210 87111</a>
          <span>Kondapur, Hyderabad</span>
        </div>
        <div className="footer-bottom"><span>DEFINED DENTAL LOUNGE</span><span>Thoughtful care, by design.</span><a href="#home" aria-label="Back to top" style={{ color: 'inherit' }}>BACK TO TOP <MoveUpRight size={11} /></a></div>
      </footer>
    </main>
  );
}

function App() {
  return <Home />;
}

export default App;
