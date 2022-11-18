import React from "react";
import "./About.scss"
const About = () => {
  return (
    <section className="px-4  aboutSide">
      <div className="row">
        <div className="col-lg-7 col-sm-6 intro">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EuVP2tE1seY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{"borderRadius":"10%"}}></iframe>
        </div>
        <div className="col-lg-5 col-sm-6 textSide">
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
