import { GoogleMap, Marker, useLoadScript, OverlayView} from "@react-google-maps/api";

import { useEffect, useState, useRef } from "react";

import axios from 'axios';


import "./App.css";


export default function Map() {
    const mapRef = useRef(null);
    const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
    const [eventsArray, setEventsArray] = useState([]);


    const [isHovering, setIsHovering] = useState(false);
    const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      });

 
      
      function success(pos) {
        const {latitude, longitude} = pos.coords;
        // console.log(longitude)
        setMapCenter({lat: latitude, lng: longitude})
        // setInfo({lat: latitude, lng: longitude, name: "Jane Doe", pict: "../locationsm.svg"})
            
        console.log(latitude, longitude);
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      


    


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






      useEffect(() => {
        const generateEvents = async () => {
          const fetchGeolocation = async (address) => {
            const encodedAddress = encodeURIComponent(address);
            const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;
    
            try {
              const response = await axios.get(url);
              const results = response.data.results;
    
              if (results && results.length > 0) {
                const location = results[0].geometry?.location;
                if (location) {
                  return { latitude: location.lat, longitude: location.lng };
                }
              }
            } catch (error) {
              console.error('Error fetching geolocation data:', error.message);
            }
    
            return null;
          };
    
          const boroughs = [
            { name: 'Manhattan', zipCode: '10001' },
            { name: 'Brooklyn', zipCode: '11201' },
            { name: 'Queens', zipCode: '11354' },
            { name: 'Bronx', zipCode: '10451' },
            { name: 'Staten Island', zipCode: '10301' }
          ];
    
          const streetNames = [
            'Broadway',
            'Park Avenue',
            '5th Avenue',
            'Flatbush Avenue',
            'Queens Boulevard',
            'Grand Concourse',
            'Richmond Terrace'
          ];
    
          const categories = ['Music', 'Art', 'Sports', 'Food', 'Technology'];

      const newEventsArray = [];

      for (let i = 0; i < 100; i++) {
        const borough = boroughs[Math.floor(Math.random() * boroughs.length)];
        const streetName = streetNames[Math.floor(Math.random() * streetNames.length)];
        const address = `${streetName}, ${borough.name}, New York, NY, USA`;
        const geolocation = await fetchGeolocation(address);

        if (geolocation) {
          const event = {
            ID: i + 1,
            eventName: `Event ${i + 1}`,
            user: `User ${i + 1}`,
            eventDescription: `This is the description for Event ${i + 1}`,
            peopleLoggedIn: Math.floor(Math.random() * 100),
            eventPicture: `https://example.com/event-${i + 1}.jpg`,
            address: address,
            city: 'New York City',
            state: 'NY',
            zipCode: borough.zipCode,
            lat: geolocation.latitude,
            lng: geolocation.longitude,
            category: categories[Math.floor(Math.random() * categories.length)]
          };

          newEventsArray.push(event);
        }
      }

      setEventsArray(newEventsArray);
    };

    generateEvents();
  }, []);

  // const renderPreviewOverlay = (marker) => {
  //   if (hoveredMarkerId === marker.id) {
  //     return (
  //       <OverlayView
  //         key={marker.id}
  //         position={{lat: marker.lat, lng: marker.lng}}
  //         mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
  //         getPixelPositionOffset={() => ({ x: -50, y: -50 })}
  //       >
  //         <div className="marker-preview">
  //           <img src='https://picsum.photos/200/600' alt={marker.category} />
  //         </div>
  //       </OverlayView>
  //     );
  //   }
  //   return null;
  // };
      
  const color = { Music: 'red',
  Art: 'orange',
  Sports: 'green',
  Food: 'blue',
  Technology: 'purple'
   }
  const handleMarkerHover = (markerPosition, category) => {
    setIsHovering(true);


    setMarkerPosition({position: markerPosition, category: `.${category}`, color: color[category]});
  };
  const handleMarkerMouseOut = () => {
    setIsHovering(false);
  };

      return (
        <div className="App">
          {!isLoaded ? (
            <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          ) : (
            <GoogleMap
            ref={mapRef}
            mapContainerClassName="map-container"
            center={mapCenter}
            zoom={12}
            options={{mapId: 'c3bdb902aa4cda31', disableDefaultUI: true, maxZoom: 15, minZoom: 12}}
            gestureHandling="none"
          >
            
            {mapCenter && (
          <Marker 
          position={mapCenter} 
          title="Your Location" 
          onClick={() => console.log("click")}
          icon={{
            url: 'locationsm.svg', 
            
          }} />
        )}

{eventsArray.map((marker, index) => (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.eventName}
              label={{
                text: marker.category,
                className: marker.category,
              }}
              optimized={true}
              icon={{
                path: window.google.maps.SymbolPath.CIRCLE,
                fillColor: color[marker.category],
                fillOpacity: 1,
                strokeWeight: 0,
                scale: marker.peopleLoggedIn /4,
              }}
          onMouseOver={() => handleMarkerHover({ lat: marker.lat, lng: marker.lng })}
        onMouseOut={handleMarkerMouseOut}
        />
        
      ))}

{isHovering && (
        <OverlayView
          position={markerPosition.position}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={(width, height) => ({
            x: (width / 2),
            y: (height + 100),
          })}
        >
          <div className="event-preview align-items-center">
            <span>EVENT NAME</span>
            <img src="https://picsum.photos/200/600" alt="Overlay" />
            <h6><span class="badge bg-secondary nopadding">New</span></h6>
          </div>
        </OverlayView>
      )}
          
          </GoogleMap>
          )}
        </div>
      );
    
}