import './App.css';

import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import React from "react";
import { useState, useEffect } from 'react';
import HomePage from './components/homePage';
import AboutPage from './components/aboutPage';
import LoginPage from './components/loginPage';
import LogoutPage from './components/LogoutPage';

import { getToken, get_user_info } from './services/jwt_token';


function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState(getToken());

  useEffect(() => {
    get_user_info().then(data => {
      console.log(data);
      if (data.username) {
        setUser(data)
      } else {
        setUser(null)
      }
    });
  }, [])

  const saveToken = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  if (!user) {
    return (
      <>
        <Header user={user} />
        <main>
          <LoginPage saveToken={saveToken} setUser={setUser} />
        </main>
      </>
    );
  }

  return (
    <>
      <Header user={user} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage saveToken={saveToken} setUser={setUser} />} />
          <Route path="/logout" element={<LogoutPage setUser={setUser} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
