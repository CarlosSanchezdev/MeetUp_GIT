import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Practices from "../views/Practices/Practices";
import Home from "../views/Home/Home";
import Command from "../views/Commands/Command";
import Exercise from "../views/Exercise/Exercise";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/practices" element={<Practices />}></Route>
                <Route path="/commands" element={<Command />}></Route>
                <Route path="/exercise" element={<Exercise />}></Route>
                
            </Routes>
        </BrowserRouter>
    );
};

export default Router;