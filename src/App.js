import React, { useState, useEffect } from "react";
import "./App.css";

import NavBar from './NavBar';
import HomePages from "./HomePages";
import LoanPage from "./LoanPage";
import sgp from "./spg";
//import NavPage from "./NavPage";
import Calculator from "./Calculator";
import Chatbot from "./Chatbot";
import FAQ from "./FAQ";

// Importing Header component
import Header from "./Header";

// Importing custom components for each section
import PersonalDetails from "./PersonalDetails";
import PropertyDetails from "./PropertyDetails";
import Identity from "./Identity";
import CreditCard from "./CreditCard";
import Assets from "./Assets";
import Income from "./Income";
import Adress from "./Adress";


// Import BrowserRouter, Routes, Route and Link from react-router-dom
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const routes = [
 {
 path: "/",
 component: HomePages,
 },
 {
 path: "/loan",
 component: LoanPage,
 },


 {
 path: "personal-details",
 component: PersonalDetails,
 },

 {
 path: "PropertyDetails",
 component: PropertyDetails,
 },

 {
 path: "identity",
 component: Identity,
 },

 {
 path: "CreditCard",
 component: CreditCard,
 },

 {
 path: "/assets",
 component: Assets,
 },

 {
 path: "/income",
 component: Income,
 },

 {
 path: "/Adress",
 component: Adress,
 },

 
 {
 path: "/sgp",
 component: sgp,
  },
 
 {
 path: "/calculator",
 component: Calculator,
 },
 {
 path: "/Chatbot",
 component: Chatbot,
 },
 {
 path: "/faq",
 component: FAQ,
 },
];

function App() {
 const [currentRoute, setCurrentRoute] = useState("");

 useEffect(() => {
 const pathname = window.location.pathname;
 setCurrentRoute(pathname);
 }, []);

 return (
 <div>

<Header />

 <div className="main">
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<HomePages />} />
 <Route path="/loan" element={<LoanPage />} />
 <Route path="/sgp" element={<sgp/>} />
 <Route path="/calculator" element={<Calculator />} />
 <Route path="/Chatbot" element={<Chatbot />} />
 <Route path="/faq" element={<FAQ />} />
 <Route path="/PersonalDetails" element={<PersonalDetails />} />

 <Route path="/PropertyDetails" element={<PropertyDetails />} />
 <Route path="/identity" element={<Identity />} />
 <Route path="/CreditCard" element={<CreditCard />} />
 <Route path="/assets" element={<Assets />} />
 <Route path="/income" element={<Income />} />
 <Route path="/Adress" element={<Adress />} />

 </Routes>
 </BrowserRouter>
 </div>
 </div>
 );
}

export default App;
