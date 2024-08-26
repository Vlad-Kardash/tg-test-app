import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";
const tg = Telegram.WebApp;
// console.log(tg.language_code);
i18n
  .use(initReactI18next)
  .use(backend)
  .init({
    lng: tg.language_code === "ru" ? "ru" : "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
