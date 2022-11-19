import React, { useState } from "react";
import "./RestaurantsBar.scss";
import RestaurantsData from "../../restaurantsData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Photo1 from "../../assets/Images/restaurantImages/RESTAURANT-INDOOR-BLUE.jpg";
import TopPhoto from "../../assets/Images/headerImages/TAÇ2.jpg";
import Bar from "../../assets/Images/restaurantImages/LOBBY-BAR-TERRACE.jpg";
import Footer from "../../components/footer/Footer"
const RestaurantsBar = () => {
  const [food, setFood] = useState(0);
  const bgImageRestaurant = {
    backgroundImage: `url(${TopPhoto})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "252px",
    width: "100%",
    opacity: ".8",
  };
  const bgImageFoods = {
    backgroundImage: `url(${RestaurantsData[food].image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "232px",
  };
  const handleSwipe = (direction) => {
    let newFoodNumber;
    if (direction === "l") {
      newFoodNumber = food === 0 ? 4 : food - 1;
    } else {
      newFoodNumber = food === 4 ? 0 : food + 1;
    }
    setFood(newFoodNumber);
  };

  return (
    <section className="restaurants-bar">
      <div className="restaurants" style={bgImageRestaurant}>
        <h3>Restaurant & Bar</h3>
      </div>
      <div className="restaurants-main-titleSide">
        <h3 className="restaurants-main-title">Gurme Lezzetler</h3>
        <p className="restaurants-main-subtitle">
          Dünya ve Türk Mutfaklarından eşsiz lezzetli tariflerle en iyi hizmet…
        </p>
      </div>
      <div className="row first">
        <div className="col-lg-6 col-sm-6 images-foods" style={bgImageFoods}>
          <div className="arrow-left">
            <AiOutlineLeft
              className="arrow"
              color="#d2ab67"
              size={36}
              onClick={() => handleSwipe("l")}
            />
          </div>
          <div className="arrow-right">
            <AiOutlineRight
              className="arrow"
              color="#d2ab67"
              size={36}
              onClick={() => handleSwipe("r")}
            />
          </div>
        </div>
        <div className="col-lg-5 col-sm-6 mainText">
          <span>
            Kahvaltı, öğlen ve akşam yemeklerinde açık büfe olarak Türk
            mutfağının geleneksel tatlarını ve dünya mutfaklarının farklı
            lezzetlerini harmanlayarak siz değerli misafirlerimizin beğenisine
            sunuyoruz.
          </span>
          <br></br>
          <br></br>
          <span>
            {" "}
            Öğleden sonraları ek olarak hizmet verdiğimiz Snack büfemiz ve gece
            çorbamız ile yemek saatlerinizi alışıldık kalıplardan çıkartıyoruz.
            Öğleden sonralarınızın çay-kahve keyfini de ev yapımı kek ve
            kurabiyelerle tamamlıyoruz.
          </span>
        
        </div>
      </div>
      <div className="row second ">
        <div className="col-lg-6 col-sm-6 restaurantSecondSide">
          <h3>Restaurant</h3>
          <span>
            Klasik ve rahat stilin modern çizgilerle buluştuğu restoranımız üç
            yarı locası ve hava şartlarına bağlı olarak kullanıma sunduğumuz
            açık restoran bölümümüz ile toplam 600 kişiye aynı anda yer
            sunabilmektedir.
          </span>
          <span>**Restoranda mama sandalyesi mevcuttur.</span>
          <ul>
            <li>Kahvaltı: 07:30-10:00 Restoran</li>
            <li>Geç Kahvaltı: 10:00-10:30 Restoran</li>
            <li>Öğlen Yemeği: 12:30-14:00 Restoran</li>
           
            <li>Akşam Yemeği: 19:00-21:00 Restoran</li>
            <li>Gece Çorbası: 23:30-24:00 Restoran</li>
          </ul>
        </div>
        <div className="col-lg-6 col-sm-6 photoSideRestaurant">
          <img loading="lazy" src={Photo1} alt="" height={300} />
        </div>
      </div>
      <div className="row third">
        <div className="col-lg-6 photoBarSide">
          <img src={Bar} alt="bar" />
        </div>
        <div className="col-lg-6 barThirdSide ">
          <h3>Lobi-Bar</h3>
         
          
          <span>
            **Taze sıkılmış meyve suları, köpüklü şarap, Türk kahvesi, ithal
            içkiler, şişe içecekler, nargile ücretlidir.
          </span>
          
          <span>**24:00-10:00 arası tüm içecekler ücretlidir.</span>
          <ul>
            <li>Lobi Bar: 10:00-24:00</li>
            <li>Pool Bar: 10:00-24:00</li>
            <li>Snack: 12:00-16:00 Pool Bar</li>
            <li>Pasta&Dondurma: 16:00-17:00 Pool Bar</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default RestaurantsBar;
