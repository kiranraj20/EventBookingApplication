import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx"; // Importing Hamburger menu icon from 'react-icons/rx' library
import { FaSearch } from "react-icons/fa"; // Importing search icon from 'react-icons/fa' library
import { MdFavorite } from "react-icons/md"; // Importing favorite icon from 'react-icons/md' library
import { FaLocationPin } from "react-icons/fa6"; // Importing location pin icon from 'react-icons/fa6' library
import { MdKeyboardArrowRight } from "react-icons/md"; // Importing arrow right icon from 'react-icons/md' library
import { FaUser } from "react-icons/fa"; // Importing user icon from 'react-icons/fa' library
import '../Global.css'; // Importing global CSS file

// Define a functional component called Header
const Header = () => {
  return (
    <div className="bg-light m-2 ">
      <div className="container-fluid d-flex justify-content-around align-items-center">
        {/* Brand logo with link */}
        <a className="navbar-brand fs-4 fw-medium logo-color" href="/#">BookUsNow</a>
        <div className="div d-flex  flex-row gap-3 align-items-center w-50">
          {/* Hamburger menu for categories dropdown */}
          <div className="nav-item dropdown d-flex align-items-center mt-3 d-sm-none d-none d-md-block">
            <p className="nav-link px-3 bg-dark text-light rounded-2 d-flex align-items-center py-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <RxHamburgerMenu className='me-2 ' />
              Categories
            </p>
            {/* Dropdown menu for categories */}
            <ul className="dropdown-menu subtitle-color">
              <li><a className="dropdown-item" href="/#">Action</a></li>
              <li><a className="dropdown-item" href="/#">Action two</a></li>
              <li><a className="dropdown-item" href="/#">Action three</a></li>
            </ul>
          </div>
          {/* Search input field */}
          <div className="input-group ">
                <input className="form-control border-end-0 border d-sm-none d-none d-md-block text-secondary" type="search" placeholder='search'  id="example-search-input" />
                <span className="input-group-append">
                    <button className="btn btn-outline-secondary bg-white border-start-0  border d-sm-none d-none d-md-block" type="button">
                    <FaSearch className='subtitle-color' />
                    </button>
                </span>
            </div>
        </div>
        {/* Icons/buttons for search, favorites, and user profile */}
        <div className=" d-flex flex-row  gap-2 align-items-center">
          <div className="btn border-0 d-md-none d-lg-none" >
            <FaSearch className='subtitle-color' />
          </div>
          <div className=' btn border-0 d-md-none d-lg-none' >
            <MdFavorite className='subtitle-color' />
          </div>
          <div className="btn border-0 d-md-none d-lg-none ">
            <FaUser  className='subtitle-color' />
          </div>
          {/* Button for favorites */}
          <button className='d-md-flex flex-row align-items-center border-0 bg-light gap-2 m-2 p-1 px-3 rounded-2 d-sm-none d-none d-md-block'>
            <MdFavorite className='subtitle-color'/>
            <p className='m-0 p-0  '>Favorites</p>
          </button>
          {/* Button for sign in */}
          <button className='d-md-flex flex-row align-items-center border border-1 border-color m-2 p-1 bg-light px-3 rounded-2 d-sm-none d-none d-md-block'>
            <p className='m-0 p-0 text-nowrap '>Sign In</p>
          </button>
        </div>
      </div>
      {/* Location display with an arrow icon */}
      <div className=" d-md-flex flex-row align-items-center justify-content-around">
        <div className='d-flex my-0 mx-4 m-md-0 flex-row align-items-center'>
          <FaLocationPin className='subtitle-color m-0 p-0' />
          <p className='heading-color m-0 p-0'>Mumbai, India</p>
          <MdKeyboardArrowRight className='subtitle-color m-0 p-0' />
        </div>
        {/* List of categories */}
        <ul className=' heading-color d-flex mx-1 px-1 my-2 flex-row list-unstyled gap-4 gap-md-5 align-items-center overflow-x-auto no-scroll-bar'>
          <li className='text-nowrap'>Live shows</li>
          <li>Streams</li>
          <li>Movies</li>
          <li>Plays</li>
          <li>Events</li>
          <li>Sports</li>
          <li>Activities</li>
        </ul>
      </div>
    </div>
  )
} 

export default Header; // Exporting the Header component
