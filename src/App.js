import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import FrontPage from "./Pages/FrontPage/FrontPage";
import Find from "./Pages/Find/Find";
import Footer from "@/components/Footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <div className="main-container">
          <Header />
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route exact path="/find" element={<Find />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
function Lessons() {
  return <h2>Lessons</h2>;
}
function About() {
  return <h2>About</h2>;
}
export default App;
