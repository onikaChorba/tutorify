import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import FrontPage from "./Pages/FrontPage/FrontPage";
//import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="wrapper">
      <Router>
        <div className="main-container">
          <Header />
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/find" element={<Find />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}
function Lessons() {
  return <h2>Lessons</h2>;
}
function Find() {
  return <h2>Find</h2>;
}
function About() {
  return <h2>About</h2>;
}
export default App;
