import React from "react";
import SectionTitleFour from "../ui/section-titles/SectionTitleFour";

const ServiceContent = () => {
  return (
    <div className="about__dgtaka about--2 pt--140 pb--130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
            <div className="dg__secure__inner">
              {/* section title */}
              <SectionTitleFour title="Generational Union Providing Innovative Solutions" />
              <p>
              The Ecosystem enables an asset or a combination of assets to be distributed to investors via tokenisation. Provides an onramp for investment by distributing assets into multiple tokens which can be traded in a 24/7 marketplace.    
              </p>
              <SectionTitleFour title="Ecosytem Services" />
                <p>
                <strong style={{fontWeight: 'bold', fontSize:'40', color:'black'}}>Trading -  </strong>
              Federation members can access the GCF eco system whether that be via a crypto currency exchange market and/or asset based onramp. The eco system is self sufficient as additional assets join the federation and/or coins are released / traded GCF Token can be used for both investment & currency purposes between federation members.
              </p>
              <p>
              <strong style={{fontWeight: 'bold', fontSize:'40', color:'black'}}>Benefits -  </strong>
              Federation members can access the GCF eco system whether that be via a crypto currency exchange market and/or asset based onramp. The eco system is self sufficient as additional assets join the federation and/or coins are released / traded GCF Token can be used for both investment & currency purposes between federation members.
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="dg__secure__thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/about/wallet.png"}
                alt="secure images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
