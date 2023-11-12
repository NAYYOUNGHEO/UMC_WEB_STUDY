import { BrowserRouter, React, Route, Routes} from "react-router-dom";
import Movie from "./Components/Movie/Movie";
import { movies } from "./movieDummy";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import NotFound from "./pages/NotFound";
import Header from "./Components/Header";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header>

        </Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Movies" element={<Movies/>}/>
          <Route path="/TV" element={<TV/>}/>
          <Route path="/Celebrity" element={<Celebrity/>}/>
          <Route path="/NotFound" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
