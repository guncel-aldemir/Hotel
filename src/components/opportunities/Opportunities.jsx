import React, { useState } from "react";
import Variables from "../../opportunity";
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
    width: "450px",
    opacity: ".8",
  };
  const handleClick = (change) => {
    let changeVariable;
    let color;
    if (change === "p") {
      changeVariable = 0;
      color = 0;
    } else if (change === "f") {
      changeVariable = 1;
      color = 1;
    } else {
      changeVariable = 2;
      color = 2;
    }
    setImageState(changeVariable);
    setActive(color);
  };

  return (
    <section className="opportunities px-4">
      <div className="row">
        <h3 className="main-title">Hİzmetlerİmİz</h3>
        <span className="main-subtitle">Profesyonel Hizmetlerimiz</span>
        <div className="col-md-4 images" style={bgImages}></div>
        <div className="col-md-6 texts">
          <div className="icons">
            <span
              className={active === 0 ? "active" : "pool"}
              onClick={() => handleClick("p")}
            >
              <img loading="lazy"
                src="https://www.ariaresorthotel.com/img/icon/service-icon2.png "
                alt="pool"
              />
            </span>
            <span
              className={active === 1 ? "active" : "food"}
              onClick={() => handleClick("f")}
            >
              <img loading="lazy"
                src=" https://www.ariaresorthotel.com/img/icon/service-icon3.png"
                alt="food"
              />
            </span>
            <span
              className={active === 2 ? "active" : "organization"}
              onClick={() => handleClick("o")}
            >
              <img loading="lazy"
                src="https://www.ariaresorthotel.com/img/icon/service-icon4.png"
                alt="organization"
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
