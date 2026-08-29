import React from 'react';
import { Link } from 'react-router-dom';
import IntroductionSection from './IntroductionSection';
import MainServicesSection from './MainServicesSection';
import DetailedOfferingsSection from './DetailedOfferingsSection';

const ServicesMain = () => {
    return (
        <>
            <IntroductionSection />
            <MainServicesSection />
            <DetailedOfferingsSection />

            <section className="es-section es-section--tight" aria-label="Service enquiry">
                <div className="container">
                    <div className="es-cta-band">
                        <div className="es-cta-band__inner">
                            <h3 className="es-cta-band__title">
                                Connect with Explore S Research Solutions — Share Your Details
                            </h3>
                            <Link to="/contact" className="es-btn es-btn--accent">Request a Callback</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesMain;
