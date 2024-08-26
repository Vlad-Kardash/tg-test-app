import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ZODIAC from "../../constants/zodiacNames";
import {
  TelegramWebApp,
  WebAppBackButton,
} from "@kloktunov/react-telegram-webapp";

const AboutZodiac = () => {
  const [show, setShow] = useState(false);
  const toggleBackButton = () => setShow(!show);

  const onClick = () => {
    console.log("Back button was clicked!");
  };

  const params = useParams();
  const { i18n } = useTranslation();
  const [postId, setPostId] = useState([]);
  // console.log(i18n.language);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sign: params.zodiac,
        language: i18n.language === "en" ? "translated" : "original",
        period: "today",
      }),
    };
    fetch("https://poker247tech.ru/get_horoscope/", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.horoscope));
  }, [i18n.language]);
  console.log(postId);
  return (
    <div className={"horoscopText"}>
      {ZODIAC.includes(params.zodiac) ? postId : "Zodiac is not defined"}
      <TelegramWebApp>
        <button onClick={toggleBackButton}>Show/hide Back Button</button>

        {show && <WebAppBackButton onClick={onClick} />}
      </TelegramWebApp>
    </div>
  );
};

export default AboutZodiac;
