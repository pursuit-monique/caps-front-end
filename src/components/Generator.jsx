import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventsComponent = () => {
  const [eventsArray, setEventsArray] = useState([]);

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
        'Manhattan, New York, NY, USA',
        'Brooklyn, New York, NY, USA',
        'Queens, New York, NY, USA',
        'Bronx, New York, NY, USA',
        'Staten Island, New York, NY, USA'
      ];

      const newEventsArray = [];

      for (let i = 0; i < 50; i++) {
        const borough = boroughs[Math.floor(Math.random() * boroughs.length)];
        const geolocation = await fetchGeolocation(borough);

        if (geolocation) {
          const event = {
            ID: i + 1,
            eventName: `Event ${i + 1}`,
            user: `User ${i + 1}`,
            eventDescription: `This is the description for Event ${i + 1}`,
            peopleLoggedIn: Math.floor(Math.random() * 100),
            eventPicture: `https://example.com/event-${i + 1}.jpg`,
            address: borough,
            city: 'New York City',
            state: 'NY',
            zipCode: '10001', // Example zip code
            latitude: geolocation.latitude,
            longitude: geolocation.longitude
          };

          newEventsArray.push(event);
        }
      }

      setEventsArray(newEventsArray);
    };

    generateEvents();
  }, []);

  return (
    <div>
      {eventsArray.map((event) => (
        <div key={event.ID}>
          <h3>{event.eventName}</h3>
          <p>User: {event.user}</p>
          <p>Description: {event.eventDescription}</p>
          <p>People Logged In: {event.peopleLoggedIn}</p>
          <img src={event.eventPicture} alt="Event" />
          <p>Address: {event.address}</p>
          <p>City: {event.city}</p>
          <p>State: {event.state}</p>
          <p>Zip Code: {event.zipCode}</p>
          <p>Latitude: {event.latitude}</p>
          <p>Longitude: {event.longitude}</p>
        </div>
      ))}
    </div>
  );
};

export default EventsComponent;
