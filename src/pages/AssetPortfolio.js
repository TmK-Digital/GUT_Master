
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutOne";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ServiceList2 from "../containers/service-contents/ServiceList2";



const AssetPortfolio = () => {
  return (
    <Fragment>
    <MetaTags>
      <title>Generational Union | Asset Portfolio</title>
      <meta
        name="description"
        content="Generational Union Asset Portfolio."
      />
    </MetaTags>
  
    <LayoutTwo theme="black">
        {/* breadcrumb */}
        <Breadcrumb title=" Our Asset Portfolio" />
     <br />
     <br />
      {/* secure transaction */}
      <ServiceList2 />
  
   
    </LayoutTwo>
  </Fragment>
  )
}

export default AssetPortfolio