import React from "react";
import home from "./images/House.png";
import tick from "./images/tick.svg";

export const ChooseUs = () => {
  return (
    <>
      <section className="bg_all">
        <div className="container py-4 py-sm-5">
          <div className="row py-lg-5 align-items-center justify-content-between">
            
            {/* text */}
            <div className="col-12 mt-4 col-md-6 mt-lg-0">
              <h2 className="ff_space blue_clr fw_700 fs_xl">
              Why Choose Property Grab ?
              </h2>
              <p className=" ff_space fw-normal fs_sm text_rgba_blac">
              Find the perfect place, whether you're searching for your next
              home, a rental property, or a luxury investment.
              </p>
              <div className="row pt-4">
                <div className="col-5 pe-md-0">
                  <div className="d-flex align-items-center">
                    <img src={tick} alt="tick" />
                    <p className="ms-3 m-0 ff_space fw_500 fs_sm">
                    Extensive Listings
                    </p>
                  </div>
                  <div className="d-flex align-items-center pt-2">
                    <img src={tick} alt="tick" />
                    <p className="ms-3 m-0 ff_space fw_500 fs_sm">Trusted Agents</p>
                  </div>
                </div>
                <div className="col-7 ps-md-5">
                  <div className="d-flex align-items-center pt-2 pt-md-0">
                    <img src={tick} alt="tick" />
                    <p className="ms-3 m-0 ff_space fw_500 fs_sm">Transparent Pricing</p>
                  </div>
                  <div className="d-flex align-items-center pt-2">
                    <img src={tick} alt="tick" />
                    <p className="ms-3 m-0 ff_space fw_500 fs_sm">Premium Amenities</p>
                  </div>
                </div>
              </div>
            </div>
            {/* img */}
            <div className="col-12 col-md-5 col-lg-5">
              <div className="w-100">
                <img className="w-100" src={home} alt="home_img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
