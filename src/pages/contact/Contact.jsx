import React from "react";
import TopPhoto from "../../assets/Images/headerImages/TAÇ2.jpg";
import "./Contact.scss";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
const Contact = () => {
  const bgContact = {
    backgroundImage: `url(${TopPhoto})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "252px",
    width: "100%",
    opacity: ".8",
  };
  return (
    <section className="contactSection">
      <Navbar/>
      <div className="contact-header" style={bgContact}>
        <h3>İletİşİm</h3>
      </div>
      <div className="row contactSide ">
        <div className="col-md-5 contactInfo">
          <div className="contact-texts">
            <ul>
              <li>
                <h5>Adres</h5>
                <span>Atatürk Cad. No: 158 Alanya/Antalya</span>
              </li>
              <li>
                <h5>Bilgi ve Rezervasyon</h5>
                <p>0242 512 32 00</p>
              </li>
              <li>
                <h5>Otel İletişim</h5>
                <p>0242 512 32 00</p>
              </li>
              <li>
                <h5>Web</h5>
                <p>info@tacpremierhotel.com</p>
                <p className="text">reservation@tacpremierhotel.com</p>
              </li>
              <li>
                <h5>Sosyal Medya</h5>
                <Link to="">
                  <FaFacebookF color="#fff" />
                </Link>
                <Link to="">
                  <FiInstagram color="#fff" />
                </Link>
                <Link to="">
                  <FaLinkedinIn color="#fff" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-7 formSide">
          <div className="contact-form">
            <div className="contact-form-title">
              <h3>Rezervasyon Formu</h3>
            </div>
            <form id="contact-form" className="form-side">
              <div className="row form">
                <div className="col-md-6 general">
                  <div className="inputSide">
                    <input placeholder="Ad Soyad" type="text" />
                  </div>
                </div>
                <div className="col-md-6  general">
                  <div className="inputSide">
                    <input placeholder="Email" type="Email" />
                  </div>
                </div>
                <div className="col-md-6  general">
                  <div className="inputSide">
                    <input placeholder="Telefon" type="text" />
                  </div>
                </div>
                <div className="col-md-6  general">
                  <div className="inputSide">
                    <input placeholder="Konu" type="text" />
                  </div>
                </div>
                <div className="col-md-12 textArea">
                  <div className="inputSide">
                    <textarea placeholder="Mesajınız" cols="10" rows="4" />
                  </div>
                </div>
                <div className="inputSide">
                  <button className="send-button" type="submit">
                    Gönder
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row map">
        <div className="col-md-12 mapSide">
        <iframe title="one" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12820.84960095686!2d31.9816397!3d36.5489913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66394c93333db83f!2sTA%C3%87%20Premier%20Hotel%20%26%20Spa!5e0!3m2!1str!2str!4v1668948577829!5m2!1str!2str" width="100%"  height="450"   loading="lazy" ></iframe>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;
