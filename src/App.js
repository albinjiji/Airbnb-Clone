import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/search" element={<SearchPage />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
