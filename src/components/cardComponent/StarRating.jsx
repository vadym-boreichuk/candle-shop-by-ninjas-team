import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export const MyRating = () => {
  const [, setRating] = useState(0);
  const settings = {
    allowFraction: true,
    size: 20,
    fillColor: "rgba(237, 255, 29, 1)",
    // SVGstorkeWidth: 106,
    // SVGstrokeColor: "#000",
  };
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  // const onPointerEnter = () => console.log("Enter");
  // const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => value;

  return (
    <div className="App">
      <Rating
        onClick={handleRating}
        // onPointerEnter={onPointerEnter}
        // onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        {...settings}
        /* Available Props */
      />
    </div>
  );
};
