import React from 'react';
import Header from './Components/Header'; // Importing Header component
import BannerSvg from './Assets/Banner.svg'; // Importing SVG banner image
import REvents from './Components/REvents'; // Importing REvents component
import UEvents from './Components/UEvents'; // Importing UEvents component

// App component function
function App() {
  return (
    <div className="App text-dark">
      {/* Header component */}
      <Header />
      {/* Banner section */}
      <div className="body" style={{backgroundImage: `url(${BannerSvg})`, backgroundSize:'cover', backgroundPosition: 'center', height:'100vh', width:'100vw'}}>
        <div className="container-fluid h-75 d-flex flex-column justify-content-center align-items-center">
          {/* Heading */}
          <h1 className='text-light w-75'>Discover Exciting Events Happening Near You - Stay Tuned for Updates!</h1>
          {/* Description */}
          <p className='text-light w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam enim ut cumque officiis doloremque quas unde nemo laboriosam quis tempora commodi error facilis voluptatum ipsum, at est obcaecati consectetur?</p>
        </div>
      </div>
      {/* Render the REvents component */}
      <REvents />
      {/* Render the UEvents component */}
      <UEvents />
    </div>
  );
}

export default App; // Exporting the App component as default
