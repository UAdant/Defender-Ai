import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Mainpage.css';

const Mainpage = () => {
  return (
    <div className="container">
      <img src="/bcg2.png" alt="Фон" className="background"></img>
      <div className="title-container">
        <img src="/logo.png" alt="Логотип" className="icon"/>
      <h1 className="header">Defender AI</h1>
      </div>
      <div className="equipments">
        <img src="/detail1.png" alt="Шолом" className="icon2"/>
      <img src="/detail2.png" alt="Амуніція" className="icon3"/>
      </div>
      
      <Router>
      <div className="action">
        <Link to="/app">
          <button className="button1">Почати</button>
        </Link>

        <Routes>
          <Route path="/app" element={<Mainpage />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default Mainpage;
