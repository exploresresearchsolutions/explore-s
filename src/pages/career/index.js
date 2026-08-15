import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import Seo from '../../components/Seo';

const openings = [
  {
    role: 'Senior Research Consultant',
    type: 'Full-time · Gurgaon / Remote',
    dept: 'Research',
    icon: '🎓',
    desc: 'Guide scholars through thesis, synopsis and publication milestones.',
  },
  {
    role: 'AI & Machine Learning Trainer',
    type: 'Full-time · Remote',
    dept: 'Training',
    icon: '🤖',
    desc: 'Deliver live Python, ML and data-science bootcamps to researchers.',
  },
  {
    role: 'Academic Editor',
    type: 'Full-time · Gurgaon',
    dept: 'Editorial',
    icon: '✍️',
    desc: 'Proofread, format and elevate manuscripts to journal standards.',
  },
  {
    role: 'Digital Marketing Strategist',
    type: 'Full-time · Remote',
    dept: 'Marketing',
    icon: '📈',
    desc: 'Run live masterclasses and manage performance-marketing campaigns.',
  },
];

const Career = () => (
  <>
    <Seo
      title="Careers | Explore S Research Solutions"
      description="Build your career with Explore S Research Solutions. Explore openings for research consultants, AI trainers, academic editors and digital marketing strategists."
      path="/career"
      keywords="careers, jobs, research consultant, AI trainer, academic editor, Explore S Research Solutions"
    />
    <Header parentMenu="home" topbarEnable="enable" />

    <div className="react-wrapper">
      <div className="react-wrapper-inner">
        <section className="es-section es-svc-banner">
          <div className="es-svc-banner__blob" aria-hidden="true" />
          <div className="es-svc-banner__inner">
            <h1 className="es-svc-banner__h1">
              Build Your <span className="es-svc-banner__accent">Career</span>
            </h1>
            <p className="es-svc-banner__lead">
              Join a team empowering scholars, engineers and professionals worldwide.
            </p>
          </div>
        </section>

        <section className="es-section">
          <div className="container">
            <div className="es-section__head es-section__head--center">
              <span className="es-tag">We're Hiring</span>
              <h2 className="es-h2">Current Openings</h2>
            </div>

            <ul className="es-career__grid" role="list">
              {openings.map((o, i) => (
                <li key={o.role} className="es-career-card">
                  <div className="es-career-card__top">
                    <span className="es-career-card__icon" aria-hidden="true">{o.icon}</span>
                    <span className="es-career-card__num">0{i + 1}</span>
                  </div>
                  <span className="es-career-card__dept">{o.dept}</span>
                  <h3 className="es-career-card__title">{o.role}</h3>
                  <p className="es-career-card__desc">{o.desc}</p>
                  <div className="es-career-card__footer">
                    <span className="es-career-card__type">{o.type}</span>
                    <Link to="/contact" className="es-career-card__cta">Apply Now ➔</Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>

    <Footer />
    <ScrollToTop />
  </>
);

export default Career;
