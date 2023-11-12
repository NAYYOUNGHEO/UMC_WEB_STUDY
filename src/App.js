import { BrowserRouter, React, Route, Routes} from "react-router-dom";
import { movies } from "../src/movieDummy";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import NotFound from "./pages/NotFound";
import Header from "./Components/Header";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header>
        </Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Movies" element={<Movies movies={movies}/>} />
          <Route path="/TV" element={<TV/>}/>
          <Route path="/Celebrity" element={<Celebrity/>}/>
          <Route path="*" element={<NotFound/>} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
