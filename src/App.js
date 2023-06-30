import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Country from "./pages/Country";
import Countries from "./pages/Countries";
import NoPage from "./pages/NoPage";
import { CountryContext } from "./context";

function App() {
  const [country, setcountry] = useState([]);
  const [countries, setcountries] = useState([]);
  return (
    <CountryContext.Provider
      value={{ country, setcountry, countries, setcountries }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="countries" element={<Countries />} />
            <Route path="country" element={<Country />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CountryContext.Provider>
  );
}

export default App;
