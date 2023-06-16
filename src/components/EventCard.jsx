
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css';


import { calculateDistance, dateHandler } from './helpers/functions';
import { cause, iconList } from './helpers/objects';
import {useEffect, useRef} from "react";

export default function EventCard({currEvents, mapCenter, markerId, userAgent}) {
const currCards = useRef(currEvents);
  function parseTitle(title, userAgent){
  if (userAgent === "desktop"){
    if (title.length > 40){
      return `${title.slice(0, 40).trim()}...`
    }
    return title;
   } else {
    if (title.length > 15){
      return `${title.slice(0, 15).trim()}...`
    }
    return title;
   }
  }


   console.log(currEvents);

   

  

useEffect(() => { 
  currCards.current =  currEvents.filter(event => !!markerId ? event.id === markerId : true) ;
  console.log(currCards.current);
}, [markerId, currEvents]);

    return (
    <>
      <container className="container d-flex flex-column overflow-auto">
    {/* {currEvents
    .filter(event => !!id ? event.id === id : true) */}
    {currCards.current
    .map(event =>{  
      // const divStyle = {
      //   backgroundImage: `url(${iconList[event.cause_id]})`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: '20px',
      //   backgroundPosition: 'bottom right',
      //   fill: `${cause[event.cause_id][1]}`
      // };
      let {eventdate, eventtime} = dateHandler(event.date, event.time);
      return (
      <div className="cardSize">
              <div className="rowimg">
                <div className="col-1 imgContainer">
            <div
              className="imageContain"
              style={{
                backgroundImage: `linear-gradient(to right, transparent 85%, white), url(${event.img_link})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                }}></div>
            </div>
      <div className="col constraint">
          <div className="row-1"><h1 className="title"><img className="margin" src={iconList[event.cause_id][1]} alt="..." /><Link to={`/event/${event.id}`}>{parseTitle(event.title, userAgent)} </Link></h1></div>
          <div className="dateInfo" style={{
  background: `linear-gradient(to right, white, ${cause[event.cause_id][1]})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}>{eventdate}  {eventtime}</div>
          <div className="row-2 cardInfo">
    {event.description}
          </div>
          <div className="row align-items-center">
          <span className="indicator"></span><img src={event.user_profile_link || "https://100k-faces.glitch.me/random-image"} alt="name" className="userIcon margin"></img>
            <div className="col">
                <div className="row infoText">{event.f_name} {event.l_name}</div>
                <div className="row orgText infoText">Pursuit</div>
            </div>
            <div className='col-1'></div>
            <div className="col"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill mainColor" viewBox="0 0 16 16">
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg><span className="orgText infoText">{calculateDistance( Number(mapCenter.lat), Number(mapCenter.lng), Number(event.latitude), Number(event.longitude))}mi away</span></div>
            </div>
      </div>
    </div>
    </div>
    )})}

            </container> 
    </>
    )
}