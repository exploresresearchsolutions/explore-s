import React from "react";

import AboutPart from './AboutSection';
import CoreValuesSection from './CoreValuesSection';
import MissionVisionSection from './MissionVisionSection';
import GlobalPresenceSection from './GlobalPresenceSection';
import Testimonial from './TestimonialSection';

const AboutMain = () => {
  return (
    <>
      <AboutPart />

      <CoreValuesSection />

      <MissionVisionSection />

      <GlobalPresenceSection />

      <Testimonial />
    </>
  );
};

export default AboutMain;
