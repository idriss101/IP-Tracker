import React from "react";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Map from "./Map";

export default function MapWrap(props) {
  const position = [51.505, -0.09];
  return (
    <div className=" h-32 flex-1">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <Map {...props} />
      </MapContainer>
    </div>
  );
}
