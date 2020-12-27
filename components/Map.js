import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
  setCenter,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map(props) {
  const position = [props.location.lat, props.location.lng];
  const map = useMap();
  map.setView(position);
  return (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
}
