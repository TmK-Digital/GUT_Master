import React from "react";
import SectionTitleFour from "../ui/section-titles/SectionTitleFour";

const AboutContent = () => {
  return (
    <div className="about__dgtaka about--2 section-padding--xl">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-12 col-sm-12 col-md-12">
            <div className="dg__secure__inner">
              {/* section title */}
              <SectionTitleFour title="Generational Union is a platform to support asset owners" />

              <p>
              Businesses & investors are raising funds for projects to enable growth. GUT founders have over 20 years experience in both business IT & asset management. We are strong believers in Blockchain technology and leveraging this ground breaking new tech to empower everyday people.
              </p>
              <li style={{listStyle:'none', marginBottom: '20px', color: 'black', fontWeight: 'bold', fontSize: 'largest'}}>Smart Contracts</li>
              <p>
              Federation members can access the GUT eco system whether that be via a crypto currency exchange market and/or asset based onramp. The ecosystem is self-sufficient as additional assets join the federation and/or coins are released or traded. GUT Token can be used for both investment & currency purposes between federation members.
              </p>
              <li style={{listStyle:'none', marginBottom: '20px', color: 'black', fontWeight: 'bold', fontSize: 'largest'}}>Benefits</li>
              <p>
              Providing equity to asset holders to enable Growth, Pays dividends to the ratio of the tokens held by investors. Removes the requirement for middleman reducing fees & provides autonomous transparency.
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-12 col-sm-12 col-md-12 sm__mt--40 md__mt--40">
            <div className="dg__secure__thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/about/6.jpg"}
                alt="secure images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
