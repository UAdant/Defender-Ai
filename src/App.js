import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <p className="header">Чим ми можемо Вам допомогти?</p>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Запитайте щось..." />
        <div className="icons">
          <img src="/icon-search.png" alt="Пошук" className="icon" />
          <img src="/icon-history.png" alt="Додатковий значок" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default App;
