import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarToggle.scss"
const navbarToggle = ({toggle,setToggle}) => {
  return <section className="navbarToggleSide">
   
    <div className="row navbarToggle">
      <div className="col-sm-6 toggleLinksSide">
        <ul className="toggleLinks">
          <li className="toggleHotel">
            <NavLink to="/otelimiz">Otelİmİz</NavLink>
          </li>
          <li className="toggleAccommodation">
            <NavLink to="/odalarimiz">Konaklama</NavLink>
          </li>
          <li className="toggleRestaurant">
            <NavLink to="/restaurant">Restaurant</NavLink>
          </li>
          <li className="toggleSpa">
            <NavLink to="/spa">Spa</NavLink>
          </li>
          <li className="toggleActivity">
            <NavLink to="/aktiviteler">Aktİvİteler</NavLink>
          </li>
          <li className="toggleGallery">
            <NavLink to="/galeri">Galerİ</NavLink>
          </li>
          <li className="toggleLanguages">
            <NavLink to="/">
            <img src="https://www.ariaresorthotel.com/img/flag/en.png"alt="flag"/>Tr
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    
  </section>;
};

export default navbarToggle;
