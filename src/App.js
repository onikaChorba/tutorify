import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import FrontPage from "./Pages/FrontPage/FrontPage";
import Find from "./Pages/Find/Find";
import FindProfile from "./Pages/FindProfile/FindProfile";
import Footer from "@/components/Footer/Footer";
import initialDetails from "./Pages/Find/FindData";
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
            <Route
              exact
              path="/find/Profile"
              element={<FindProfile person={initialDetails} />}
            />
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
