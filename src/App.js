import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Blog from "./Blog";
import Research from "./Research";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";




const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
        <Route exact path="/about" element={<About/>} ></Route>
        <Route exact path="/blog" element={<Blog/>} ></Route>
        <Route exact path="/research" element={<Research/>} ></Route>
        <Route exact path="/contact" element={<Contact/>} ></Route>  
      </Routes>
    <Footer/>

    </>
  );
};
export default App;