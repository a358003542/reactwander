import { Route, Routes } from 'react-router-dom';
import React from "react";

import HomePage from './homePage';
import AboutPage from './aboutPage';

function MainContent() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </main>
    )
}

export default MainContent;