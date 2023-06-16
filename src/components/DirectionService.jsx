import React, { useState, useEffect } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';


function DirectionService({address}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
  });
console.log(address)
  const [directions, setDirections] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  function success(pos) {
    const {latitude, longitude} = pos.coords;
    // console.log(longitude)
    setCurrentLocation({lat: latitude, lng: longitude})
    // setInfo({lat: latitude, lng: longitude, name: "Jane Doe", pict: "../locationsm.svg"})
        
    console.log(latitude, longitude);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  


// console.log(currEvents);


useEffect(() => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 10,
      };
    navigator.geolocation.getCurrentPosition(success, error, options);

    const interval = setInterval(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      } else {
        console.error('Error:', response.status);
      }
    }
  };

  return (

    
    <div  className="directions" style={{ borderRadius: '0px'}}>
      {!isLoaded ? (
        'Loading Map...'
      ) : (
        <GoogleMap
          // mapContainerStyle={{ width: '50%', height: '400px' }}
          zoom={10}
          center={currentLocation}
          mapContainerClassName="directions"
          options={{mapId: 'c3bdb902aa4cda31'}}
        >
          {directions && <DirectionsRenderer directions={directions} />}
          <DirectionsService
            options={{
              destination: currentLocation,
              origin: address,
              travelMode: 'WALKING',
            }}
            callback={directionsCallback}
          />
        </GoogleMap>
      )}
    </div>
  );
}


export default DirectionService;