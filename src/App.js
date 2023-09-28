import './App.css';

import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import React from "react";

import HomePage from './components/homePage';
import AboutPage from './components/aboutPage';
import LoginPage from './components/loginPage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
