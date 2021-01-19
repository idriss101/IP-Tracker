import React, { createContext } from "react";

const MapContext = createContext();

export default function MapProvider({ children }) {
  return (
    <div>
      <MapContext.Provider value="">{children}</MapContext.Provider>
    </div>
  );
}
