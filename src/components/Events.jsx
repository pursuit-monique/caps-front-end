
import EventCard from './EventCard';
import Menu from "./Menu";
import Map from "./Map"

import '../custom.css';

export default function Events() {
    return (
    <> 
        {/* <NavBar /> */}
        <Menu />
        <article className="d-flex flex-wrap body">
            <div className="flex-column justify-content-end "></div>
            <div className="flex-column heightmenu overflow-auto order-2"><EventCard /></div>
            {/* <div className="order-1 justify-content-center"> <img src="https://snazzy-maps-cdn.azureedge.net/assets/132-light-gray.png?v=20170626081135" className="map" alt="..." /></div> */}
            <div className="order-1 justify-content-center">  <Map /> </div>
        </article>
    </>
    )
}
