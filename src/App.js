import React, { useState } from "react";
import "./App.css";
import data from "./components/data";
import Movie from "./components/Movie";
import Languages from "./components/Languages";
const App = () => {
  const [movie, setMovie] = useState(data);
  const language = ["All", "Tamil", "Hindi", "English", "Malayalam"];
  const languagefilter = (lang) => {
    if (lang === "All") {
      setMovie(data);
    } else {
      const newmovie_list = data.filter((ele) => ele.language === lang);
      console.log(lang);
      setMovie(newmovie_list);
    }
  };
  return (
    <main>
      <header>
        <div className="title">
          <h3>Movies - Book your show</h3>
        </div>
      </header>
      <Languages language={language} languagefilter={languagefilter} />
      <Movie movie={movie} />
    </main>
  );
};

export default App;
