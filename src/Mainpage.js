import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mainpage.css";

const Mainpage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img src="/bcg2.png" alt="Фон" className="background" />
      <div className="title-container">
        <img src="/logo.png" alt="Логотип" className="icon" />
        <h1 className="header">Defender AI</h1>
      </div>
      <div className="equipments">
        <img src="/detail1.png" alt="Шолом" className="icon2" />
        <img src="/detail2.png" alt="Амуніція" className="icon3" />
      </div>
      <div className="action">
        <button className="button1" onClick={() => navigate("/chat")}>Почати</button>
      </div>
    </div>
  );
};

export default Mainpage;
