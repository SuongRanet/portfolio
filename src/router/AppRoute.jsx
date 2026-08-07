import React from "react";
import Home from "../pages/Home";
import Skill from "../pages/Skill";
import Project from "../pages/Project";
import Education from "../pages/Education";
import HeroPage from "../pages/HeroPage";
import { Route , Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import ContactME from "../pages/ContactME";

const AppRoute = () => {
    return (
    <Routes>
            <Route path="/" element={<MainPage/>}>
                <Route index element={<HeroPage/>} />
            <Route path="skill" element={<Skill/>} />
            <Route path="project" element={<Project/>} />
            <Route path="education" element={<Education/>} />
            <Route path="contact" element={<ContactME/>} />  
            </Route>

        </Routes>
    );
};

export default AppRoute;
