import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import Seo from '../../components/Seo';
import { ALL_BLOGS } from '../../data/blogs/index';

const Blogs = () => {
  const categories = [...new Set(ALL_BLOGS.map(({ meta }) => meta.category).filter(Boolean))];

  return (
    <>
      <Seo
        title="Blogs | Explore S Research Solutions"
        description="Read insightful articles on academic research, PhD admissions, thesis and dissertation writing, journal publication and more from Explore S Research Solutions."
        path="/blogs"
        keywords="academic blog, research articles, PhD admission, thesis tips, dissertation, journal publication"
      />
      <Header parentMenu="home" topbarEnable="enable" />

      <div className="react-wrapper">
        <div className="react-wrapper-inner">
          <section className="es-section es-svc-banner">
            <div className="es-svc-banner__blob" aria-hidden="true" />
            <div className="container">
              <div className="es-svc-banner__inner">
                <h1 className="es-svc-banner__h1">
                  Research, PhD &amp; <span className="es-svc-banner__accent">Academic Insights</span>
                </h1>
                <p className="es-svc-banner__lead">
                  Explore S Research Solutions Blogs — expert insights on research, PhD admissions,
                  thesis writing, journal publication and more.
                </p>
              </div>
            </div>
          </section>

          <section className="es-section es-blog">
            <div className="container">
              <div className="es-blog__layout">
                <div className="es-blog__main">
                  <ul className="es-blog__grid" role="list">
                    {ALL_BLOGS.map(({ meta: c }) => (
                      <li key={c.slug} className="es-blog__card">
                        <div className="es-blog__media" aria-hidden="true">
                          {c.coverImage && (
                            <img src={c.coverImage} alt="" className="es-blog__media-img" />
                          )}
                          <span className="es-blog__cat">{c.category}</span>
                          <span className="es-blog__headline">{c.headline}</span>
                        </div>
                        <div className="es-blog__body">
                          <h3 className="es-blog__title">{c.title}</h3>
                          {c.excerpt && <p className="es-blog__excerpt">{c.excerpt}</p>}
                          <Link to={`/blogs/${c.slug}`} className="es-blog__link">Read Article ➔</Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <aside className="es-blog__sidebar" aria-label="Blog sidebar">
                  {categories.length > 0 && (
                    <div className="es-blog__widget">
                      <h3 className="es-blog__widget-title">Categories</h3>
                      <ul className="es-blog__cats" role="list">
                        {categories.map((cat) => (
                          <li key={cat} className="es-blog__cat-item">{cat}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="es-blog__widget es-blog__widget--cta">
                    <h3 className="es-blog__widget-title">Have a research question?</h3>
                    <p className="es-blog__widget-text">
                      Connect with Explore S Research Solutions and get expert guidance for your academic journey.
                    </p>
                    <Link to="/contact" className="es-btn es-btn--accent">Request a Callback</Link>
                  </div>
                </aside>
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

export default Blogs;
