import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import MovieList from "./routes/MovieList";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
              <Navigation/>

      <Routes>
        <Route path="/movie-datail" element={<Detail />} />
        <Route path="/" exact={true} element={<MovieList />} />
      </Routes>
    </Router>
  );
}

export default App;