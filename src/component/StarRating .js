import React, { useState } from "react";

function StarRating(props) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        // console.log("my index :>> ", props.rating);
        index += 1;
        return (
          <button
            id="bnt-star"
            type="button"
            key={index}
            className={index <= props.rating ? "on" : "off"}
            onClick={() => props.setRating(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;
