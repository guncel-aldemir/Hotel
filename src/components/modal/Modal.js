import "./Modal.scss"
const Modal =({clickedImg,setClickedImg
   })=>{
       
    const handleClose = (e)=>{
        if(e.target.classList.contains("dismiss")){
            setClickedImg(null)
        }
    }
    return (
        <>
    <div className="overlay dismiss" onClick={handleClose}>
        <img src={clickedImg} alt="" />
        <span className="dismiss" onClick={handleClose}>X</span>
    </div>
    </>
    )
}

export default Modal;