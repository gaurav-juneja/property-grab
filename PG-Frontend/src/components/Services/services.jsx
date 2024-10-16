import React from "react";
import "./services.css";
import img from "./../Homepage/images/services4.jpg";
import img2 from "./../Homepage/images/services3.jpg";
import img3 from "./../Homepage/images/services6.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="blue_clr services_title">Services</h1>
      <div className="services-content ">
        <div className="services-description container ">
          <div className="row m-5">
            <div className="col services-text">
              <h2 className="services-heading">Comprehensive Property Listings</h2>
              <p>
              Our platform offers a comprehensive listing of residential properties, from apartments to family homes. We connect property owners and potential tenants, simplifying the search for your ideal living space.
              </p>
            </div>
            <div className="services-image col">
              <img src={img} alt="Services" />
            </div>
          </div>

          <div className="row m-5">
            <div className="services-image col">
              <img src={img2} alt="Services" />
            </div>
            <div className="col services-text">
              <h2 className="services-heading">Smart Search Filters</h2>
              <p>
              Utilize our advanced search filters to customize your property search based on location, price range, property type, and amenities. Finding the perfect home has never been easier.
              </p>
            </div>
          </div>

          <div className="row m-5">
            <div className="col services-text">
              <h2 className="services-heading">Verified User Reviews</h2>
              <p>
              Gain insights from verified user reviews and ratings. Our platform features authentic feedback from previous tenants, helping you make well-informed decisions when selecting a property.
              </p>
            </div>
            <div className="services-image col">
              <img src={img3} alt="Services" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
