import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import Seo from '../../components/Seo';
import { fadeUp } from '../../utils/animations';

const HERO_STATS = [
  { value: '[X,XXX]+', label: 'Trusted Clients' },
  { value: '[XX]+', label: 'Countries' },
  { value: '[XX]+', label: 'Existing Partners' },
  { value: '[XXX]+', label: 'Services' },
];

const PROGRAM_OFFERS = [
  'Global Reach',
  'Exclusive Service Offerings',
  'Lucrative Commission Model',
  'Comprehensive Onboarding & Support',
  'Credibility and Trust',
];

const WHY_PARTNER = [
  { title: 'Audience', desc: 'Access an active daily user base.' },
  { title: 'Potential Client Base', desc: 'Tap into a large, engaged researcher community.' },
  { title: 'ROI', desc: 'Attractive returns on your investment.' },
  { title: 'Reach', desc: "Expand your brand's academic footprint." },
  { title: 'Trainers', desc: 'Guidance from experienced academic trainers.' },
  { title: 'Mentorship', desc: 'Ongoing mentorship from our elite educationists.' },
  { title: 'Exposure', desc: 'Visibility across our products and services.' },
  { title: 'Growth', desc: 'Support for scaling your working professional base.' },
  { title: '24x7 Support', desc: 'Round-the-clock expert assistance.' },
];

const PARTNERS = [
  { name: '[Partner Name]', city: '[City]', quote: 'One-line testimonial about the partnership impact.' },
  { name: '[Partner Name]', city: '[City]', quote: 'One-line testimonial about the partnership impact.' },
  { name: '[Partner Name]', city: '[City]', quote: 'One-line testimonial about the partnership impact.' },
];

const MAP_STATS = [
  { value: '[XX]', label: 'Countries' },
  { value: '[XX]+', label: 'Universities' },
  { value: '[XX,XXX]+', label: 'Learners Empowered' },
];

const BecomeAPartner = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '[data-partner-rise]', { stagger: 0.08 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <>
      <Seo
        title="Become a Partner | Explore S Research Solutions"
        description="Join the Explore S Research Solutions Partner Program. Promote world-class research and doctoral support solutions, earn attractive commissions, and grow your academic service business globally."
        path="/become-a-partner"
        keywords="become a partner, research partner program, academic partnership, referral program, Explore S Research Solutions"
      />
      <Header parentMenu="home" topbarEnable="enable" />

      <div className="react-wrapper" ref={rootRef}>
        <div className="react-wrapper-inner">
          {/* ── Hero ── */}
          <section className="es-section es-svc-banner">
            <div className="es-svc-banner__blob" aria-hidden="true" />
            <div className="container">
              <div className="es-svc-banner__inner">
                <h1 className="es-svc-banner__h1" data-partner-rise>
                  Become our <span className="es-svc-banner__accent">Research Partner</span>
                </h1>
                <p className="es-svc-banner__lead" data-partner-rise>
                  Join hands with a premier global research and academic solutions platform — and grow together.
                </p>
                <div data-partner-rise>
                  <Link to="/contact" className="es-btn es-btn--primary">Join Now</Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── All In One, One In All (stats) ── */}
          <section className="es-section es-partner-stats">
            <div className="container">
              <div className="es-section__head es-section__head--center">
                <span className="es-eyebrow" data-partner-rise>All In One, One In All</span>
                <h2 className="es-h2" data-partner-rise>A Partnership That Scales With You</h2>
              </div>
              <ul className="es-global__stats es-partner-stats__grid" role="list" data-partner-rise>
                {HERO_STATS.map((s) => (
                  <li key={s.label} className="es-global__stat">
                    <span className="es-global__value">{s.value}</span>
                    <span className="es-global__label">{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Program offers ── */}
          <section className="es-section es-partner-offers">
            <div className="container">
              <div className="es-section__head es-section__head--center">
                <span className="es-eyebrow" data-partner-rise>Partnership Program</span>
                <h2 className="es-h2" data-partner-rise>
                  Elevate Your Business with a Prestigious Partnership Program
                </h2>
                <p className="es-section__lead" data-partner-rise>
                  The Explore S Research Solutions Partner Program is a unique opportunity designed for
                  professionals and businesses looking to expand their academic and research service
                  offerings and increase revenue. By partnering with us, you can promote world-class
                  research and doctoral support solutions — including honorary doctorate facilitation —
                  to your clients. Here's what the program offers:
                </p>
              </div>
              <ul className="es-checklist" role="list" data-partner-rise>
                {PROGRAM_OFFERS.map((o) => (
                  <li key={o} className="es-checklist__item">
                    <span className="es-checklist__tick" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Why partner with us ── */}
          <section className="es-section es-partner-why">
            <div className="container">
              <div className="es-section__head es-section__head--center">
                <span className="es-eyebrow" data-partner-rise>The advantage</span>
                <h2 className="es-h2" data-partner-rise>Why Partner With Us</h2>
              </div>
              <ul className="es-values__grid es-partner-why__grid" role="list">
                {WHY_PARTNER.map((w) => (
                  <li key={w.title} className="es-values__card" data-partner-rise>
                    <h3 className="es-values__title">{w.title}</h3>
                    <p className="es-values__desc">{w.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Esteemed partners ── */}
          <section className="es-section es-partner-testi">
            <div className="container">
              <div className="es-section__head es-section__head--center">
                <span className="es-eyebrow" data-partner-rise>Our Esteemed Partners</span>
                <h2 className="es-h2" data-partner-rise>Trusted by Partners Worldwide</h2>
                <p className="es-section__lead" data-partner-rise>
                  Our integrated partner program boosts digital enablement, improves business results,
                  and helps you scale.
                </p>
              </div>
              <ul className="es-partner-testi__grid" role="list">
                {PARTNERS.map((p, i) => (
                  <li key={i} className="es-partner-testi__card" data-partner-rise>
                    <span className="es-partner-testi__stars" aria-hidden="true">★★★★★</span>
                    <p className="es-partner-testi__quote">"{p.quote}"</p>
                    <div className="es-partner-testi__author">
                      <span className="es-partner-testi__avatar" aria-hidden="true">P</span>
                      <span>
                        <strong>{p.name}</strong>
                        <span className="es-partner-testi__city">{p.city}</span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Collective power / world reach ── */}
          <section className="es-section es-global es-partner-reach">
            <div className="container">
              <div className="es-section__head es-section__head--center">
                <span className="es-eyebrow" data-partner-rise>Collective power</span>
                <h2 className="es-h2" data-partner-rise>
                  We Harness the Collective Power of Our Partners
                </h2>
              </div>
              <ul className="es-global__stats" role="list" data-partner-rise>
                {MAP_STATS.map((s) => (
                  <li key={s.label} className="es-global__stat">
                    <span className="es-global__value">{s.value}</span>
                    <span className="es-global__label">{s.label}</span>
                  </li>
                ))}
              </ul>
              <div className="es-cta-band" data-partner-rise>
                <div className="es-cta-band__inner">
                  <h3 className="es-cta-band__title">
                    Ready to grow together? Become an Explore S Research Partner today.
                  </h3>
                  <Link to="/contact" className="es-btn es-btn--accent">Apply to Partner</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default BecomeAPartner;
