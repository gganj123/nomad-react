import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import MovieList from "./routes/MovieList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<MovieList />} />
      </Routes>
    </Router>
  );
}

export default App;