import React from "react";
import MapProvider from "../contexts/MapProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MapProvider>
      <Component {...pageProps} />
    </MapProvider>
  );
}

export default MyApp;
