import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home"
import Commands from "../views/Commands/Commands";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/commands" element={<Commands />}></Route>
                
            </Routes>
        </BrowserRouter>
    );
};

export default Router;