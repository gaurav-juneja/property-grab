import React from "react";

function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}
const sharingDisplayName = {
  1: "Entire",
  2: "Private",
  3: "Shared",
};

const SharingOptions = ({ options }) => {
  options = sliceIntoChunks(options, 3);
  return (
    <>
      {options.map((row, i) => {
        return (
          <div className="d-flex justify-content-between  py-3">
            {row.map((option) => {
              return (
                <div class="card w-25 align-content-center justify-content-center col-6">
                  <h5 class="card-header " style={{ color: "#2979ff" }}>
                    {`${sharingDisplayName[option.occupancy]} Room${
                      option.ac ? " With AC:" : ":"
                    }`}
                  </h5>
                  <div className="d-flex">
                    <div class="card-body">
                    
                      <p class="card-text fs-18">
                        <span className="fw_700">Price - </span>
                        {`Rs.${option.price}`}
                      </p>
                    </div>
                
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default SharingOptions;
