import React from "react";
import data from "./data";

const Movie = ({ movie }) => {
  return (
    <div className="list">
      {movie.map((ele) => {
        const { id, name, image, language, certifi } = ele;
        return (
          <div className="list_item">
            <article className="list1" key={id}>
              <img src={image} alt={name} />
              <button
                className="book_btn"
                onClick={() =>
                  alert("For Next show,No seats are available,Try Later...")
                }
              >
                <h4>BOOK NOW</h4>
              </button>
              <h3 className="moviename">{name}</h3>
              <h4 className="lang">
                {language}
                {certifi}
              </h4>
            </article>
          </div>
        );
      })}
    </div>
  );
};
export default Movie;
