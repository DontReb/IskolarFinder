import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HomeNoAccount from "./components/homeNoAccount";
import Navbar from "./components/Navbar";
import "./css/App.css";
import "./css/NavBar.css";
import "./css/Home.css";
import "./css/login.css";

function App() {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/signup"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<HomeNoAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

function AppWrapper(){
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;