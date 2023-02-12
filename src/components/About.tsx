import React from 'react';
const firstHero = require('../assets/images/aboutImages/1.png');
const secondHero = require('../assets/images/aboutImages/2.png');
const thirdHero = require('../assets/images/aboutImages/3.png');

const About = () => {
  return (
    <div className='aboutContainer'>
       <h1>About us</h1>
       <div className='aboutWrapper'>
        <div className="mentors">
            <p>mentors</p>
            <section>
                <div>
                    <img src={firstHero} alt="first mentor" />
                    <h3>Wade Warren</h3>
                    <p>Front-end engineers work closely with designers</p>
                </div>
                <div>
                    <img src={secondHero} alt="second hero" />
                    <h3>Kristin Watson</h3>
                    <p>Front-end engineers work closely with designers</p>
                </div>
                <div>
                    <img src={thirdHero} alt="third hero" />
                    <h3>Robert Fox</h3>
                    <p>Front-end engineers work closely with designers</p>
                </div>
            </section>
        </div>
        <div className="desc">
            <p>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>
        </div>
       </div>
    </div>
  )
}

export default About
