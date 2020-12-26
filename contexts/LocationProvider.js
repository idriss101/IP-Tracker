import React, { useState, useContext, createContext } from "react";

export const LocationContext = createContext();

export default function LocationProvider({ children }) {
  const [url, setUrl] = useState(
    `https://geo.ipify.org/api/v1?apiKey=at_kbPdCKzyvjussFGcZZJFz4vZj2FHI&ipAddress=209.226.104.217`
  );
  return (
    <div>
      <LocationContext.Provider value={(url, setUrl)}>
        {children}
      </LocationContext.Provider>
    </div>
  );
}
