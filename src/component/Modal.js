import React, { useState } from "react";

function Modal(props) {
  const [movieName, setmovieName] = useState("");
  const handleChangemovieName = (e) => setmovieName(e.target.value);

  const [picture, setPicture] = useState("");
  const handleChangepicture = (e) => setPicture(e.target.value);

  const [description, setdescription] = useState("");
  const handleChangedescription = (e) => setdescription(e.target.value);
  return (
    <div>
      <button type="submit" onClick={() => props.setShowModal(false)}>
        close Modal
      </button>
      <div class="w3-modal-content">
        <div class="container-modal">
          <span>&times;</span>
          <div className="my-input">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Movie name"
              value={movieName}
              onChange={handleChangemovieName}
            />
            <label htmlFor="">discreption</label>
            <input
              type="text"
              placeholder="Movie description"
              value={description}
              onChange={handleChangedescription}
            />
            <label htmlFor="">image</label>
            <input type="url" value={picture} onChange={handleChangepicture} />
          </div>

          <div>
            <button
              onClick={() => props.addMovie(movieName, picture, description)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
