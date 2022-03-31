import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ServiceContent from "../components/service-contents/ServiceContent";
import ServiceList from "../containers/service-contents/ServiceList";

const Service = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Generational Union | Services</title>
        <meta
          name="description"
          content="Service page of Generational Union."
        />
      </MetaTags>
      <LayoutTwo theme="black">
        {/* breadcrumb */}
        <Breadcrumb title="SERVICES WE PROVIDE" />
        {/* service content */}
        <ServiceContent />
        {/* service list */}
        <ServiceList />
      </LayoutTwo>
    </Fragment>
  );
};

export default Service;
