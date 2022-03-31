import React from "react";
import easyStartData from "../../data/easy-starts/easy-start.json";
import EasyStartSingle from "../../components/easy-starts/EasyStartSingle.js";
import SectionTitle from "../../components/ui/section-titles/SectionTitle.js";

const EasyStart = () => {
  return (
    <div className="dg__service__area service-space section-padding--xlg bg--white">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {/* section title */}
            <SectionTitle
              title="Our Ecosystem Overview"
              text="Our Ecosystem involves a multitude of assets."
            />
          </div>
        </div>
        <div className="service__wrap">
          {easyStartData &&
            easyStartData.map((single, key) => {
              return <EasyStartSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default EasyStart;
