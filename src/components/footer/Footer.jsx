import React from "react";
import { Link, NavLink } from "react-router-dom";
import {FaFacebookF,FaLinkedinIn,FaYoutube} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi"
import{AiOutlineRight,AiFillHome} from "react-icons/ai";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GrMail} from "react-icons/gr";

import "./Footer.scss"
const Footer = () => {
    
  return <footer className="footer">
    <div className="row ">
        <div className="col-lg-3 col-sm-4 hotelMedia">
            <div className="footer-logo"> 
            
                <img src="https://www.tacpremierhotel.com/assets/images/tacLogo.png" alt="footer logo" />
            </div>
            <div className="social-media-title">
                <h3>Sosyal Medya</h3>
            </div>
            <div className="footer-icons">
                <a  href="https://tr-tr.facebook.com/Tacpremierhotel/" target={"_blank"} rel="noreferrer" >
                <FaFacebookF color="#fff" className="icon"/>
                </a>
                <a href="https://www.instagram.com/tacpremier/?hl=tr" target={"_blank"} rel="noreferrer"><FiInstagram color="#fff" className="icon"/>
                </a>
                <Link to="/"><FaLinkedinIn color="#fff" className="icon"/>
                </Link>
                <a href="https://www.youtube.com/watch?v=EuVP2tE1seY" target={"_blank"} rel="noreferrer"><FaYoutube color="#fff" className="icon"/>
                </a>
            </div>
        </div>
        <div className="col-lg-2 col-sm-6 footer-main">
            <div className="footer-menu">
                <h3>Menu</h3>
                <NavLink to="/otelimiz">
                    <AiOutlineRight/>
                    Otelimiz
                </NavLink>
                <NavLink to="/odalarimiz">
                <AiOutlineRight/>
                    Konaklama
                </NavLink>
                <NavLink to="/restaurant">
                <AiOutlineRight/>
                    Restaurant&Bar
                </NavLink>
                <NavLink to="/spa">
                <AiOutlineRight/>
                   Spa
                </NavLink>
                <NavLink to="/aktiviteler">
                <AiOutlineRight/>
                   Aktivite
                </NavLink>
                <NavLink to="/iletişim">
                <AiOutlineRight/>
                    İletişim
                </NavLink>
            </div>
            
        </div>
        <div className="col-lg-3 col-sm-4 footer-main-two">
        <div className="footer-company">
                <h3>Kurumsal</h3>
                <NavLink>
                    <AiOutlineRight/>
                    KVKK/GDPR
                </NavLink>
                <NavLink>
                <AiOutlineRight/>
                    Çerez Politikası
                </NavLink>
                <NavLink>
                <AiOutlineRight/>
                    KVKK Başvuru formu
                </NavLink>
                <NavLink>
                <AiOutlineRight/>
                   FactSheet
                </NavLink>
                
            </div>
        </div>
        <div className="col-lg-4 col-sm-6 footer-contact">
            <h3 className="contact-title">İletişim</h3>
            <p className="contact-text">2 ay güneşin gülümsediği Alanya’da farklılığı ve tarzı ile öne çıkan Taç Premier Hotel & Spa ailesi sizi keyifli anlar yaşayacağınız unutulmaz bir tatile davet ediyor. </p>
            <ul className="contact">
                <li><AiFillHome/>Atatürk Caddesi No:158 Alanya/Antalya</li>
                <li><BsFillTelephoneFill/>Reservasyon-Bilgi: +90 (242) 272 79 41</li>
                <li><BsFillTelephoneFill/>Otel İletişim: +90 (242) 513 76 18</li>
                <li><GrMail/>info@tacpremierhotel.com</li>
            </ul>
            
        </div>
       
    </div>
  </footer>;
};

export default Footer;
