import React from "react";
import "./App.css";
import URL_IMAGES from "./constants/urlImages";
import ZODIAC from "./constants/zodiacNames";
import { Link } from "react-router-dom";
import { initBackButton } from "@telegram-apps/sdk";

function App() {
  const [backButton] = initBackButton();
  backButton.show();
  backButton.on("click", () => {
    console.log("BackButton clicked.");
  });
  return (
    <div className="">
      <div className="blockItem">
        {ZODIAC.map((item, index) => (
          <Link to={`/${item}`} className="item">
            <div className="div">
              <img src={URL_IMAGES[index]} alt="logo" className="img" />
              <h3 className="itemText">{item}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
