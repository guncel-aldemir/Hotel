import React, { useState } from "react";
import Variables from "../../opportunity";

import {FaTheaterMasks,FaUmbrellaBeach} from "react-icons/fa";
import "./Opportunities.scss";
const Opportunities = () => {
  const [imageState, setImageState] = useState(0);
  const [active, setActive] = useState(0);
  console.log(Variables[2].url);
  const bgImages = {
    backgroundImage: `url(${Variables[imageState].url}`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "7px",
    height: "350px",
    width: "550px",
    opacity: ".8",
    boxShadow: "10px 10px 5px #ccc",
    border:"2px solid #fff"

  };
  const handleClick = (change) => {
    let changeVariable;
    let color;
    if (change === "f") {
      changeVariable = 0;
      color = 0;
    } else if (change === "p") {
      changeVariable = 1;
      color = 1;
    } else if(change === "s") {
      changeVariable = 2;
      color = 2;
    } else if(change === "a"){
        changeVariable = 3;
      color = 3;
    }else{
        changeVariable = 4;
      color = 4; 
    }
    setImageState(changeVariable);
    setActive(color);
  };

  return (
    <section className="opportunities px-4">
      <div className="row">
        <h3 className="main-title">Hİzmetlerİmİz</h3>
        <span className="main-subtitle">Profesyonel Hizmetlerimiz</span>
        <div className="col-md-6 images" style={bgImages}></div>
        <div className="col-md-6 texts">
          <div className="icons">
            <span
              className={active === 0 ? "active" : "food"}
              onClick={() => handleClick("f")}
            >
              <img loading="lazy"
                src="https://www.ariaresorthotel.com/img/icon/service-icon2.png "
                alt="food"
              />
            </span>
            <span
              className={active === 1 ? "active" : "pool"}
              onClick={() => handleClick("p")}
            >
              <img loading="lazy"
                src=" https://www.ariaresorthotel.com/img/icon/service-icon3.png"
                alt="pool"
              />
            </span>
            <span
              className={active === 2 ? "active" : "sea"}
              onClick={() => handleClick("s")}
            >
              <FaUmbrellaBeach size={48} color="#fff"/>
            </span>
            <span
              className={active === 3 ? "active" : "activities"}
              onClick={() => handleClick("a")}
            >
              
              <FaTheaterMasks size={40} color="#fff"/>
               
            </span>
            <span
              className={active === 4 ? "active" : "bath"}
              onClick={() => handleClick("b")}
            >
              <img loading="lazy"
                src=" https://www.ariaresorthotel.com/img/icon/service-icon1.png"
                alt="activities"
              />
               
            </span>
          </div>
          <div className="info">
            <h3 className="info-title">{`${Variables[imageState].title}`}</h3>
            <p className="info-desc">{`${Variables[imageState].desc}`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
