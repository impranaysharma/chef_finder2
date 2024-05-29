import React from 'react'
import "./Navbar.css"
import { Outlet, Link } from "react-router-dom";
import Auth from './Auth';

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="nleft">
        <Link to="/"><div className='head'>Chef Finder</div></Link>
            <a href="#carouselExampleIndicators">Testimonials</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
        </div>
        <div className="nright">
            <Auth/>
            <button><Link to="/login">Signup</Link></button>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar