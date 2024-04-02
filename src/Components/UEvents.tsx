import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import I_Events from '../Types/Interface';
import { FaLocationPin } from 'react-icons/fa6';
import formatDate from '../Utilities/FormatDate';

const UEvents = () => {
  // State variables to manage events, total pages, current page, and loading state
  const [events, setEvents] = useState<I_Events[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  let alt = 'https://d3hjf51r9j54j7.cloudfront.net/wp-content/uploads/sites/9/2020/04/Event-industry-faces-collapse-within-three-months-photo-pxhere-CCO.jpg'

  // Reference for Intersection Observer
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px"
  });

  // Function to fetch events
  const fetchEvents = (pageNumber: number) => {
    const url = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageNumber}&type=upcoming`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Set total pages and update events
        setTotalPages(data.totalPages - 1);
        !events[0] ? setEvents(data.events) : setEvents([...events, ...data.events]);
      });
  };

  // Effect to fetch events when page changes
  useEffect(() => {
    if (page !== 0) {
      fetchEvents(page);
    }
  }, [page]);

  // Effect to load more events when user reaches the end of the page
  useEffect(() => {
    if (inView) {
      if (page <= totalPages) {
        setPage(page + 1);
      }
    }
  }, [inView]);

  return (
    <div className='container-fluid d-flex flex-column p-4' style={{ width: '100%', height: '100%', translate: '0% -10%' }}>
      {/* Header */}
      <div className='heading-color py-2 fw-medium d-flex flex-row justify-content-between pe-2'>
        <p>Upcoming Events <FaArrowRight /></p>
      </div>
      {/* Event cards */}
      <div className="d-flex flex-row flex-wrap overflow-y-auto no-scroll-bar gap-4 " style={{ width: '100%', height: '100vh' }}>
        {events.map((item) => (
          <div
            key={item.eventName}
            className='p-2 card p-0 container-fluid d-flex flex-column rounded-4 border border-secondary'
            style={{
              minWidth: '300px',
              maxWidth: '300px',
              minHeight: '300px',
              maxHeight: '300px',
            }}
          >
            {/* Event image */}
            <div className="h-75 rounded-4 container-fluid d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${alt})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              {/* Event date */}
              <p className='m-0 p-0 my-2 subtitle-color text-nowrap' style={{ fontSize: '13px' }}>{formatDate(item.date)}</p>
            </div>
            {/* Event details */}
            <div className="h-25 d-flex">
              <div className="w-50 d-flex flex-column justify-content-evenly">
                {/* Event name */}
                <p className='m-0 p-0 w-100 fs-5 fw-medium text-nowrap overflow-hidden heading-color'>{item.eventName}</p>
                {/* Event location */}
                <p className='m-0 p-0 w-100 text-nowrap overflow-hidden subtitle-color' style={{ fontSize: '13px' }}><FaLocationPin /> {item.cityName}</p>
              </div>
              <div className="w-50 d-flex flex-column justify-content-end my-2 align-items-end">
                {/* Weather and distance */}
                <p className='m-0 p-0 subtitle-color text-nowrap' style={{ fontSize: '12px' }}>{item.weather} | {parseInt(item.distanceKm)}Km</p>
              </div>
            </div>
          </div>
        ))}
        {/* Placeholder for loading more events */}
        <p ref={ref} className='d-flex justify-content-center w-100'>...</p>
      </div>
    </div>
  );
};

export default UEvents;
