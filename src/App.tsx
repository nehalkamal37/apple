import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./home";
import AboutUs from "./about";
import PatientResources from "./patient";
import ContactUs from "./contact";
import PrivacyNotice from "./privacy";
import Navbar from "./navbar";
import PrescriberPortal from "./prescriper";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      {/* Adding top padding if using a fixed navbar */}
      <div className="pt-24">
        <Outlet />
      </div>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        {/* New Routes */}
        <Route element={<AppLayout />}>
          <Route path="/patient" element={<PatientResources />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-notice" element={<PrivacyNotice />} />
          <Route path="/prescriber-portal" element={<PrescriberPortal />} />
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} /> {/* Default Home Page */}
          </Route>
        </Route> {/* This closing tag closes the outer AppLayout route */}
      </Routes>
    </Router>
  );
}
