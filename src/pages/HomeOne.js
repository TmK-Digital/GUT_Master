import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import HeroSlider from "../containers/hero-sliders/HeroSlider";
import EasyStart from "../containers/easy-starts/EasyStart";
import SecureTransaction from "../components/secure-transactions/SecureTransaction";
import CounterUp from "../containers/counter-ups/CounterUp";


const HomeOne = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Generational Union | Home</title>
        <meta
          name="description"
          content="Generational Union Home page."
        />
      </MetaTags>
      <LayoutOne>
        {/* hero slider */}
        <HeroSlider />
        {/* currency ticker */}
      
        {/* easy start */}
        <EasyStart />
        {/* currency calculation */}
       
        {/* counter up */}
        <CounterUp backgroundImage="/images/bg/2.jpg" />
        {/* secure transaction */}
        <SecureTransaction />
     
      </LayoutOne>
    </Fragment>
  );
};

export default HomeOne;
