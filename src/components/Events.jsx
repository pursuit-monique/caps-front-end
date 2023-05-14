import {useState} from "react";

import EventCard from './EventCard';
import Menu from "./Menu";
import Map from "./Map"
import Legend from "./Legend"
// import EventsComponent from "./Generator"
import '../custom.css';

export default function Events() {
    const [info, setInfo] = useState({lat: null, lng: null, name: null, pict: null});


    return (
    <> 
        {/* <NavBar /> */}
        <Menu />
        {/* <EventsComponent /> */}
        <article className="d-flex flex-wrap body">
            <div className="flex-column justify-content-end "></div>
            <div className="flex-column heightmenu overflow-auto order-2"><EventCard /></div>
            {/* <div className="order-1 justify-content-center"> <img src="https://snazzy-maps-cdn.azureedge.net/assets/132-light-gray.png?v=20170626081135" className="map" alt="..." /></div> */}
            <Legend info={info}/>
            <div className="order-1 justify-content-center">  <Map info={{setInfo}} /> </div>
        </article>
    </>
    )
}