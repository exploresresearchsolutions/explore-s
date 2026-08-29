import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../utils/animations';

const STATS = [
  { value: '[XX]', label: 'Countries Served' },
  { value: '[XX]+', label: 'University Tie-ups' },
  { value: '[XX,XXX]+', label: 'Researchers Empowered' },
];

const OFFICES = [
  { type: 'Head Office', location: '[City, Country]', address: '[Address]', phone: '[Phone]', email: '[Email]' },
  { type: 'Regional Office', location: '[City, Country]', address: '[Address]', phone: '[Phone]', email: '[Email]' },
  { type: 'Regional Office', location: '[City, Country]', address: '[Address]', phone: '[Phone]', email: '[Email]' },
];

const GlobalPresenceSection = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '[data-global-rise]', { stagger: 0.1 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section className="es-section es-global" ref={rootRef} aria-label="Global presence">
      <div className="container">
        <div className="es-section__head es-section__head--center">
          <span className="es-eyebrow" data-global-rise>Our reach</span>
          <h2 className="es-h2" data-global-rise>Empowering Researchers Across the Globe</h2>
          <p className="es-section__lead" data-global-rise>
            Explore S Research Solutions is a growing global research-support platform, focused on
            recognising knowledge gained through experience and building a vibrant community of
            doctorates and aspiring researchers.
          </p>
        </div>

        <ul className="es-global__stats" role="list" data-global-rise>
          {STATS.map((s) => (
            <li key={s.label} className="es-global__stat">
              <span className="es-global__value">{s.value}</span>
              <span className="es-global__label">{s.label}</span>
            </li>
          ))}
        </ul>

        <div className="es-offices" data-global-rise>
          <h3 className="es-h3 es-offices__heading">Our Global Presence</h3>
          <ul className="es-offices__grid" role="list">
            {OFFICES.map((o, i) => (
              <li key={i} className="es-offices__card">
                <span className="es-offices__badge">{o.type}</span>
                <span className="es-offices__loc">{o.location}</span>
                <span className="es-offices__line">{o.address}</span>
                <span className="es-offices__line">{o.phone}</span>
                <span className="es-offices__line">{o.email}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="es-cta-band" data-global-rise>
          <div className="es-cta-band__inner">
            <h3 className="es-cta-band__title">
              Your Gateway to Doctoral and Research Success — Begin Your Research Journey Today
            </h3>
            <Link to="/contact" className="es-btn es-btn--accent">Join Our Community</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
