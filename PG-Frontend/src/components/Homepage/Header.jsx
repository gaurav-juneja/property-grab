import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { allPgs } from "./../../api";
import CitySuggestList from "./citySuggestList";
import swal from "sweetalert";

function Header() {
  let navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    let loadingOverlay = document.querySelector(".loading-overlay");
    // let errorMessage = document.querySelector(".error-msg");

    loadingOverlay.style.display = "block";

    const response = await allPgs({ city: keyword.trim().toLowerCase() });
    loadingOverlay.style.display = "none";

    if (response.status === "success") {
      navigate("/listedpg", {
        state: [response.data.pgs, { city: keyword.trim() }],
      });
      window.scrollTo(0, 0);
    } else {
      // errorMessage.textContent = response.error;
      // errorMessage.style.display = "block";
      // setTimeout(function () {
      //   errorMessage.style.display = "none";
      // }, 2000);
      swal("Error!", response.error);
    }
  };
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <header>
      <section className="container-fluid py-5 hero">
        <div className="row flex-column-reverse flex-lg-row align-items-center justify-content-center">
          <div className="col-lg-10">
            <h1 className="ff_space text-white fw_500 fs_xl heading1 col-5 text-center m-auto">
            Discover & Grab Your Dream Property !
            </h1>
            <p className="ff_space fw_400 fs_sm text-white opacity-75 mb-4 mb-sm-5 col-6 justify-content-center m-auto">
            Looking for the ideal home or investment? Explore the best listings from rentals to luxury estates - all in one place!
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <form
                autoComplete="off"
                className="searchBox gap-3 ms-0"
                onSubmit={searchSubmitHandler}
              >
                <input
                  id="input"
                  className="main-search"
                  type="text"
                  placeholder="Enter city ..."
                  onChange={(e) => setKeyword(e.target.value)}
                  list="cityNames"
                />
                {keyword !== "" && <CitySuggestList />}
                <div className='"ps-sm-2 col-lg-5  text-center ms-0'>
                  <input
                    className="d-inline-block searchBtn ff_space fw_700 fs_sm text-nowrap ms-0 w-100"
                    type="submit"
                    value="Search"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
