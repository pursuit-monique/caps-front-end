
import { useState, useEffect} from "react";

import axios from "axios";
import EventCard from './EventCard';
import Menu from "./Menu";
import Map from "./Map"
import Legend from "./Legend"
import Categories from "./Categories"
import CategoriesCounter from "./CategoriesCounter";

import { dateHandler } from "./helpers/functions";

import '../custom.css';

const API = process.env.REACT_APP_BACKEND_URL;

export default function Events() {
    const [isLoaded, setIsLoaded] = useState(false);

    const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

    //State for Category buttons
    const [category, setCategory] = useState('');


    //State for Map and Card Data-- pulled from API data
    const [currEvents, setCurrEvents] = useState([]);

    //Current selected event ID
    const [markerId, setMarkerId] = useState();

    //Set type for filter
    const [type, setType] = useState('all');

    const [userAgent, setUserAgent] = useState("desktop");

    useEffect(() => {
      const interval = setInterval(() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          // console.log(userAgent.current);
          setUserAgent("mobile");
        } else {
          console.log("desktop");
          setUserAgent( "desktop");
          // console.log(userAgent.current);
        }
      }, 500);
    
      return () => clearInterval(interval);
    }, []);
   
  

   const mapType = userAgent === "mobile" ? "order-1 justify-content-center" : "order-2 justify-content-center";
   const eventCardType = userAgent === "mobile" ? "flex-column heightmenu overflow-auto order-2" : "flex-column heightmenu overflow-auto order-1";

    function eventFilter(type, category, dateHandler, e){
          if (type === "all"){
            return !!category.id ? e.cause_id === Number(category.id) : true;
          } else {
            if (type === 'Date') {
              return dateHandler(e.date, e.time).isPrevious;
            } else if ( type === 'Current'){

              return dateHandler(e.date, e.time).isRecent;
            }
          }
    }


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





    useEffect(() => {
        axios
          .get(`${API}/events/`)
          .then((response) =>{ 
            setCurrEvents(response.data);
            setIsLoaded(true);
          })

          .catch((c) =>{ 
            console.warn("catch", c);
            setIsLoaded(false);
          });
      }, [category]);

      console.log(currEvents)

      // if (currEvents.length < 2) setCurrEvents(tempData);
    return (
    <> 
    {/* random add to test env variables and force new deploy AGAIN */}
     {/* top navigation bar */}
        <Menu setType={setType} type={type} /> 

        {/* Category selection bar */}
        {isLoaded ? <Categories category={category} setCategory={setCategory} setMarkerId={setMarkerId} /> : '' }
        {isLoaded ? <CategoriesCounter currEvents={currEvents} category={category} /> : '' } 
        {/* <Reset setCategory={setCategory} category={category} /> */}

        <article className="d-flex flex-wrap body">

            <div className="flex-column justify-content-end "></div>

                {/* Event card display */}
                <div className={eventCardType}>
                    <EventCard currEvents={currEvents.filter( event => eventFilter(type, category, dateHandler, event))} mapCenter={mapCenter} markerId={markerId} userAgent={userAgent} />
                </div>

                {/* Legend:  Is display: hidden on mediaScreen width < 480px */}
                {isLoaded? <Legend category={category}  /> : ''}

                {/* Map display.   */}
                <div className={mapType}>
                    <Map currEvents={currEvents.filter( event => eventFilter(type, category, dateHandler, event))} category={category} mapCenter={mapCenter} setMarkerId={setMarkerId} userAgent={userAgent} />
                </div>

        </article>
    </>
    )
}
