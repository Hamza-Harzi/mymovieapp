import React from "react";

function FilmCart(props) {
  // console.log("titleeeee", props.item.title);
  return (
    <div className="my-cart">
      <ul className="list-style">
        <li>{props.item.title}</li>
        <li>
          <img className="my-img" src={props.item.poster} alt="" />
        </li>
        <li>{props.item.decription}</li>
        <li>
          {[...Array(props.item.rate)].map((star, index) => {
            // console.log("my index :>> ", props.rating);
            index += 1;
            return (
              <button
                id="bnt-star"
                key={index}
                className={index <= props.rating ? "on" : "off"}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export default FilmCart;
