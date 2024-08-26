import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
const AboutZodiac = () => {
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
  return <div className={""}>{postId}</div>;
};

export default AboutZodiac;
