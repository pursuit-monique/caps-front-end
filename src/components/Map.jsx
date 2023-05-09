import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import { useMemo, useEffect, useState } from "react";
import Geolocation from 'geolocation';

import "./App.css";


export default function Map() {
    const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      });

      const center = useMemo(() => ({ lat: 40.7128, lng: -75.000000 }), []);

      const handleGeolocationSuccess = (position) => {
        const { latitude, longitude } = position.coords;
        setMapCenter({ lat: latitude, lng: longitude });
      };

      const handleGeolocationError = (error) => {
        console.log('Error occurred while fetching location:', error.message);
      };
      useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          handleGeolocationSuccess,
          handleGeolocationError
        );
      }, []);

      return (
        <div className="App">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
            options={{mapId: 'c3bdb902aa4cda31', disableDefaultUI: true}}
          >
            <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
            <Marker position={mapCenter} />
          </GoogleMap>
          )}
        </div>
      );
    
}