import React from "react";
import LocationProvider from "../contexts/LocationProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LocationProvider>
      <Component {...pageProps} />
    </LocationProvider>
  );
}

export default MyApp;
