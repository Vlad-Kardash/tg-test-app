import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ZODIAC from "../../constants/zodiacNames";
import { BackButton, useShowPopup } from "@vkruglikov/react-telegram-web-app";

const AboutZodiac = () => {
  const showPopup = useShowPopup();

  const handleClick = () =>
    showPopup({
      message: "Hello, I am popup",
    });
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
      <BackButton text="SHOW POPUP" onClick={handleClick} />
    </div>
  );
};

export default AboutZodiac;
