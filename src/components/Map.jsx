import { GoogleMap, Marker, useLoadScript, OverlayView} from "@react-google-maps/api";
import { Offcanvas } from 'bootstrap'
import { useState, useRef } from "react";
import { calculateDistance, checkin } from './helpers/functions';
import { cause } from "./helpers/objects";

import "./App.css";


export default function Map({category, currEvents, mapCenter, setMarkerId, userAgent}) {

    const mapRef = useRef(null);
    const offcanvasRef = useRef();
    // const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

    const [isHovering, setIsHovering] = useState(false);


    const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0, id: 1 });

    //Set selected Marker to bounce.
    const [bounceToggle, setBounceToggle] = useState({on: false, title: null});
    


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      });

 

      currEvents.forEach(event => {
        const currDate = new Date (event.date);
        const today = new Date();


const month = currDate.getMonth() + 1; 
const date = currDate.getDate();
const year = currDate.getFullYear();
const eventDate = new Date(`${month}-${date}-${year}`);
return { event: eventDate, todayDate: today, isRecent: eventDate - today < 604800000}
      })

      
      const userAgentChk = () => {
        if(userAgent.current === "mobile"){
          return "offcanvas offcanvas-bottom";
        }else {
          return "offcanvas offcanvas-start";
        }
      }
    
// useEffect (()=> {

//     if(userAgent.current === "mobile"){
//       return "offcanvas offcanvas-bottom";
//     }else {
//       return "offcanvas offcanvas-start";
//     }
  
// }, [userAgent])
      
  const color = { Music: 'red',
  Art: 'orange',
  Sports: 'green',
  Food: 'blue',
  Technology: 'purple'
   }

  const handleMarkerHover = (markerPosition, category, img, title, id, desc, userAgent) => {
    userAgent.current === "desktop" ? setIsHovering(true) :  setIsHovering(false);

    console.log(isHovering)
    setMarkerPosition({position: markerPosition.position, "category": `${category}`, "color": color[category], img: img, "title": title, "id": id, "desc": desc});
  };

  const handleMarkerMouseOut = () => {
    setIsHovering(false);
  };




  const openOffcanvas = () => {
    let offcanvas = new Offcanvas(offcanvasRef.current, {
      backdrop: true, // or 'static' or false
    })
    offcanvas.show();
  };
  // console.log(category);


      return (
        <>
        {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button> */}

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
            options={{mapId: 'c3bdb902aa4cda31'}}
            gestureHandling="none"
          >
            
            {mapCenter && (
          <Marker 
          position={mapCenter} 
          title="Your Location" 
          onClick={() => console.log("click")}
          icon={{
            url: './locationsm.svg', 
            
          }} />
        )}

{currEvents
    // .filter( event => !!category.id ? event.cause_id === Number(category.id) : true)
// .filter(event => {
//   const currDate = new Date (event.date);
//   const today = new Date();


// const month = currDate.getMonth() + 1; 
// const date = currDate.getDate();
// const year = currDate.getFullYear();
// const eventDate = new Date(`${month}-${date}-${year}`);

// return (eventDate -today < 604800000)

// })
.map((marker, index) => {
  // console.log(marker, "current")
  return(
            <Marker
              id={"portrait"}
              key={index}
              position={{ lat: marker.latitude, lng: marker.longitude }}
              title={marker.title}
              className={`person-marker-icon`}
              // shape={"MarkerShapeCircle"}
              // label={{
              //   text: marker.category,
              //   className: marker.category,
              // }}
              optimized={false}
              animation={marker.title === bounceToggle.title ? window.google.maps.Animation.BOUNCE : null}
              
              // onDblClick={openOffcanvas}
              // icon={{
              //   // path: window.google.maps.SymbolPath.CIRCLE,
              //   // fillColor: '#FFFF00',
              //   url: `${iconList[marker.cause_id]}`,
              //   fillOpacity: 0,

              //   // strokeColor: 'black', // Stroke color (optional)
              //   // strokeOpacity: 1, // Stroke opacity (optional)
              //   // strokeWeight: 3, // Stroke width (optional)
              //   scale: ((marker.checked_in_users - 1) / (1000 - 1) * 900) / 30,
              // }}

              icon={{
                url: marker.user_profile_link,
                scaledSize: new window.google.maps.Size(40, 40),
                // strokeColor: 'black', 
                // strokeOpacity: 1, // Stroke opacity (optional)
                // strokeWeight: 30, // Stroke width (optional)

              }}
              
              onClick={(event) =>{ 
              handleMarkerHover({ position: {lat: marker.latitude, lng: marker.longitude }}, marker.category, marker.img_link, marker.title, marker.cause_id, marker.description, userAgent)
              setBounceToggle({on: !bounceToggle.on, title: marker.title});
              setMarkerId(marker.id);
              openOffcanvas();
            }}
          onMouseOver={() => handleMarkerHover({ position: {lat: marker.latitude, lng: marker.longitude }}, marker.category, marker.img_link, marker.title, marker.cause_id, marker.description, userAgent)}
        onMouseOut={handleMarkerMouseOut}
        >
          <div className="colorbs"> hushsgusgsgugsu</div>
  

        </Marker>

      )})}

{isHovering && (

        <OverlayView
          position={markerPosition.position}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={(width, height) => ({
            x: (width / 2),
            y: (height + 20),
          })}
        >
          <div className={`event-preview align-items-center ${
              isHovering ? 'active' : ''
            }`}
            style={{
              backgroundImage: `url(${markerPosition.img})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
          }} >
            {/* <span>{markerPosition.title}</span> */}
            {/* <img src={markerPosition.img} alt="Overlay" /> */}
            <h6><span class="badge text-bg-info nopadding">{markerPosition.category}</span></h6>
          </div>
        </OverlayView>
      )}
          
          </GoogleMap>
          )}
    <div ref={offcanvasRef} className={userAgentChk()} tabIndex="-1" id="myOffcanvas">
        <div className="offcanvas-header offCanvasHeader" style={{backgroundColor: cause[markerPosition.id][1]}}>
          <h5 className="offcanvas-title">{markerPosition.title}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body nopadding">
          <img src={markerPosition.img}  className="offCanvasImg" 
          alt="..." />
          <div className="rightalign">  <span className="badge" style={{backgroundColor:  cause ? cause[markerPosition.id][1] : "black"}}>{ cause ? cause[markerPosition.id][0] : "nothing"}</span> <span className="badge text-bg-secondary">{markerPosition.category}</span></div>
          <article className="mainArticle" style={{borderLeft:  cause ? `2px solid ${cause[markerPosition.id][1]}` : "1px solid black"}} >{markerPosition.desc}</article>
          {checkin(calculateDistance(markerPosition.position?.lat, markerPosition.position?.lng, mapCenter.lat, mapCenter.lng))}
        </div>
      </div>

</div>

        </>
      );
    
}