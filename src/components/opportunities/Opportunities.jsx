import React,{useState} from "react";
import Variables from "../../opportunity";
import "./Opportunities.scss";
const Opportunities = () => {
const [imageState,setImageState]=useState(0);
const [active,setActive]=useState(0);
console.log(Variables[2].url);
    const bgImages = {
        backgroundImage: `url(${Variables[imageState].url}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "350px",
        width: "450px",
       opacity:".8"
      };
      const handleClick = (change)=>{
        let changeVariable;
        let color;
        if(change === "p"){ 
            console.log("p çalıştı");
            changeVariable = 0
            color = 0
            
           
        } else if(change === "f"){
            console.log("f çalıştı");
            changeVariable = 1
            color = 1
            
        }else{
            console.log("o çalıştı");
            changeVariable = 2
            color=2
        }
        setImageState(changeVariable);
        setActive(color)
      }
     
  return <section className="opportunities px-4">
    <div className="row">
        <h3 className="main-title">Hİzmetlerİmİz</h3>
        <span className="main-subtitle">Profesyonel Hizmetlerimiz</span>
        <div className="col-md-4 images" style={bgImages}  >
            
        </div>
        <div className="col-md-6 texts">
        <div className="icons">
            <span className={active === 0 ? "active" :"pool" }  >
            <img src="https://www.ariaresorthotel.com/img/icon/service-icon2.png " alt="pool" onClick={()=>handleClick("p")}  />
            </span>
            <span className={active === 1 ? "active" :"food" } >
            <img src=" https://www.ariaresorthotel.com/img/icon/service-icon3.png" alt="food" onClick={()=>handleClick("f")}  />
            </span>
            <span className={active === 2 ? "active" :"organization" }  >
            <img src="https://www.ariaresorthotel.com/img/icon/service-icon4.png" alt="organization" onClick={()=>handleClick("o")}  />
            </span>
            </div>
            <div className="info">
                <h3>{`${Variables[imageState].title}`}</h3>
                <p>{`${Variables[imageState].desc}`}</p>
                {Variables[imageState].subtitle ? <h5>{`${Variables[imageState].subtitle}`}</h5>: ""}
                {Variables[imageState].desc2 ?  <p>{`${Variables[imageState].desc2}`}</p>: ""}
                
                {Variables[imageState].desc3 ?  <p>{`${Variables[imageState].desc3}`}</p>: ""}
            </div>
            
            
            
           
        </div>
    </div>
  </section>;
};

export default Opportunities;
