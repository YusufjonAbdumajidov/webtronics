import React from 'react';
import Navbar from './Navbar';
const elipse = require('../assets/images/elipse.png') ;

const Landing = () => {
  return (
    <div className='landingContainer'>
        <Navbar />
        <div className="into_section">
            <section>
                <h1>Front-End</h1>
                <p>Make UIs and websites beautiful, functional, and fast.
                    Cover all the topics that expensive bootcamps teach (and more).
                </p>
            </section>
            <section>
                <button>Start my career change</button>
                <h1>Developer</h1>
            </section>
            <span>Courses</span>
            <img className='elipse' src={elipse} alt="" />
        </div>
    </div>
  )
}

export default Landing