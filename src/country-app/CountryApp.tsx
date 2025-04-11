import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Countries } from "./pages/Countries/Countries";
import Country from "./pages/Country/Country";

function CountryApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="countries" element={<Countries />} />
        <Route path="country" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CountryApp;
