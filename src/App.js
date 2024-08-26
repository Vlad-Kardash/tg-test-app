import React, { useState, useEffect } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import URL_IMAGES from "./constants/urlImages";
import ZODIAC from "./constants/zodiacNames";
import { Link, Route, Routes } from "react-router-dom";
const tg = window.Telegram.WebApp;
function App() {
  const { i18n } = useTranslation();

  console.log(postId);

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <div className="header">
        <button onClick={onClose} className="button">
          Закрыть
        </button>
        <select
          className="button"
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option value="ru">Russian</option>
          <option value="en">English</option>
        </select>
      </div>
      <div className="blockItem">
        <div className="item">
          {ZODIAC.map((item, index) => (
            <Link to={`/${item}`}>
              <img src={URL_IMAGES[index]} alt="logo" className="img" />
              <h3 className="itemText">{item}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
