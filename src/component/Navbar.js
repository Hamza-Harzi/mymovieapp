import React from "react";

function Navbar(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="enter your film"
        onChange={props.filterFilms}
      />
    </div>
  );
}

export default Navbar;
