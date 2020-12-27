import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Map from "./Map";

export default function MapWrap(props) {
  const position = [51.505, -0.09];
  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: 400, width: "100%" }}
      >
        <Map {...props} />
      </MapContainer>
    </div>
  );
}
