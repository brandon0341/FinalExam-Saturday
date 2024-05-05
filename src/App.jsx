import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Mhome from "./member/Mhome";
import Services from "./pages/Home/Services";
import About from "./pages/Home/About";
import PricingPlan from "./pages/Home/PricingPlan";
import Contact from "./pages/Home/Contact";
import Tication from "./components/Authen/Tication";
import Login from "./components/Authen/login";
import Mabout from "./member/Mabout";
import Mservices from "./member/Mservices";
import MpricingPlan from "./member/MpricingPlan";
import Mcontact from "./member/Mcontact";
import Mtrainers from "./member/Mtrainers"
import Payment from "./components/Authen/payment";

function App() {
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-[#171717]">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/plan" element={<PricingPlan />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tication" element={<Tication />} />
            <Route path="/sign" element={<Login />} />
            <Route path="*" element={<Mhome />} />
            <Route path="/mabout" element={<Mabout />} />
            <Route path="/mservices" element={<Mservices />} />
            <Route path="/mplan" element={<MpricingPlan />} />
            <Route path="/mcontact" element={<Mcontact />} />
            <Route path="/mtrain" element={<Mtrainers />} />
            <Route path="/paym" element={<Payment />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
