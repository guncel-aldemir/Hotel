import React from "react";
import TopPhoto from "../../assets/Images/headerImages/TAÇ2.jpg";
import "./Hotel.scss";
import Cover from "../../assets/Images/headerImages/TAÇ1 .jpg";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
const Hotel = () => {
  const bgHotel = {
    backgroundImage: `url(${TopPhoto})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "252px",
    width: "100%",
    opacity: ".8",
  };
  return (
    <section className="hotelSide">
      <Navbar/>
      <div className="hotel-header" style={bgHotel}>
      <h3>Hakkımızda</h3>
      </div>
      <div className=" row information-hotel px-4">
        <div className="col-lg-7 col-sm-6 imageHotel">
          <img  src={Cover} alt=""  />
        </div>
        <div className="col-lg-5 col-sm-6 textHotel">
        <h3>Welcome to Taç Premier Hotel & Spa</h3>
        <p>12 ay güneşin gülümsediği Alanya’da farklılığı ve tarzı ile öne çıkan Taç Premier Hotel & Spa ailesi sizi keyifli anlar yaşayacağınız unutulmaz bir tatile davet ediyor. Güzelliği destan olmuş Kleopatra sahiline sadece 50m mesafede, tarihi Alanya Kalesi'ne, Kızıl Kule’ye, Tersane’ye, Damlataş Mağarasına ve eğlence mekânlarına yürüme mesafesinde, Antalya Havalimanına 120km, Gazipaşa Havalimanına 35km uzaklıkta bulunan Taç Premier Hotel & Spa, Alanya şehir merkezinde olup size şehrin gürültüsünden uzak keyifli bir tatil imkânı sunuyor.</p>
        </div>
        
      </div>
      <div className="tableSide">
        <h3>Genel Bilgiler</h3>
      <table>
        <thead>
          <tr>
            <th className="text-center">Hizmetler</th>
            <th className="text-center">Ücretsiz</th>
            <th className="text-center">Ücretli</th>
            <th>Hizmetler</th>
            <th className="text-center">Ücretsiz</th>
            <th className="text-center">Ücretli</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h6>Wifi</h6>
            </td>
            <td>
              <p className="price text-center">
                <span className="amout"></span>
              </p>
            </td>
            <td>
              <p className="price">
                <span className="amout">✔</span>
              </p>
            </td>
            <td>
              <h6>Oda Servisi</h6>
            </td>
            <td>
              <p className="price">
                <span className="amout"></span>
              </p>
            </td>
            <td>
              <p className="price text-center">
                <span className="amout">✔</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Spor Merkezi</h6>
            </td>
            <td>
              <p className="price text-center">
                <span className="amout">✔</span>
              </p>
            </td>
            <td>
              <p className="price">
                <span className="amout"></span>
              </p>
            </td>
            <td>
              <h6>Masaj</h6>
            </td>
            <td>
              <p className="price">
                <span className="amout"></span>
              </p>
            </td>
            <td>
              <p className="price text-center">
                <span className="amout">✔</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Hamam</h6>
            </td>
            <td>
              <p className="price text-center">
                <span className="amout"></span>
              </p>
            </td>
            <td>
              <p className="price">
                <span className="amout">✔</span>
              </p>
            </td>
            <td>
              <h6>Havalimanı Transfer</h6>
            </td>
            <td>
              <p className="price">
                <span className="amout"></span>
              </p>
            </td>
            <td>
              <p className="price text-center">
                <span className="amout">✔</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Sauna</h6>
            </td>
            <td>
              <p className="price text-center">
                <span className="amout">✔</span>
              </p>
            </td>
            <td>
              <p className="price">
                <span className="amout"></span>
              </p>
            </td>
            <td>
              <h6>Faks &amp; Fotokopi</h6>
            </td>
            <td>
              <p className="price">
                <span className="amout"></span>
              </p>
            </td>
            <td>
              <p className="price text-center">
                <span className="amout">✔</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Çamaşırhane &amp; Terzi</h6>
            </td>
            <td>
              <p className="price">
                <span className="amout"></span>
              </p>
            </td>
            <td>
              <p className="price text-center">
                <span className="amout">✔</span>
              </p>
            </td>
            <td>
              <h6>Araç Kiralama</h6>
            </td>
            <td>
              <p className="price">
                <span className="amout"></span>
              </p>
            </td>
            <td>
              <p className="price text-center">
                <span className="amout">✔</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Doktor &amp; Hemşire Hizmeti (24/7)</h6>
            </td>
            <td>
              <p className="price">
                <span className="amout"></span>
              </p>
            </td>
            <td>
              <p className="price text-center">
                <span className="amout">✔</span>
              </p>
            </td>
            <td>
              <h6>Pavilion</h6>
            </td>
            <td>
              <p className="price">
                <span className="amout"></span>
              </p>
            </td>
            <td>
              <p className="price text-center">
                <span className="amout">✔</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer/>
    </section>
    
  );
};

export default Hotel;
