import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../utils/animations';
import ContactForm from './ContactForm';
import ContactDetailsSection from './ContactDetailsSection';
import GoogleMapSection from './GoogleMapSection';

const QUICK_LINKS = [
  'PhD Admission Guidance',
  'Research Guidance & Thesis Support',
  'Dissertation Guidance & Editorial Support',
  'Honorary Doctorate Facilitation',
  'Law Admission Assistance (LLB / LLM / BA-LLB / BBA-LLB)',
  'UG / PG Admission Assistance',
  'Biography Writing Service',
  'Management Courses (DBA / MBA)',
];

const ContactMain = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '[data-contact-rise]', { stagger: 0.12 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <div ref={rootRef}>
      {/* ── Hero Band ── */}
      <section className="es-section es-contact-hero" aria-label="Contact Explore S hero">
        <div className="es-contact-hero__blob" aria-hidden="true"></div>
        <div className="container">
          <div className="es-contact-hero__inner">
            <span className="es-eyebrow" data-contact-rise>Reach Out</span>
            <h1 className="es-contact-hero__h1" data-contact-rise>
              We're Glad You <span className="es-contact-hero__accent">Found Us!</span>
            </h1>
            <p className="es-contact-hero__lead" data-contact-rise>
              We hope you find the information here helpful. If you have any questions or concerns,
              please don't hesitate to reach out.
            </p>
            <div className="es-contact-hero__chips" data-contact-rise>
              <span className="es-contact-hero__chip">
                <span className="es-contact-hero__chip-dot" aria-hidden="true"></span>
                Quick Response
              </span>
              <span className="es-contact-hero__chip">
                <span className="es-contact-hero__chip-dot" aria-hidden="true"></span>
                Free Consultation
              </span>
              <span className="es-contact-hero__chip">
                <span className="es-contact-hero__chip-dot" aria-hidden="true"></span>
                100% Confidential
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Info + Map ── */}
      <section className="es-section es-contact" aria-label="Contact form and details">
        <div className="container">
          {/* ── Split card: gradient info panel (left) + form (right) ── */}
          <div className="es-contact__card" data-contact-rise>
            <ContactDetailsSection />
            <div className="es-contact__form-panel">
              <ContactForm />
            </div>
          </div>

          {/* ── Full-width map ── */}
          <div className="es-contact__map" data-contact-rise>
            <GoogleMapSection />
          </div>
        </div>
      </section>

      {/* ── Mission statement + quick links ── */}
      <section className="es-section es-section--tight es-contact-more" aria-label="Our mission and quick links">
        <div className="container">
          <div className="es-contact-more__mission" data-contact-rise>
            <span className="es-eyebrow">Our mission statement</span>
            <h2 className="es-h3">Our mission is to help you grow and thrive with your potential.</h2>
            <p className="es-section__lead">
              Our goal is to help you find the answers and resources you need for your research journey,
              so if there is something specific you're looking for, please let us know.
            </p>
          </div>

          <div className="es-contact-more__links" data-contact-rise>
            <h3 className="es-h3">Quick Links</h3>
            <ul className="es-quicklinks" role="list">
              {QUICK_LINKS.map((q) => (
                <li key={q}>
                  <Link to="/services" className="es-quicklinks__item">
                    <span className="es-quicklinks__dot" aria-hidden="true"></span>
                    {q}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMain;
