import React from "react";
import TopPhoto from "../../assets/Images/headerImages/TAÇ2.jpg";
import "./Accommodation.scss";
import Std from "../../assets/Images/roomsImages/STD-ODA-1.jpg";
import Family from "../../assets/Images/roomsImages/STD-SEAVİEW-ROOM.jpg";
import { NavLink } from "react-router-dom";
import {AiFillCaretRight} from "react-icons/ai";
import Footer from "../../components/footer/Footer";
const Accommodation = () => {
  const bgAccommodation = {
    backgroundImage: `url(${TopPhoto})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "252px",
    width: "100%",
    opacity: ".8",
  };
  return (
    <section className="accommodationSide">
      <div className="accommodation-header" style={bgAccommodation}>
        <h3>Accommodation</h3>
      </div>
      <div className="accommodation-main-titleSide">
        <p className="accommodation-main-subtitle">
          Zevkli ve modern bir şekilde donatılmış odalarımızda siz değerli
          misafirlerimize eşsiz bir tatil imkanı sunmaktayız.
        </p>
      </div>
      <div className="row firstRoom  px-4">
      <div className="col-lg-6 col-sm-6 images-accommodation">
            <img loading="lazy" src={Std}  height={310}alt="room-standart" />
            </div>
        <div className="col-lg-6 col-sm-6 texts-accommodation">
        <div className="accommodation-Texts">
        <h3>Standart Oda</h3>
        <span>Standartların Üzerinde...</span>
        <p>
        Konforunuza yönelik tasarlanan  Standart odalarda Taç Premium & Spa'nın kusursuz hizmetlerini deneyimleyin.
        </p>
        </div>
        <div className="accommodation-link">
            <NavLink to="/odalarimiz/standart" >Odayı İncele
            <AiFillCaretRight color="#d2ab67"/> </NavLink>
        </div>
        </div>
        
      </div>
      <div className="row secondRoom  px-4">
      <div className="col-lg-6 col-sm-6 images-accommodation">
            <img loading="lazy" src={Family}  height={310}alt="room-family" />
            </div>
        <div className="col-lg-6 col-sm-6 texts-accommodation-family">
        <div className="accommodation-Texts-family">
        <h3>Aile Odası</h3>
        <span>Standartların Üzerinde...</span>
        <p>
        Konforunuza yönelik tasarlanan  Standart odalarda Taç Premium & Spa'nın kusursuz hizmetlerini deneyimleyin.
        </p>
        </div>
        <div className="accommodation-link-family">
            <NavLink to="/odalarimiz/aile" >Odayı İncele
            <AiFillCaretRight color="#d2ab67"/> </NavLink>
        </div>
        </div>
        
      </div>
      <Footer/>
    </section>
  );
};

export default Accommodation;
