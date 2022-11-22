import React from "react";
import Pool from "../../assets/Images/poolsImages/HAVUZ2.jpg";
import Hotel from "../../assets/Images/ourHotelsImages/COVER-PICTURE-HOTEL.jpg";
import Sea from "../../assets/Images/spaSaunaImages/FITNESS.JPG";
import Terrace from "../../assets/Images/generalImages/TERRACE.jpg";
import Terrace2 from "../../assets/Images/ourHotelsImages/TERRACE-CASTLE-VIEW.jpg";
import Restaurant from "../../assets/Images/generalImages/HAVUZ-KENARI-RESTAURANT.jpg";
import "./Photos.scss";
import { Link } from "react-router-dom";
const Photos = () => {
  return (
    <section className="general-photos">
        
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
                src={Pool}
                alt="pool"
                
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
              
              />
            </div>
            <div className="Phototext"><Link to="/">
                    Teras Kamelya
                </Link></div>
          </div>
          <div className="part">
            <div className="photo">
              <img
                loading="lazy"
                src={Sea}
                alt="sea"
                
                width={300}
              />
              <div className="Phototext"> <Link to="/">
                  Fitness
                </Link></div>
            </div>
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
