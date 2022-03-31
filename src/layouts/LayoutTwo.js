import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "../containers/headers/Header";
import Newsletter from "../components/newsletters/Newsletter";
import Footer from "../containers/footers/Footer";

const LayoutTwo = ({ children, theme }) => {
  return (
    <Fragment>
      <Header theme={theme} />
      {children}
  
      {/* newsletter */}
      <Newsletter />
      <Footer theme={theme} />
    </Fragment>
  );
};

LayoutTwo.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string
};

export default LayoutTwo;
