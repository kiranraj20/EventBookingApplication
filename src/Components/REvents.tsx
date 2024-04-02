import React, { useEffect, useState } from 'react'; // Importing necessary modules from React

import { FaLocationPin, FaArrowRight } from "react-icons/fa6"; // Importing necessary icons from react-icons library
import I_Events from '../Types/Interface'; // Importing I_Events interface from Types folder
import formatDate from '../Utilities/FormatDate'; // Importing formatDate function from Utilities folder

const REvents = () => { // Define REvents functional component

  // Define the URL to fetch events data from the server
  const url = 'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco';

  // Define state variable 'events' to store events data fetched from the server
  const [events, setEvents] = useState<I_Events[]>([]);

  // Fetch events data from the server when the component mounts
  useEffect(() => {
    fetch(url)
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => setEvents(data.events)) // Update the 'events' state with fetched data
      .catch((error) => console.error('Error fetching data:', error)); // Handle any fetch errors
  }, []);

  // Define alternate image URL for card background image
  const altImageUrl = 'https://pikwizard.com/pw/small/673b0ce74739e382c6dcded7e5a51db0.jpg';

  return (
    <div className="container-fluid ps-4 m-0 d-flex flex-column pe-0" style={{ width:'100%', height:'100%', translate:'0% -40%'}}>
      <div className='text-light py-2 fw-medium d-flex flex-row justify-content-between pe-2'>
        <p>Recommended shows <FaArrowRight /></p> {/* Display 'Recommended shows' text with FaArrowRight icon */}
        <a href="/#" className='text-light pe-4' >See all</a> {/* Display 'See all' link */}
      </div>
      <div className=' gap-md-5 gap-4 d-flex flex-row overflow-x-auto no-scroll-bar m-0 p-0' style={{width:'100%'}}>
        {events.map((item, index) => ( // Map through 'events' array and render a card for each event
          <div 
            className="card d-flex justify-content-end rounded-4 border border-color m-0 p-0" // Define card styling
            key={index} // Set unique key for each card
            style={{ 
              minWidth: '280px', 
              maxWidth: '280px',
              minHeight: '380px',
              maxHeight: '380px', 
              backgroundImage: `url(${altImageUrl})`, // Use event image URL or alternate image URL as background image
              backgroundSize:'cover' ,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}>
            <div className="d-flex flex-row gap-1 " style={{height:'20%', width:'100%'}}>
              <div className="w-50 m-1 ms-2 d-flex flex-column justify-content-evenly">
                <p className='m-0 p-0 w-100 fs-5 fw-medium  text-nowrap overflow-hidden text-light'>{item.eventName}</p> {/* Display event name */}
                <p className='m-0 p-0 w-100  text-nowrap overflow-hidden subtitle-color' style={{fontSize:'13px'}}><FaLocationPin/> {item.cityName}</p> {/* Display event city with FaLocationPin icon */}
              </div>
              <div className="w-50 m-1 pe-2 d-flex flex-column justify-content-evenly  align-items-end">
                <p className='m-0 p-0 subtitle-color text-nowrap' style={{fontSize:'13px'}}>{formatDate(item.date)}</p> {/* Display formatted event date */}
                <p className='m-0 p-0 subtitle-color text-nowrap' style={{fontSize:'12px'}}>{item.weather}|{parseInt(item.distanceKm)}Km</p> {/* Display event weather and distance */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default REvents; // Export REvents component
