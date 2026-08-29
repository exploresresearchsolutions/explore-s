import React, { useRef, useLayoutEffect } from 'react';
import { fadeUp } from '../../utils/animations';

const VALUES = [
  {
    title: 'Accessibility',
    desc: 'Quality research guidance should have no limits — we open doors for every scholar, wherever they come from.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    desc: 'Every engagement is ethical, transparent and grounded in genuine academic integrity.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    desc: 'A technology-first approach that keeps research support structured, modern and outcome-focused.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    title: 'Empowerment',
    desc: 'We help individuals unlock their full research potential and turn ideas into recognised work.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Commitment',
    desc: 'Seamless, personalised support from proposal writing through to doctoral completion.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const CoreValuesSection = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '[data-values-rise]', { stagger: 0.1 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section className="es-section es-values" ref={rootRef} aria-label="Our core values">
      <div className="container">
        <div className="es-section__head es-section__head--center">
          <span className="es-eyebrow" data-values-rise>What we stand for</span>
          <h2 className="es-h2" data-values-rise>Empowering Research Through Innovation &amp; Values</h2>
          <p className="es-section__lead" data-values-rise>
            Explore S Research Solutions is built on five core values that shape every interaction —
            ensuring a researcher-first experience that is personalised, rigorous and ethical. We are
            not just building academic pathways; we are creating opportunities for individuals to unlock
            their full research potential.
          </p>
        </div>

        <ul className="es-values__grid" role="list">
          {VALUES.map((v) => (
            <li key={v.title} className="es-values__card" data-values-rise>
              <span className="es-values__icon" aria-hidden="true">{v.icon}</span>
              <h3 className="es-values__title">{v.title}</h3>
              <p className="es-values__desc">{v.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CoreValuesSection;
