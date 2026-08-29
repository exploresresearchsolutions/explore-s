import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import Seo from '../../components/Seo';
import CareerForm from './CareerForm';
import { fadeUp } from '../../utils/animations';

const CULTURE = [
  {
    title: 'Our Culture',
    desc: 'Explore S Research Solutions focuses on finding the perfect match between organisational and personal aspirations. We constantly endeavour to build an employee-first culture, developing an environment of mutual respect.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
  },
  {
    title: 'Career Growth',
    desc: 'We provide the right opportunities, coaching, and mentorship to accelerate career advancement for all professionals, steadily enabling top talent to grow from within.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18" /><polyline points="17 6 23 6 23 12" /></svg>
    ),
  },
  {
    title: 'Fun At Work',
    desc: 'Engaged employees are core to our business success. We believe in making Explore S Research Solutions a great place to work by keeping our employees motivated and inspired throughout their journey.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
    ),
  },
];

const OPENINGS = [
  { role: 'Research Counselor / Senior Research Counselor', dept: 'Research' },
  { role: 'Academic Content Writer', dept: 'Content & Editorial' },
  { role: 'Business Development Associate — Inside Sales', dept: 'Inside Sales' },
  { role: 'Sales Trainer', dept: 'Training' },
  { role: 'Client Relations Executive', dept: 'Client Relations' },
  { role: 'B2B Sales Executive', dept: 'B2B Sales' },
  { role: 'Executive Assistant to Director', dept: 'Operations' },
];

const Career = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '[data-career-rise]', { stagger: 0.08 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <>
      <Seo
        title="Careers | Explore S Research Solutions"
        description="Build your career with Explore S Research Solutions. Explore openings for research counselors, content writers, business development, sales and client relations roles."
        path="/career"
        keywords="careers, jobs, research counselor, academic content writer, business development, Explore S Research Solutions"
      />
      <Header parentMenu="home" topbarEnable="enable" />

      <div className="react-wrapper" ref={rootRef}>
        <div className="react-wrapper-inner">
          {/* ── Hero ── */}
          <section className="es-section es-svc-banner">
            <div className="es-svc-banner__blob" aria-hidden="true" />
            <div className="container">
              <div className="es-svc-banner__inner">
                <h1 className="es-svc-banner__h1" data-career-rise>
                  The career you're looking for is <span className="es-svc-banner__accent">right around the corner</span>
                </h1>
                <p className="es-svc-banner__lead" data-career-rise>
                  With Explore S Research Solutions, you'll discover how much more you can do. You'll have a job,
                  and you'll make money — but when you work here, you'll find that you're doing so much more than
                  just earning a paycheck. So don't settle for a job that leaves you feeling unfulfilled and drags
                  you down every Monday morning.
                </p>
                <div className="es-svc-banner__ctas" data-career-rise>
                  <a href="#apply" className="es-btn es-btn--primary">Get on Board Today!</a>
                  <a href="#openings" className="es-btn es-btn--outline">View Openings</a>
                </div>
              </div>
            </div>
          </section>

          {/* ── Culture / Growth / Fun ── */}
          <section className="es-section es-career-culture">
            <div className="container">
              <div className="es-section__head es-section__head--center">
                <span className="es-eyebrow" data-career-rise>Life at Explore S</span>
                <h2 className="es-h2" data-career-rise>Our Culture, Career Growth &amp; Fun At Work</h2>
              </div>
              <ul className="es-career-culture__grid" role="list">
                {CULTURE.map((c) => (
                  <li key={c.title} className="es-values__card" data-career-rise>
                    <span className="es-values__icon" aria-hidden="true">{c.icon}</span>
                    <h3 className="es-values__title">{c.title}</h3>
                    <p className="es-values__desc">{c.desc}</p>
                  </li>
                ))}
              </ul>
              <div className="es-career-life" data-career-rise>
                <h3 className="es-h3">Life @ Explore S Research Solutions</h3>
                <p className="es-section__lead">
                  At Explore S Research Solutions, work and joy come together effortlessly. Through our awards,
                  celebrations, and outings, we create a vibrant and fulfilling workplace culture where
                  achievements are recognised and connections are strengthened.
                </p>
              </div>
            </div>
          </section>

          {/* ── Current openings ── */}
          <section className="es-section es-career-openings" id="openings">
            <div className="container">
              <div className="es-section__head es-section__head--center">
                <span className="es-eyebrow" data-career-rise>We're Hiring</span>
                <h2 className="es-h2" data-career-rise>Current Openings</h2>
              </div>
              <ul className="es-career__grid es-career-openings__grid" role="list">
                {OPENINGS.map((o, i) => (
                  <li key={o.role} className="es-career-card" data-career-rise>
                    <div className="es-career-card__top">
                      <span className="es-career-card__num">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <span className="es-career-card__dept">{o.dept}</span>
                    <h3 className="es-career-card__title">{o.role}</h3>
                    <div className="es-career-card__footer">
                      <a href="#apply" className="es-career-card__cta">Apply Now ➔</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Application form ── */}
          <section className="es-section es-career-apply" id="apply">
            <div className="container">
              <div className="es-section__head es-section__head--center">
                <span className="es-eyebrow" data-career-rise>Join the team</span>
                <h2 className="es-h2" data-career-rise>We Are Hiring! Kindly Fill the Form and We Will Revert!</h2>
              </div>
              <div className="es-career-apply__card" data-career-rise>
                <CareerForm />
              </div>
            </div>
          </section>

          {/* ── Career queries ── */}
          <section className="es-section es-section--tight es-career-queries">
            <div className="container">
              <div className="es-career-queries__card" data-career-rise>
                <h3 className="es-h3">Career Queries</h3>
                <p className="es-career-queries__line">
                  <span>Email:</span>{' '}
                  <a href="mailto:careers@exploreresearchsolutions.com">careers@exploreresearchsolutions.com</a>
                </p>
                <p className="es-career-queries__line">
                  <span>Phone:</span> [Number 1] | [Number 2] | [Number 3]
                </p>
                <Link to="/contact" className="es-btn es-btn--outline">Contact Us</Link>
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

export default Career;
