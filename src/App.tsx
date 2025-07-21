import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <div className="gradient-background min-h-screen flex flex-col px-4 lg:px-14">
          <Nav />
          <main className="flex-grow flex items-center justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
