import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import FrontPage from "./Pages/FrontPage/FrontPage";
import Find from "./Pages/Find/Find";
import About from "./Pages/About/About";
import Lessons from "./Pages/Lessons/Lessons";
import Footer from "@/components/Footer/Footer";
import routes from "./routes";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <div className="main-container">
          <Header />
          <Routes>
            <Route exact path={routes.HOME} element={<FrontPage />} />
            <Route path={routes.LESSONS} element={<Lessons />} />
            <Route path={routes.FIND} element={<Find />} />
            <Route path={routes.ABOUT} element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
