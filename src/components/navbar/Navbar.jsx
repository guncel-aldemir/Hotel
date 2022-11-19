import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarToggle from "./navbarToggle"
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 92) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-3 logo">
          <img
            src="https://www.tacpremierhotel.com/assets/images/tacLogo.png"
            alt="logo"
          />
        </div>
        <nav className="col-lg-8  d-none d-lg-block">
          <div className="linksSide">
            <ul className="links">
              <li>
                <NavLink to="/">Otelİmİz</NavLink>
              </li>
              <li className="accommadation">
                <NavLink to="/">Konaklama</NavLink>
                <div className="d-none  rooms">
                  <ul>
                    <li>
                      <NavLink to="/">Aile Odası</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Standart Oda</NavLink>
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
                <NavLink to="/">Aktİvİteler</NavLink>
                <div className="d-none activities">
                  <ul>
                    <li>
                      <NavLink to="/">havuz-sahil</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Eğlence-Spor</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Toplantı Organizasyon</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Alışveriş</NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <NavLink to="/">Galerİ</NavLink>
              </li>
              <li>
                <NavLink to="/">İletİşİm</NavLink>
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
        </nav>
        <div className="col-lg-2  d-lg-block d-none reservationSide ">
          <NavLink to="/" className="reservation">
            Rezervasyon
          </NavLink>
        </div>
        <div className="col-md-3  d-lg-none d-md-block toggle">
          <AiOutlineMenu />
          <NavbarToggle/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
