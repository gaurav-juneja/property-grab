import React from 'react'
import nearby from "./images/nearby.png";
import affordable from "./images/affordable.png"
import reviews from "./images/reviews.png"
const Offers = () => {
  return <section className='bg_all'>
    <div className="container py-4 py-sm-5">
      <h2 className="ff_space text-center blue_clr fw-bold fs_xl">
        What We Offer
      </h2>
      <div className="d-flex justify-content-center">
        <p className="ff_space text-center text_rgba_blac fw-normal fs_sm col-lg-9 mb-0">
        Our commitment is to provide you with exceptional services that enhance your property search experience. Enjoy the luxury of choice without breaking the bank!
        </p>
      </div>
      <div className="row pt-5 justify-content-between ">
        {/* row start */}
        <div className="col-sm-6 col-lg-4 mt-4 mt-lg-0">
          <div className=" bg-white card_1 rounded text-center h-100 p-2 m-3">
            <img className="col-2 p-0 py-4" src={nearby} alt="location" />
            <h5 className="m-0 px-5 ff_space fw_400 fs_lg">Properties Nearby</h5>
              <p className="m-0 ff_space fw-normal fs-3 p-2">
                Discover properties in your preferred locality with ease.
              </p>
          </div>
        </div>
        {/* 2 */}
        <div className="col-sm-6 col-lg-4 mt-4 mt-lg-0">
          <div className=" bg-white card_1 rounded text-center h-100 p-2 m-3">
            <img className="col-2 p-0 py-4" src={affordable} alt="location" />
            <h5 className="m-0 px-5 ff_space fw_400 fs_lg">Competitive Pricing</h5>
              <p className="m-0 ff_space fw-normal fs-3 p-2">
                Get access to the best deals and options that suit your budget.
              </p>
          </div>
        </div>
        {/* 3 */}
        <div className="col-sm-6 col-lg-4 mt-4 mt-lg-0">
          <div className=" bg-white card_1 rounded text-center h-100 p-2 m-3">
            <img className="col-2 p-0 py-4" src={reviews} alt="location" />
            <h5 className="m-0 px-5 ff_space fw_400 fs_lg">24/7 Customer Support</h5>
              <p className="m-0 ff_space fw-normal fs-3 p-2">
                Our team is always here to assist you with any queries or concerns.
              </p>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Offers
