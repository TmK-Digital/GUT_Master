
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutOne";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import AboutContentFour from "../components/about-contents/AboutContentFour";

const NFTAssets = () => {
  return (
    <Fragment>
    <MetaTags>
      <title>Generational Union | NFT Assets</title>
      <meta
        name="description"
        content="Generational Union NFT Assets."
      />
    </MetaTags>
  
    <LayoutTwo theme="black">
        {/* breadcrumb */}
        <Breadcrumb title=" NFT Assets" />
     <br />
     <br />
     <AboutContentFour />
      {/* secure transaction */}
    
  
   
    </LayoutTwo>
  </Fragment>
  )
}

export default NFTAssets