import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarToggle from "./navbarToggle"
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggle,setToggle]= useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 92) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const handleToggle = ()=>{
    setToggle(!toggle)
  }
  return (
    
    <div className={navbar ? "activetedSide" : "container-fluid"}>
      <nav>
      <div className="row">
        <div className="col-lg-2 col-sm-2 logo">
          <NavLink to="/">
          <img
            src="https://www.tacpremierhotel.com/assets/images/tacLogo.png"
            alt="logo"
          />
          </NavLink>
          
        </div>
        <div className="col-lg-8  d-none d-lg-block nav">
          <div className="linksSide">
            <ul className="links">
              <li>
                <NavLink to="/otelimiz">Otelİmİz</NavLink>
              </li>
              <li className="accommadation">
                <NavLink to="/odalarimiz">Konaklama</NavLink>
                <div className="d-none  rooms">
                  <ul>
                    <li>
                      <NavLink to="/odalarimiz/aile">Aile Odası</NavLink>
                    </li>
                    <li>
                      <NavLink to="/odalarimiz/standart">Standart Oda</NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="restaurants">
                <NavLink to="/restaurant">Restaurant & bar</NavLink>
                
              </li>
              <li>
                <NavLink to="/spa">Spa</NavLink>
              </li>
              <li className="activitiesSide">
                <NavLink to="/aktiviteler">Aktİvİteler</NavLink>
                
              </li>
              <li>
                <NavLink to="/galeri">Galerİ</NavLink>
              </li>
              <li>
                <NavLink to="/iletişim">İletİşİm</NavLink>
              </li>
              <li className="languagesSide">
              <img
                    src="https://www.ariaresorthotel.com/img/flag/tr.png"
                    alt="flag"
                  />
                <NavLink to="/">
                 
                  TR
                  <div className="languages">
                    <ul>
                      <li>
                      <img
                            src="https://www.ariaresorthotel.com/img/flag/en.png"
                            alt="flag"
                          />
                        <NavLink to="/">
                         
                          EN
                        </NavLink>
                      </li>
                      <li>
                      <img
                            src="https://www.ariaresorthotel.com/img/flag/ru.png"
                            alt="flag"
                          />
                        <NavLink to="/">
                          
                          RU
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2  d-lg-block d-none reservationSide ">
          <NavLink to="/" className="reservation">
            Rezervasyon
          </NavLink>
        </div>
        <div className="col-sm-2  d-lg-none d-sm-inline-block toggle" onClick={handleToggle}>
          <AiOutlineMenu color="#fff" />
          {toggle && <NavbarToggle toggle={toggle} setToggle={setToggle}/>}
        </div>
      </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
