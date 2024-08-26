import { useTranslation } from "react-i18next";
import React from "react";
const tg = window.Telegram.WebApp;
// console.log(tg.language_code);
const Header = () => {
  const { i18n } = useTranslation();

  const onClose = () => {
    tg.close();
  };

  return (
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
  );
};

export default Header;
