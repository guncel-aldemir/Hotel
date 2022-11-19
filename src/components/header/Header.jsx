import React, {  useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./Header.scss";
import Images from "../../data";
import Navbar from "../navbar/Navbar";
const Header = () => {
  const [currentState, setCurrentState] = useState(0);
  const bgImageStyle = {
    backgroundImage: `url(${Images[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "500px",
    width: "100%",
    opacity:".8"
  };

  const handleSwipe = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = currentState === 0 ? 3 : currentState - 1;
    } else {
      newSlideNumber = currentState === 3 ? 0 : currentState + 1;
    }
    setCurrentState(newSlideNumber);
  };

  return (
    <>
    <Navbar/>
    <div className="header" style={bgImageStyle}>
    
        <div className="headerSlider">
        <div className="icons">
        <div className="leftIcon">
          <AiOutlineLeft
          className="arrow"
            color="#fff"
            size={60}
            onClick={() => handleSwipe("l")}
          />
        </div>
        
      </div>
      <div className="information">
        
        <p>Come as Guest. Leave as Family</p>
      </div>
      <div className="rightIcon">
          <AiOutlineRight
          className="arrow"
            color="#fff"
            size={60}
            onClick={() => handleSwipe("r")}
          />
        </div>
        </div>
    
        
    </div>
 
    </>
    
  );
};

export default Header;
