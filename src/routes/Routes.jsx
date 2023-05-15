import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Practices from "../views/Practices/Practices";
import Home from "../views/Home/Home";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/practices" element={<Practices />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;