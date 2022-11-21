import React from "react";
import "./Spa.scss"
import TopPhoto from "../../assets/Images/headerImages/TAÇ2.jpg";
import Sauna from "../../assets/Images/spaSaunaImages/SAUNA.JPG";
import Bath from "../../assets/Images/spaSaunaImages/TURKISH-BATH.jpg";
import Pool from "../../assets/Images/poolsImages/INDOOR-POOL.jpg"
import Fitness from "../../assets/Images/spaSaunaImages/FITNESS.JPG";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
const Spa = () => {
    const bgImageSpa = {
        backgroundImage: `url(${TopPhoto})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "252px",
        width: "100%",
        opacity: ".8",
      };
  return <section className="spaSide">
    <Navbar/>
    <div className="spaHeader" style={bgImageSpa}>
    <h3>Spa</h3>
    </div>
    <div className="main-spa">
        <h3 className="main-title">
        Yenilenme Zamanı
        </h3>
        <span className="main-subtitle">
        Özel SPA alanında farklı masaj, terapi ve uygulamaları bulabileceksiniz. Profesyonel masörlerimiz eşliğinde tepeden tırnağa yenileneceğiniz bir SPA deneyimine hazır olun. Geleneksel ve modern ögelerin bir arada sunulduğu Türk hamamımızda kendinizi şımartın.
        </span>
    </div>
    <div className="row spaCards">
        <div className="col-lg-6 col-sm-6 spaCardOne">
            <div className="col-lg-3 spaCard">
                <div className="spaPhoto">
                <img loading="lazy" src={Sauna} alt="" width={500} height={400}/>
                </div>
                <div className="spaText">
                <h5>Sauna</h5>
                    <span>Özel SPA alanında farklı masaj, terapi ve uygulamaları bulabileceksiniz.</span>
                </div>
            </div>
        <div className="col-lg-3 poolCard">
            <div className="poolPhoto">
            <img loading="lazy" src={Pool} alt="" width={500} height={400}/>
            </div>
            <div className="poolText">
                <h5>Kapalı Havuz</h5>
                <span>Farklı hava koşullarında da tatil keyfinize ara vermeden tadını çıkarabileceğiniz kapalı havuzumuz 4 mevsim boyunca hizmet vermektedir.</span>
            </div>
        </div>
        </div>
        <div className="col-lg-6 col-sm-6 spaCardTwo">
        <div className="col-lg-3 bathCard">
            <div className="bathPhoto">
            <img src={Bath} alt="" width={300} height={400}/>
            </div>
            <div className="bathText">
                <h5>Hamam</h5>
                <span>Özel tasarlanmış Türk hamamı hem vücudunuzu hem ruhunuzu tazeleyin</span>
            </div>
        </div>
        <div className="col-lg-3 fitnessCard">
            <div className="fitnessPhoto">
            <img src={Fitness} alt="" width={300} height={400}/>
            </div>
            <div className="fitnessText">
                <h5>Fitness</h5>
                <span>Özel tasarlanmış Fitness salonumuz ile hem vücudunuzu  tazeleyin</span>
            </div>
        </div>
        </div>
    </div>
    <Footer/>
  </section>;
};

export default Spa;
