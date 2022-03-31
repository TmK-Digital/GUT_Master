import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import AboutContent from "../components/about-contents/AboutContent";


const About = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Generational Union | About Us</title>
        <meta
          name="description"
          content="About page of Generation Union."
        />
      </MetaTags>
      <LayoutTwo theme="black">
        {/* breadcrumb */}
        <Breadcrumb title="About Generational Union" />
        {/* about content */}
        <AboutContent />
      </LayoutTwo>
    </Fragment>
  );
};

export default About;
