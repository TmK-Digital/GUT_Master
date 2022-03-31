import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import AboutContentTwo from "../components/about-contents/AboutContentTwo";

const Strategy = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Generation Union | Strategy</title>
        <meta
          name="description"
          content="Strategy for Generational Union."
        />
      </MetaTags>
      <LayoutTwo theme="black">
        {/* breadcrumb */}
        <Breadcrumb title="Our Strategy" />
        {/* about content */}
        <AboutContentTwo />

      </LayoutTwo>
    </Fragment>
  );
};

export default Strategy;