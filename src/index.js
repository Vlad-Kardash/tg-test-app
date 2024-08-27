import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutZodiac from "./components/horoscops/horoscop";
import Header from "./components/header/headers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:zodiac",
    element: <AboutZodiac />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
