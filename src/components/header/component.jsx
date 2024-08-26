import React from "react";
import { useParams } from "react-router-dom";
const AboutZodiac = () => {
  const params = useParams();
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
      .then((data) => setPostId(data.zodiac));
  }, [i18n.language]);
  console.log(postId);
  return <div className={""}>{params.zodiac}</div>;
};

export default AboutZodiac;
