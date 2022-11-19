import React from "react";
import "./Spa.scss"
import TopPhoto from "../../assets/Images/headerImages/TAÇ2.jpg";
import Sauna from "../../assets/Images/spaSaunaImages/SAUNA.JPG";
import Bath from "../../assets/Images/spaSaunaImages/TURKISH BATH.jpg";
import Pool from "../../assets/Images/poolsImages/INDOOR-POOL.jpg"
import Fitness from "../../assets/Images/spaSaunaImages/FITNESS.JPG"
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
            <div className="spaCard">
                <div className="spaPhoto">
                <img src={Sauna} alt="" width={300} height={400}/>
                </div>
                <div className="spaText">
                <h3>Sauna</h3>
                    <span>Farklı hava koşullarında da tatil keyfinize ara vermeden tadını çıkarabileceğiniz kapalı havuzumuz 4 mevsim boyunca hizmet vermektedir.</span>
                </div>
            </div>
        <div className="poolCard">
            <div className="poolPhoto">
            <img src={Pool} alt="" width={300} height={400}/>
            </div>
            <div className="poolText">
                <h3>Kapalı Havuz</h3>
                <span>Farklı hava koşullarında da tatil keyfinize ara vermeden tadını çıkarabileceğiniz kapalı havuzumuz 4 mevsim boyunca hizmet vermektedir.</span>
            </div>
        </div>
        </div>
        <div className="col-lg-6 col-sm-6 spaCardTwo">
        <div className="bathCard">
            <div className="bathPhoto">
            <img src={Bath} alt="" width={300} height={400}/>
            </div>
            <div className="bathText">
                <h3>Hamam</h3>
                <span>Özel tasarlanmış Türk hamamı hem vücudunuzu hem ruhunuzu tazeleyin</span>
            </div>
        </div>
        <div className="fitnessCard">
            <div className="fitnessPhoto">
            <img src={Fitness} alt="" width={300} height={400}/>
            </div>
            <div className="fitnessText">
                <h3>Fitness</h3>
                <span>Özel tasarlanmış Türk hamamı hem vücudunuzu hem ruhunuzu tazeleyin</span>
            </div>
        </div>
        </div>
    </div>
  </section>;
};

export default Spa;
