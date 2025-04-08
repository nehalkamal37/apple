import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Home from "./home";
import AboutUs from "./about";
import PatientResources
 from "./patient";
 import ContactUs from "./contact";
import PrivacyNotice from "./privacy";
import Navbar from "./navbar";
import PrescriberPortal from "./prescriper";
export default function App() {
    return (
     
        <Router>
          <Routes>
            {/* New Routes */}

            <Route path="/patient" element={<PatientResources />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy-notice" element={<PrivacyNotice />} />
            <Route path="/prescriber-portal" element={<PrescriberPortal />} />
            <Route path="/" element={<Home />}>
            <Route index element={<Home />} /> {/* Default Home Page  */}

           
           </Route>
           </Routes>

        </Router>
        
    );
}