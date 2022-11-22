import React,{useEffect, useMemo, useState} from "react";
import "./Galleries.scss";
import TopPhoto from "../../assets/Images/headerImages/TAÇ2.jpg";
import Datas from "../../gallery";
import Footer from "../../components/footer/Footer";
import Modal from "../../components/modal/Modal";
import Navbar from "../../components/navbar/Navbar";

const Galleries = () => {

  const [photos,setPhotos] = useState([]);
  const [category,setCategory]= useState();

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const bgGalery = {
    backgroundImage: `url(${TopPhoto})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "252px",
    width: "100%",
    opacity: ".8",
  };
 
useEffect(()=>{
  setPhotos(Datas)
},[])

const getFilteredList = ()=>{
if(!category){
  
  return photos;
  
}
return photos.filter((item)=>item.subject === category)

}


let filteredList = useMemo(getFilteredList,[category,photos])

const handleCategory = (filtered)=>{
 
  setCategory(filtered)

}
const handleImage=(item,index)=>{
setCurrentIndex(index)
setClickedImg(item.image)
}


  return <section className="galerySection">
    <Navbar/>
     <div className="galery-header" style={bgGalery}>
        <h3>Galerİ</h3>
      </div>
      <div className="photosSide">
        <div className="filterSide">
          <span onClick={()=>handleCategory("")}  >Tümü</span>
          <span onClick={()=>handleCategory("genel")} >Genel</span>
           <span onClick={()=>handleCategory("room")} >Odalarımız</span>
          <span onClick={()=>handleCategory("restaurant")}>Restaurant&Bar</span>
          <span onClick={()=>handleCategory("spa")} >Spa</span>
          <span onClick={()=>handleCategory("blue")} >Havuz-Plaj</span>
          <span onClick={()=>handleCategory("activity")}>Aktiviteler</span> 
        </div>

        <div className="row photos">
       
          <div className="col-lg-6 col-sm-6 photoItems px-4">
            {filteredList.map((item,index)=>(
              <div className="photoItem" key={index} >
                <img loading="lazy" src={item.image} width={300} height={300} alt="" onClick={()=>handleImage(item,index)} />
              </div>
             
            ))}
            
            </div> 
            {clickedImg && <Modal clickedImg={clickedImg}  setClickedImg={setClickedImg}/>} 
          </div>
      </div>
      <Footer/>
  </section>;
};

export default Galleries;
