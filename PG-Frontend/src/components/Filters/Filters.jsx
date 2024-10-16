import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterCheckbox from "./filterCheckbox";
import { allPgs } from "../../api";
import "./filters.css";
import CitySuggestList from "../Homepage/citySuggestList";
import swal from "sweetalert";

const getKeysWithTrueValues = (obj) => {
  return Object.keys(obj).filter((key) => obj[key] === true);
};

const sharing = { 1: "Entire Room", 2: "Shared Room", 3: "Private" };

const pgTypeOptions = { male: "Rental", female: "House", coLiving: "Villa" };

const Filters = ({ filters, sortOption, setSortOption, handleSort }) => {
  // console.log(filters);
  let pgTypeInitial = {
    male: false,
    female: false,
    coLiving: false,
  };
  let cityInitial = "";
  if (filters.pgType) {
    filters.pgType.forEach((type) => {
      pgTypeInitial[type] = true;
    });
  }
  if (filters.city) {
    cityInitial = filters.city;
  }
  const navigate = useNavigate();
  const [amenitiesValues, setamenitiesValues] = useState({
    wifi: false,
    ac: false,
    parking: false,
    warden: false,
    cctv: false,
    selfCooking: false,
    attachWashroom: false,
    wardrobe: false,
    powerbackup: false,
    tv: false,
    fridge: false,
    microwave: false,
    cleaning: false,
    laundry: false,
    tiffin: false,
    lift: false,
    nonVeg: false,
    library: false,
  });
  const [rulesValues, setRulesValues] = useState({
    loudMusicAllowed: false,
    smoking: false,
    alcoholAllowed: false,
    guests: false,
  });
  const [PgType, setPgType] = useState(pgTypeInitial);
  const [city, setCity] = useState(cityInitial);

  const [sharingOption, setSharingOption] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [price, setPrice] = useState();
  const [priceInputTitle, setPriceInputTitle] = useState("Price Range");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handlePriceChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "No Filter") {
      setPriceInputTitle("Price Range");
      setPrice([]);
    } else {
      setPriceInputTitle(selectedValue);
      const arr = selectedValue.split(" ");
      if (arr[0] === "Upto") {
        setPrice([0, arr[1] * 1]);
      } else if (arr[0] === "Above") {
        setPrice([arr[1] * 1, 100000]);
      }
    }
  };

  const handlePgTypeChange = (event) => {
    const { name, checked } = event.target;
    setPgType((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };
  const handleSharingChange = (event) => {
    const { name, checked } = event.target;
    setSharingOption((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const applyFilters = async (event) => {
    event.preventDefault();
    let loadingOverlay = document.querySelector(".loading-overlay");

    loadingOverlay.style.display = "block";

    const filterOptions = {
      city,
      price,
      pgType: getKeysWithTrueValues(PgType),
      sharing: getKeysWithTrueValues(sharingOption),
      amenities: getKeysWithTrueValues(amenitiesValues),
      rules: getKeysWithTrueValues(rulesValues),
    };
    const response = await allPgs(filterOptions);
    loadingOverlay.style.display = "none";
    if (response.status === "success") {
      navigate("/listedpg", { state: [response.data.pgs, filterOptions] });
      setSortOption("ascending");
      window.scrollTo(0, 0);
    } else {
      swal({
        text: "Something Went Wrong.",
      });
    }
  };

  return (
    <section className="filters">
      <div className="sign ff_space filters-body">
        <div className="form">
          <div className="login">
            <div class="vertical-line"></div>

            <h2>Filters</h2>

            <select value={sortOption} onChange={handleSort}>
              <option value="ascending">Price: Low to High</option>
              <option value="descending">Price: High to Low</option>
            </select>

            <form onSubmit={applyFilters}>
              <div className="select-container">
                <h2>City:</h2>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={city}
                  onChange={handleCityChange}
                  list="cityNames"
                  autoComplete="off"
                />
                {city !== "" && <CitySuggestList />}
                <label>
                  <h2>Price:</h2>
                  <select
                    classname="select-dropdown"
                    value={price}
                    onChange={handlePriceChange}
                  >
                    <option value="selected">{priceInputTitle}</option>
                    <option value="Upto 5000">Upto 50000</option>
                    <option value="Upto 10000">Upto 100000</option>
                    <option value="Above 10000">Above 200000</option>
                    <option value="No Filter">No Filter</option>
                  </select>
                </label>
              </div>
              <h2>Property Type:</h2>
              <div>
                {Object.keys(pgTypeOptions).map((el) => {
                  return (
                    <FilterCheckbox
                      name={el}
                      stateVar={PgType}
                      displayName={pgTypeOptions[el]}
                      handleChange={handlePgTypeChange}
                    />
                  );
                })}
              </div>

              <h2>Sharing:</h2>
              <div>
                {Object.keys(sharing).map((el) => {
                  return (
                    <FilterCheckbox
                      name={el}
                      stateVar={sharingOption}
                      // name="sharing"
                      // value={el}
                      displayName={sharing[el]}
                      handleChange={handleSharingChange}
                    />
                  );
                })}
              </div>
              <button type="submit">Apply</button>
            </form>
          </div>
        </div>
      </div>
      <div class="vertical-line"></div>
    </section>
  );
};

export default Filters;
