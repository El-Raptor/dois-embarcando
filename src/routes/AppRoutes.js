import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import Blog from "../pages/Blog";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import CountryPage from "../pages/CountryPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinos" element={<Destinations />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/sobre-nos" element={<AboutUs />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/countries/:slug" element={<CountryPage />} />
    </Routes>
  );
};

export default AppRoutes;
