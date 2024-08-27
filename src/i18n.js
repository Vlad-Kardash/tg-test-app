import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";

let tg = window.Telegram.WebApp;

// const lang = tg.initDataUnsafe.user.language_code;
// console.log(lang);

// console.log(tg.language_code);
i18n
  .use(initReactI18next)
  .use(backend)
  .init({
    lng: tg.initDataUnsafe.user.username === "ru" ? "ru" : "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
