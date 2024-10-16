import React from "react";
import "./aboutus.css";
import img from "./../Homepage/images/aboutus5.jpg";
import img2 from "./../Homepage/images/aboutus4.jpg";
import img3 from "./../Homepage/images/aboutus3.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="blue_clr about_us_title">ABOUT US</h1>
      <div className="about-content ">
        <div className="about-description container ">
          <div className="row m-5">
            <p className="col aboutus-text">
            At Property Grab, we are committed to helping you find your dream home or apartment. Whether you're a student, a working professional, or a family, our mission is to make your property search seamless and enjoyable. We believe that a comfortable and inviting space is essential for personal and professional growth.
            </p>
            <div className="about-image col">
              <img className="aboutuspic" src={img} alt="About Us" />
            </div>
          </div>

          <div className="row m-5">
            <div className="about-image col">
              <img className="aboutuspic" src={img2} alt="About Us" />
            </div>
            <p className="col aboutus-text">
            Our platform offers a wide range of properties that cater to diverse needs, from cozy studios to spacious family homes. We provide essential amenities, including high-speed internet, modern furnishings, and easy access to local services, ensuring a comfortable living experience for all our clients.
            </p>
          </div>

          <div className="row m-5">
            <p className="col aboutus-text">
            Strategically located in prime neighborhoods, our listings are surrounded by essential amenities such as grocery stores, restaurants, and public transportation. We strive to foster a sense of community, helping residents connect and create lasting memories in their new homes.
            </p>
            <div className="about-image col aboutuspic">
              <img className="aboutuspic" src={img3} alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
