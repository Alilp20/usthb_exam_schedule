import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <div className="gradient-background h-screen py-5 px-14">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
