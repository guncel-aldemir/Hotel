import React, { useState } from "react";
import TopPhoto from "../../../assets/Images/headerImages/TAÇ2.jpg";
import "./StandartRoom.scss";
import Room1 from "../../../assets/Images/roomsImages/STD-ODA-1.jpg";
import Room2 from "../../../assets/Images/roomsImages/STD-ODA-2.jpg";
import Room3 from "../../../assets/Images/roomsImages/STD-ODA-3.jpg";
import Room4 from "../../../assets/Images/roomsImages/STD-ODA.jpg";
import Room5 from "../../../assets/Images/roomsImages/STD-SEAVİEW-ROOM.jpg";
import Room6 from "../../../assets/Images/roomsImages/STDSEAVİEW-BALKON.jpg";
import RoomData from "../../../room";
import Footer from "../../../components/footer/Footer";
import {FaBed,FaBinoculars,FaWifi,FaCoffee} from "react-icons/fa";
import {MdPeople} from "react-icons/md";
const StandartRoom = () => {
  const [roomImage,setRoomImage]=useState(0);
  const bgStandart = {
    backgroundImage: `url(${TopPhoto})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "252px",
    width: "100%",
    opacity: ".8",
  };
  const bgImageRoom = {
    backgroundImage: `url(${RoomData[roomImage].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "402px",
    width: "100%",
    
  };
  const handleChange = (pic)=>{
    let newRoomPicture;
    if(pic === "1"){
      newRoomPicture = 0;
    } else if(pic === "2"){
      newRoomPicture =1;
    } else if(pic === "3"){
      newRoomPicture = 2;
    }else{
      newRoomPicture = 3;
    }
    setRoomImage(newRoomPicture)
  }
  return (
    <section className="standart-room">
      <div className="standart-room-header" style={bgStandart}>
        <h3>Standart Oda</h3>
      </div>
      <div className="row standart-roomSide px-4">
        <div className="col-lg-8 col-sm-12 standart-room-info">
          <div className="standart-room-big-picture" style={bgImageRoom}></div>
          <div className="standart-room-pictures">
            <img
              src={Room1}
              alt="room1"
              loading="lazy"
              width={190}
              height={125}
              onClick={()=>handleChange("1")}
            />
            {/* <img src={Room2} alt="room1" loading="lazy" width={190} height={125} /> */}
            <img
              src={Room3}
              alt="room1"
              loading="lazy"
              width={190}
              height={125}
              onClick={()=>handleChange("2")}
            />
            <img
              src={Room4}
              alt="room1"
              loading="lazy"
              width={190}
              height={125}
              onClick={()=>handleChange("3")}
            />
            {/* <img src={Room5} alt="room1" loading="lazy" width={190} height={125} /> */}
            <img
              src={Room6}
              alt="room1"
              loading="lazy"
              width={190}
              height={125}
              onClick={()=>handleChange("4")}
            />
          </div>
          <div className="standart-room-infoTexts">
            <h3>Standartların Üzerinde...</h3>
            <p>
              20-24 m² Standart Oda LCD TV, Uydu yayını, Radyo, Telefon, Minibar
              (su ücretsiz), Split ,Sıcak-Soğuk klima, laminant zemin, Duşa
              kabin / WC, Saç kurutma makinesi, Odada WIFI internet(ücretli), Su
              ısıtıcısı, çay, kahve, süt tozu, şeker (ücretsiz), Balkon, Çamaşır
              yıkama / Ütü (ücretli){" "}
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 standart-room-properties">
          <div className="room-properties">
            <h3>Oda Özellikleri</h3>
            <ul>
              <li><FaBed/> Yatak:1 adet çift kişilik ya da 2 adet tek kişilik</li>
              <li><FaBinoculars/> Manzara:Kara manzaralı</li>
              <li><FaWifi/> Ücretsiz Wifi: Hayır</li>
              <li><FaCoffee/> Kahvaltı: Evet</li>
              {/* <li><MdPeople/></li> */}
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default StandartRoom;
