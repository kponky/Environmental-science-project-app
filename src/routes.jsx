import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeLayout from "./Layouts/HomeLayout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import DepartPage from "./Pages/DepartPage";
import LoginPage from "./Pages/LoginPage";
import SearchPage from "./Pages/SearchPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route index element={<HomePage />} />
        <Route path="about-page" element={<AboutPage />}></Route>
        <Route path="departs" element={<DepartPage />}></Route>
        <Route path="Login" element={<LoginPage />}></Route>
        <Route path="search" element={<SearchPage />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
