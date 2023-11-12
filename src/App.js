import React from "react";
import Movie from "./Components/Movie/Movie";
import { movies } from "./movieDummy";

function App() {
  return (
    <div className="app-container">
      {movies.results.map((item) => (
        <Movie key={item.id} movie={item}/>
      ))}
    </div>
  );
}

export default App;
