import React from "react";
import "../assets/css/tailwind.css";
import "/assets/css/global-fonts.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
