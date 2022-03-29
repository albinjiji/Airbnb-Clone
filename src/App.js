import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/search">{/* SearchPage */}</Route>
          <Route path="/">{/* Home */}</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
