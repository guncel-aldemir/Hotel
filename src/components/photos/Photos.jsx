import React from "react";
import Pool from "../../assets/Images/generalImages/HAVUZ6.jpg";
import Hotel from "../../assets/Images/generalImages/DIŞ-CEPHE2.jpg";
import Sea from "../../assets/Images/generalImages/SAHİL-18.jpg";
import Terrace from "../../assets/Images/generalImages/TERRACE.jpg";
import Terrace2 from "../../assets/Images/generalImages/TERAS-KAMELYA.jpg";
import Restaurant from "../../assets/Images/generalImages/HAVUZ-KENARI-RESTAURANT.jpg";
import "./Photos.scss";
import { Link } from "react-router-dom";
const Photos = () => {
  return (
    <section className="general-photos px-4">
        
      <div className="photosPart">
      <h3 className="title">Taç Premier Hotel&Spa</h3>
      <span className="subtitle">Deniz Ve Gökyüzü Arasında Tatil</span>
        <div className="photosFirstPart">
          <div className="part">
            <div className="photo">
              <img
                loading="lazy"
                src={Hotel}
                alt="hotel"
                width={300}
                height={300}
              />
            </div>
            <div className="Phototext">
                <Link to="/">
                    Taç Premier Hotel
                </Link>
            </div>
          </div>
          <div className="part">
            <div className="photo">
              <img
                loading="lazy"
                src={Sea}
                alt="sea"
                height={300}
                width={300}
              />
              <div className="Phototext"> <Link to="/">
                   Plaj
                </Link></div>
            </div>
          </div>
          <div className="part">
            <div className="photo">
              <img
                loading="lazy"
                src={Pool}
                alt="pool"
                height={300}
                width={300}
              />
            </div>
            <div className="Phototext"> <Link to="/">
                    Havuz
                </Link></div>
          </div>
          <div className="part">
            <div className="photo">
              <img
                loading="lazy"
                src={Terrace2}
                alt="terrace2"
                width={300}
                height={300}
              />
            </div>
            <div className="Phototext"><Link to="/">
                    Teras Kamelya
                </Link></div>
          </div>
        </div>
        <div className="photosSecondPart">
          <div className="part">
            <div className="photo">
              <img
                loading="lazy"
                src={Restaurant}
                alt="restaurant"
                height={300}
                width={600}
              />
            </div>
            <div className="Phototext"> <Link to="/">
                   Havuz Başı Restaurant
                </Link></div>
          </div>
          <div className="part">
            <div className="photo">
              <img
                loading="lazy"
                src={Terrace}
                alt="terrace"
                width={600}
                height={300}
              />
            </div>
            <div className="Phototext"> <Link to="/">
                   Teras
                </Link></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photos;
