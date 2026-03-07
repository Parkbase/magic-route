"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function RouteMap() {

  const lax = [33.9416, -118.4085];
  const disney = [33.8121, -117.9190];

  const route = [
    [33.9416, -118.4085],
    [33.8121, -117.9190]
  ];

  return (
    <div style={{marginTop:"40px"}}>
      <h2>LAX → Disneyland Route Map</h2>

      <MapContainer
        center={[33.88, -118.15]}
        zoom={10}
        style={{height:"400px",width:"100%",borderRadius:"10px"}}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={lax}>
          <Popup>LAX Airport</Popup>
        </Marker>

        <Marker position={disney}>
          <Popup>Disneyland Resort</Popup>
        </Marker>

        <Polyline positions={route} />

      </MapContainer>
    </div>
  );
}