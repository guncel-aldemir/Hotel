import React from "react";
import TopPhoto from "../../assets/Images/headerImages/TAÇ2.jpg";
import "./Activities.scss";
import activitiesData from "../../activities";
import Footer from "../../components/footer/Footer";
const Activities = () => {
    const bgFamily = {
        backgroundImage: `url(${TopPhoto})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "252px",
        width: "100%",
        opacity: ".8",
      };
  return <section className="activities"> 
  <div className="activities-header" style={bgFamily}>
  <h3>Aktİvİteler</h3>
</div>
<div className="activitiesInfo">
    <h3>Animasyon & Aktiviteler</h3>
    <p>Taç Premium Hotel&Spa her yaşa hitap eden eğlence ve spor alanlarının yanı sıra özel şovlar, sürpriz gösteriler, sezona ve özel günlere özel gösterilerle aktivite ve eğlenceyi misafirlerine bir arada sunar.</p>
</div>
<div className="row activitiesSide px-4">
      <div className="col-lg-12 activitiesCards">
        {activitiesData.map((data)=>(
            <div className="activitieCard" key={data.id}>
            <div className="activitiePhoto">
            <img src={data.image} alt="" width={370}/>
            </div>
            <div className="activitiesText">
                <span>{data.desc}</span>
            </div>
           
        </div>
        ))}
        
      </div>
</div>
<Footer/>
</section>;
};

export default Activities;
