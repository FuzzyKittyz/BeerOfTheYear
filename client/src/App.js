import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import axios from "axios";
import "./styles/App.css";
import LoginPage from "./components/Login";
import ProfilePage from "./components/Profile";
import Beer from "./components/Beer";
import Brewery from "./components/Brewery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/beer" element={<Beer />}></Route>
        <Route path="/brewery" element={<Brewery />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
