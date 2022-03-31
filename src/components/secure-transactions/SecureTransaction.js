import React from "react";
import { Link } from "react-router-dom";
const SecureTransaction = () => {
  return (
    <div className="dg__secure__transaction">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="dg__secure__inner">
              <h2>
               Generational Union uses Blockchain technology which is immutable &
              far more secure than any previous form of database manual recording.
              </h2>
              <p>
              Businesses & investors are raising funds for projects to enable growth. GUT founders have over 20 years experience in both business IT & asset management. We are strong believers in Blockchain technology and leveraging this ground breaking new tech to empower everyday people. .
              </p>
              <h2>
               Our asset portfolio
              </h2>
                <li style={{color:'black', fontSize:'20px', paddingBottom:'50'}}><strong>Gold Mines</strong></li>
                <br />
                <p>
                GUT has a number of African Gold mining assets currently pledged & tokenised on the Blockchain. Our objective is to protect the rights of
                our mining
                community in all
                respects.
             
              </p>
              <li style={{color:'black', fontSize:'20px', paddingBottom:'50'}}><strong>Agriculture</strong></li>
                <br />
                <p>
                Africa has one of the largest natural wealth resources in the world. GUT will support in the fair trading of these assets. Eliminating the requirement for middle men, supporting both the asset owners & investors directly.
              </p>
              <li style={{color:'black', fontSize:'20px', paddingBottom:'50'}}><strong>Diamond Mines</strong></li>
                <br />
                <p>
                GUT is strictly opposed to ‘Blood Diamond’ exploitation of any form & finally has a solution to solve this. Using Blockchain technology GUT puts wealth back in the hands of our community.
              </p>
              <li style={{color:'black', fontSize:'20px', paddingBottom:'50'}}><strong>Property</strong></li>
                <br />
                <p>
                Africa’s varied portfolio in property is firmly in GUT'S strategic scope. GUT token makes transactions simple for both the corner shop & the multi-chain hotel owner’s to identically trade & vote without prejudice.
              </p>
              <Link
                className="secure__btn dg__btn btn--trans"
                to={process.env.PUBLIC_URL + "/about"}
              >
                See More
              </Link>
              <br />
           
            
            </div>
         
          </div>
          <br />
          <div className="col-lg-5">
            <div className="dg__secure__thumb">
              <br />
              <img style={{borderRadius:40, marginTop:'20'}}
                src={process.env.PUBLIC_URL + "/images/about/2.jpg"}
                alt="secure images"
              />
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureTransaction;
