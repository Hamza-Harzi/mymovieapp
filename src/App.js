import "./App.css";
import React, { useState, useEffect } from "react";
import films from "./Data";
import FilmCart from "./component/FilmCart";
import StarRating from "./component/StarRating ";
import Navbar from "./component/Navbar";
import Modal from "./component/Modal";

function App() {
  const [state, setstate] = useState(films);
  const [rating, setRating] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const addMovie = (movieName, picture, description) => {
    films.push({
      id: films.length + 1,
      title: movieName,
      poster: picture,
      decription: description,
      rate: 5,
    });

    const filteFilms = films.filter((film) => {
      return film.rate >= rating;
    });

    setstate(filteFilms);
    setShowModal(false);
  };

  useEffect(() => {
    const newRate = films.filter((item) => {
      return item.rate >= rating;
    });
    setstate(newRate);
  }, [rating]);

  const filterFilms = (e) => {
    const updatedList = films.filter((item) => {
      // console.log("my itemmmmmm :>> ", item);
      return (
        item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    });
    setstate(updatedList);
  };
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Navbar filterFilms={filterFilms} />
        <StarRating rating={rating} setRating={setRating} />
        <button onClick={() => setShowModal(true)}>Open Modal</button>
      </div>
      {showModal && (
        <div className="modal">
          <Modal setShowModal={setShowModal} addMovie={addMovie} />
        </div>
      )}
      <div className="my-films">
        {state.map((item) => {
          return <FilmCart key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
