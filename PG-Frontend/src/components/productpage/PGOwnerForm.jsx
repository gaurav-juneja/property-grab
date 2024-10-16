import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { createPG } from "./../../api";
import CheckBoxInput from "./checkboxInput";
import AddressInput from "./addressInput";
import PgAmenitiesLine from "./pgAmenitiesLine";

import "./PGOwnerForm.css";
import swal from "sweetalert";

const rules = {
  guests: "Guests",
  smoking: "Smoking",
  loudMusicAllowed: "Loud Music",
  alcoholAllowed: "Alcohol",
};

const PGOwnerForm = () => {
  const user = useSelector((state) => state.user);
  // console.log(user);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [sharingOptions, setSharingOptions] = useState([]);

  const [pgDetails, setPGDetails] = useState({
    name: "",
    description: "",
    pgType: "",
  });

  const [addressDetails, setAddressDetails] = useState({
    locality: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [pgRules, setPGRules] = useState({
    guests: false,
    // pets: false,
    smoking: false,
    loudMusicAllowed: false,
    alcoholAllowed: false,
    securityDeposit: "",
    noticePeriod: "",
    gateClosingTime: "",
  });

  const [ContactInfo, setContactInfo] = useState({
    phone: "",
    email: user.email,
  });

  const [pgAmenities, setPGAmenities] = useState({
    ac: false,
    fridge: false,
    wifi: false,
    parking: false,
    tv: false,
    nonVeg: false,
    tiffin: false,
    laundry: false,
    lift: false,
    microwave: false,
    cleaning: false,
    warden: false,
    cctv: false,
    selfCooking: false,
    attachWashroom: false,
    wardrobe: false,
    powerBackup: false,
    library: false,
  });

  const handleAddSharingOption = () => {
    setSharingOptions([
      ...sharingOptions,
      { occupancy: "", price: "", ac: false },
    ]);
  };

  const handleRemoveSharingOption = (index) => {
    const updatedOptions = [...sharingOptions];
    updatedOptions.splice(index, 1);
    setSharingOptions(updatedOptions);
  };

  const handleSharingOptionChange = (index, field, value) => {
    // console.log(sharingOptions[index][field]);
    const updatedOptions = [...sharingOptions];
    updatedOptions[index][field] = value;
    setSharingOptions(updatedOptions);
    // console.log(sharingOptions[index][field]);
  };

  const handleSharingPriceWheel = (e, index, field, value) => {
    const delta = Math.sign(e.deltaY);
    if (delta > 0) {
      //Scroll Down
      e.target.value = e.target.value * 1 + 1;
      // console.log(value);
      // console.log(sharingOptions[index][field]);
      handleSharingOptionChange(index, field, value * 1 + 1);
      // console.log(sharingOptions[index][field]);
    } else if (delta < 0) {
      //Scroll Up
      e.target.value = e.target.value * 1 - 1;
      // console.log(value);
      // console.log(sharingOptions[index][field]);
      handleSharingOptionChange(index, field, value * 1 - 1);
      // console.log(sharingOptions[index][field]);
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = () => {
        newImages.push({ file, dataURL: reader.result });

        if (newImages.length === files.length) {
          setImages([...images, ...newImages]);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageDeselect = (index, event) => {
    if (event) {
      event.preventDefault();
    }
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handlePGDetailsChange = (event) => {
    setPGDetails({ ...pgDetails, [event.target.name]: event.target.value });
  };

  const handleAddressDetailsChange = (event) => {
    setAddressDetails({
      ...addressDetails,
      [event.target.name]: event.target.value,
    });
    if (addressDetails.pincode === "0") {
      setAddressDetails({ ...addressDetails, pincode: "" });
    }
  };

  const handlePGRulesChange = (event) => {
    if (event.target.type == "checkbox") {
      setPGRules({
        ...pgRules,
        [event.target.name]: event.currentTarget.checked,
      });
    } else {
      setPGRules({ ...pgRules, [event.target.name]: event.target.value });
    }
  };

  const handlePgAmenitiesChange = (event) => {
    setPGAmenities({
      ...pgAmenities,
      [event.target.name]: event.currentTarget.checked,
    });
  };

  const handleContactInfo = (event) => {
    setContactInfo({
      ...ContactInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handlePhonePincodeRulesWheel = (e) => {
    const delta = Math.sign(e.deltaY);
    if (delta > 0) {
      //Scroll Down
      e.target.value = e.target.value * 1 + 1;
      handleAddressDetailsChange(e); // handleContactInfo works for pincode and rules also bcz they are same
    } else if (delta < 0) {
      //Scroll Up
      e.target.value = e.target.value * 1 - 1;
      handleAddressDetailsChange(e);
    }
  };
  // const [pgData, setPGData] = useState({});

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let loadingOverlay = document.querySelector(".loading-overlay");
    // let successMessage = document.querySelector(".success-message");
    // let errorMessage = document.querySelector(".error-msg");
    let form = document.querySelector(".form-container");

    loadingOverlay.style.display = "block";
    // successMessage.style.display = "block";
    // const pincodeRegex = /^[1-9][0-9]{5}$/;
    // if (!pincodeRegex.test(addressDetails.pincode)) {
    //   swal("Error", "Invalid Pincode");
    //   loadingOverlay.style.display = "none";
    //   return;
    // }

    const { name, description, pgType } = pgDetails;
    const { noticePeriod, securityDeposit, gateClosingTime } = pgRules;
    const pg_Amenities = [pgAmenities];
    const pg_rules = [pgRules];
    // setContactInfo({ ...ContactInfo, email: user.email });

    const pgData = new FormData();
    // Add other fields to the FormData
    pgData.append("name", name);
    pgData.append("description", description);
    pgData.append("pgType", pgType);
    pgData.append("userID", user._id);

    // Append images to FormData
    images.forEach((image) => {
      pgData.append(`images`, image.file);
    });
    pgData.append("pgAmenities", JSON.stringify(pg_Amenities));
    pgData.append("sharing", JSON.stringify(sharingOptions));
    pgData.append("address", JSON.stringify(addressDetails));
    pgData.append("pgContactInfo", JSON.stringify(ContactInfo));
    pgData.append("pgRules", JSON.stringify(pg_rules));
    pgData.append("noticePeriodDays", noticePeriod);
    pgData.append("securityDeposit", securityDeposit);
    pgData.append("gateClosingTime", gateClosingTime);

    // pgData.forEach((value, key) => {
    //   console.log("key %s: value %s", key, value);
    // });

    const response = await createPG(pgData);
    if (response.status === "success") {
      form.reset();
      loadingOverlay.style.display = "none";
      swal(
        "PG Listed Successfully!!",
        "Be Ready To Welcome Some New Guests",
        "success"
      );
      // successMessage.style.display = "block";
      setTimeout(function () {
        // successMessage.style.display = "none";
        navigate("/");
        window.scrollTo(0, 0);
      }, 2000);
    } else if (response.status === "imageUploadFailed") {
      loadingOverlay.style.display = "none";
      swal(
        "PG Listed Successfully!!",
        "But for some reason, images could be uploaded. You can retry uploading them by going to your profile.",
        "warning"
      );
      navigate("/");
      window.scrollTo(0, 0);
    } else {
      // Handle error scenario

      console.log(response.error);
      if (response.error.startsWith("Pg validation failed:")) {
        response.error = "Please Enter All Required Fields Correctly!!";
      }

      swal("Error!", response.error);
      // errorMessage.textContent = response.error;
      // errorMessage.style.display = "block";
      // setTimeout(function () {
      //   errorMessage.style.display = "none";
      // }, 2000);
      // form.reset();
      loadingOverlay.style.display = "none";
    }
  };

  return (
    <div className="container complete-page">
        <h3 className="heading">I'm Working on it.</h3>
    </div>
  );
};
export default PGOwnerForm;
