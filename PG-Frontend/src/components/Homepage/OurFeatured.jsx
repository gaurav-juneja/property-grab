import React from "react";
import { useNavigate } from "react-router-dom";
import { allPgs } from "../../api";
import house1 from "./images/rent.jpeg";
import house2 from "./images/home-sale.jpg";
import house3 from "./images/luxury.jpg";
import arrow from "./images/arrow.png";
import "./header.css";
import swal from "sweetalert";

export const OurFeatured = () => {
  let navigate = useNavigate();

  const makeRequest = async (filter) => {
    let loadingOverlay = document.querySelector(".loading-overlay");
    // let errorMessage = document.querySelector(".error-msg");

    loadingOverlay.style.display = "block";
    const response = await allPgs({ pgType: filter });
    loadingOverlay.style.display = "none";
    if (response.status === "success") {
      navigate("/listedpg", {
        state: [response.data.pgs, { pgType: [filter] }],
      });
      window.scrollTo(0, 0);
    } else {
      swal("Error!", response.error);
    }
  };
  return (
    <>
      <section className="bg_all">
        <div className="container py-4 py-sm-5">
          <h2 className="ff_space text-center blue_clr fw-bold fs_xl">
          Discover Prime Properties
          </h2>
          <div className="d-flex justify-content-center">
            <p className="ff_space text-center text_rgba_blac fw-normal fs_sm col-lg-10 mb-0">
            Browse through a wide range of properties including rentals,
              luxury homes, and commercial real estate. Whether you're looking
              for your next home or investment, we have options that fit every
              budget and need.
            </p>
          </div>

          <div className="row pt-5 justify-content-between">
            {/* row start */}
            <div className="col-md-4 width_lg_31 h-100 mt-4 mt-md-0">
              <div className="card_1 p-2 px-4 border_radius_0_39 ">
                <img
                  className="w-100 border-hero accomodation-card"
                  src={house1}
                  alt="Rhouse1"
                  onClick={() => makeRequest("male")}
                />
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <h5 className="m-0 ff_space fw_500 fs_md">Rental Properties</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5
                    className="m-0 ff_space fw_400 fs_xsm opacity-75 accomodation-arrow"
                    onClick={() => makeRequest("male")}
                  >
                    Explore <img src={arrow} alt="" className="w_20" />
                  </h5>
                  <p className="m-0 ff_space fw_700 fs_xsm blue_clr2">
                  Rs. 10,000-20,000
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 width_lg_31 h-100 mt-4 mt-md-0">
              <div className="card_1 p-2 px-4 border_radius_0_39 ">
                <img
                  className="w-100 border-hero accomodation-card"
                  src={house2}
                  alt="Rhouse1"
                  onClick={() => makeRequest("female")}
                />
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <h5 className="m-0 ff_space fw_500 fs_md">Homes for Sale</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5
                    className="m-0 ff_space fw_400 fs_xsm opacity-75 accomodation-arrow"
                    onClick={() => makeRequest("female")}
                  >
                    Explore <img src={arrow} alt="" className="w_20" />
                  </h5>
                  <p className="m-0 ff_space fw_700 fs_xsm blue_clr2">
                  Rs. 30 Lakhs - 1 Crore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 width_lg_31 h-100 mt-4 mt-md-0">
              <div className="card_1 p-2 px-4 border_radius_0_39 ">
                <img
                  className="w-100 border-hero accomodation-card"
                  src={house3}
                  alt="Rhouse1"
                  onClick={() => makeRequest("coLiving")}
                />
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <h5 className="m-0 ff_space fw_500 fs_md">Luxury Estates</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5
                    className="m-0 ff_space fw_400 fs_xsm opacity-75 accomodation-arrow"
                    onClick={() => makeRequest("coLiving")}
                  >
                    Explore <img src={arrow} alt="" className="w_20" />
                  </h5>
                  <p className="m-0 ff_space fw_700 fs_xsm blue_clr2">
                  Rs. 2 Crore+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
