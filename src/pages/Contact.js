import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ContactMap from "../components/contact-maps/ContactMap";

const Contact = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Generational Union | Contact us</title>
        <meta
          name="description"
          content="Contact page of Generational Union ."
        />
      </MetaTags>
      <LayoutTwo theme="black">
        {/* breadcrumb */}
        <Breadcrumb title="CONTACT" />
        {/* contact page content */}
        <section className="conact__area pt--70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact__title">

                  <h2 style={{color: 'black'}}>Have an enquiry? Contact us and we will get back to you soon</h2>
            
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="google__map">
                  {/* contact map */}
                  <ContactMap latitude="51.513561" longitude="-0.126010" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12 sm__mt--40 md__mt--40">
                <div className="dg__contact__wrapper">
                  <form className="contact-form">
                    <div className="single-contact-form">
                      <span>Full Name</span>
                      <input type="text" name="firstname" />
                    </div>
                    <div className="single-contact-form">
                      <span>Email</span>
                      <input type="email" name="email" />
                    </div>
                    <div className="single-contact-form">
                      <span>Subject</span>
                      <input type="text" name="subject" />
                    </div>
                    <div className="single-contact-form message">
                      <span>Message</span>
                      <textarea name="message" defaultValue={""} />
                    </div>
                    <div className="contact-btn">
                      <button style={{color: "white"}}type="submit">
                        Submit
                        <span className="ti-arrow-right" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutTwo>
    </Fragment>
  );
};

export default Contact;
