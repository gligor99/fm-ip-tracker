import React from "react";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import { PuffLoader } from "react-spinners";

const MapComponent = ({ loading, ipData }) => {
  const location = [ipData.location?.lat, ipData.location?.lng];

  return (
    <section className="map">
      {!loading && ipData ? (
        <MapContainer
          key={location}
          center={location}
          className="map__container"
          zoom={17}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={location}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="map__loading">
          <PuffLoader />
        </div>
      )}
    </section>
  );
};

export default MapComponent;
