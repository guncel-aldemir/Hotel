import React, { useState } from "react";
import "./RestaurantsBar.scss";
import RestaurantsData from "../../restaurantsData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const RestaurantsBar = () => {
  const [food, setFood] = useState(0);
  const bgImageRestaurant = {
    backgroundImage: `url(https://www.tacpremierhotel.com/assets/restImg/rest8.JPG)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "232px",
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
      newFoodNumber = food === 0 ? 5 : food - 1;
    } else {
      newFoodNumber = food === 5 ? 0 : food + 1;
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
            <div className="col-lg-7 col-sm-6 images-foods" style={bgImageFoods}>
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
        <div className="col-lg-5 col-sm-6">
            <span>Kahvaltı, öğlen ve akşam yemeklerinde açık büfe olarak Türk mutfağının geleneksel tatlarını ve dünya mutfaklarının farklı lezzetlerini harmanlayarak siz değerli misafirlerimizin beğenisine sunuyoruz.</span>
            
            <span>Sezonda haftanın iki akşamı konu gecesi ve şovlar ile tatilinize farklılık katarken öğleden sonraları ek olarak hizmet verdiğimiz Snack büfemiz ve gece çorbamız ile yemek saatlerinizi alışıldık kalıplardan çıkartıyoruz. Öğleden sonralarınızın çay-kahve keyfini de ev yapımı kek ve kurabiyelerle tamamlıyoruz.</span>
            <span>Klasik ve rahat stilin modern çizgilerle buluştuğu restoranımız üç yarı locası ve hava şartlarına bağlı olarak kullanıma sunduğumuz açık restoran bölümümüz ile toplam 600 kişiye aynı anda yer sunabilmektedir.</span>
        </div>
        <div className="row second ">
        <div className="col-lg-6">adss</div>
        <div className="col-lg-6">dasd</div>
        </div>
        
      </div>
      RestaurantsBar
    </section>
  );
};

export default RestaurantsBar;
