import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import History from "./pages/History";
import Calender from "./pages/Calender";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <div className="gradient-background min-h-screen flex flex-col md:px-4 lg:px-14 md:py-5">
          <Nav />
          <main className="flex-grow flex items-center justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/history" element={<History />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
