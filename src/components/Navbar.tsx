import React from 'react';
const logo =  require("../assets/images/logo.png")

const Navbar = () => {
  return <nav>
    <div className="logo">
      <img src={logo} alt="logoImage" />
    </div>
    <div className="navLinks">
      <ul>
        <li>About</li>
        <li>Programs</li>
        <li>Steps</li>
        <li>Questions</li>
        <li>Get in touch</li>
      </ul>
    </div>
  </nav>
}

export default Navbar