import React from 'react';
import './Chat.css';

const Chat = () => {
  return (
    
    <div className="container">
       <div className="label">
      <div className="text-wrapper">DEFENDER AI</div>
    </div>
      <p className="header">Чим ми можемо Вам допомогти?</p>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Запитайте щось..." />
        <div className="icons">
          <img src="/icon-search.png" alt="Пошук" className="icon" />
          <img src="/icon-history.png" alt="Додатковий значок" className="icon" />
        </div>

        <div className="logo">
  <img src="/logo.png" alt="Логотип" className="log" />
</div>


        <div className="box">
  <div className="top-buttons">
    <button className="button">Топ на сьогодні</button>
    <button className="button">Рейтинг товару за останній місяць</button>
    <button className="button">2025</button>
  </div>

  <div className="bottom-buttons">
    <button className="button">Якісні бронеплити</button>
    <button className="button">Термобілизна</button>
  </div>
</div>


    
      </div>
    </div>
  );
};

export default Chat;
