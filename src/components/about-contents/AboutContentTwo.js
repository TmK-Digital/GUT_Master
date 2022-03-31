import React from "react";
import SectionTitleFour from "../ui/section-titles/SectionTitleFour";

const AboutContentTwo = () => {
  return (
    <div className="dg__service__area bg--white padding--hor">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <div className="service__chart">
              <div className="thumb">
                <img style={{borderRadius:20}}
                  src={process.env.PUBLIC_URL + "/images/about/service.png"}
                  alt="chart"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-6 offset-xl-1 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="service__inner">
              {/* section title */}
              <SectionTitleFour title="Our Strategy with NFT's " />
              <p>
              GUT will be pledging non-fungible tokens and
              physical artwork from around the African continent and across the diaspora. Locking in fresh and untouched assets on our ledger for future generations to come.
              </p>
              <p>
              Our future vision is in the tokenisation of all real world assets. Providing a financial funding platform to enable in the delivery of humanitarian projects on a global scale.
              </p>
              <p>Our Smart contracts will be digitally signed by the client. The digitally signed Pledge is sent to SHA 256 hashing function. Hashed text is submitted to Blockchain.The smart contract is then updated with additional hashed text. Block transaction details are verified on ledger / new asset addition to Smart Contract.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContentTwo;
