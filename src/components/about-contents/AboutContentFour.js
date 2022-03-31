import React from "react";
import SectionTitleFour from "../ui/section-titles/SectionTitleFour";

const AboutContentFour = () => {
  return (
    <div className="dg__service__area bg--white padding--hor">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <div className="service__chart">
              <div className="thumb">
                <img style={{borderRadius:20}}
                  src={process.env.PUBLIC_URL + "/images/about/service2.png"}
                  alt="chart"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-6 offset-xl-1 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="service__inner">
              {/* section title */}
              <SectionTitleFour title="Our NFT Assets build wealth " />
              <p>
                <li style={{fontWeight: 'bold', fontSize: '20px'}}> GUT enables an asset or a combination of assets to
                    be distributed to investors via tokenisation (GUT
                    token).
                </li>
              </p>
              <p>
              <li style={{fontWeight: 'bold', fontSize: '20px'}}>Provides an onramp for investment by distributing assets into multiple tokens which can be traded in a 24/7 marketplace.
                </li>
              </p>
              <p>
              <li style={{fontWeight: 'bold', fontSize: '20px'}}>Providing equity to asset holders to enable growth.
                </li>
              </p>
              <p>
              <li style={{fontWeight: 'bold', fontSize: '20px'}}>Pays dividends to the ratio of the tokens held by investors.
                </li>
              </p>
              <p>
              <li style={{fontWeight: 'bold', fontSize: '20px'}}>Removes the requirement for middleman, reducing fees & provides autonomous transparency.
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContentFour;
