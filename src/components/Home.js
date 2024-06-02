import React from 'react'
import heroimg from '../assests/main.jpg'
import "./Home.css"
import CountUp from 'react-countup';
import { motion } from "framer-motion";
import Flip from './Flip';
import { MDBRipple } from 'mdb-react-ui-kit';
import "./Welcome.css"

const Home = () => {
  return (
    <><div id='backres'>
    <h1 id='glow'>Welcome to Chef Finder</h1>
    <div id='mide'><div className='hero '>
        <div className="left">
                <h1 id='l1h'>Cooking Staff</h1><br/>
                <p></p>
        </div>
        <div className="right">
          <Flip/>
          
            
        </div>
    
    
    </div>

    <div className='numc'>
        <div id='nl'><div>
            Number of Chefs with Us</div><div id='ct1'><CountUp duration={7} end={240} />+</div>
        </div>
        <div id='nr'><div >Number of Employees</div>
        <div id='ct1'><CountUp duration={7} end={478} />+</div>

        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Home