import React from "react";
import Navbar  from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import { Route, Routes } from "react-router-dom";
import Contactus from "./components/Contactus";
import Languages from "./components/Languages";
import Projects from "./components/Projects";


export const App = () => {
  return(
    <>
    <Navbar2/>
     <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/languages" element={<Languages/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contactus/>} />
       
      </Routes>
    </>
  )
}