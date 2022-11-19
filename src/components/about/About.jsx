import React from "react";
import "./About.scss";
import Photo from "../../assets/Images/COVER-PICTURE-HOTEL.jpg";
import PhotoTwo from "../../assets/Images/RESEPSİYON1.jpg"
const About = () => {
  return (
    <section className="px-4  aboutSide">
      <div className="row">
        <div className="col-lg-6 col-sm-6 intro">
        <img src={Photo} alt="hotel"  width={375} className="hotel"/>
        <img src={PhotoTwo} alt="reception" width={375} className="reception" />
        
        
        </div>
        <div className="col-lg-6 col-sm-6 textSide">
          <h4 className="hText">Welcome to <br></br> <span>Taç Premier Hotel & Spa
            </span></h4>
            <p className="pText">
            12 ay güneşin gülümsediği Alanya’da farklılığı ve tarzı ile öne çıkan Taç Premier Hotel & Spa ailesi sizi keyifli anlar yaşayacağınız unutulmaz bir tatile davet ediyor. Güzelliği destan olmuş Kleopatra sahiline sadece 50m mesafede, tarihi Alanya Kalesi'ne, Kızıl Kule’ye, Tersane’ye, Damlataş Mağarasına ve eğlence mekânlarına yürüme mesafesinde, Antalya Havalimanına 120km, Gazipaşa Havalimanına 35km uzaklıkta bulunan Taç Premier Hotel & Spa, Alanya şehir merkezinde olup size şehrin gürültüsünden uzak keyifli bir tatil imkânı sunuyor.
            <br></br>
            <br></br>
            Toplam 7000m2 alan üzerine kurulu olan tesisimiz köprülerle birbirine bağlantılı 7 ayrı binadan oluşmaktadır.
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;
