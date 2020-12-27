import React, { useContext, createContext, useState } from "react";
import { MapContainer, useMap } from "react-leaflet";

const MapContext = createContext();

export default function MapProvider({ children }) {
  return (
    <div>
      <MapContext.Provider>{children}</MapContext.Provider>
    </div>
  );
}
