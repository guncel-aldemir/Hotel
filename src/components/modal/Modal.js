import "./Modal.scss"
const Modal =({clickedImg, handleRotationRight, setClickedImg})=>{
    const handleClose = (e)=>{
        if(e.target.classList.contains("dissmiss")){
            setClickedImg(null)
        }
    }
    return (
        <>
        <div className="overlay dissmiss" onClick={handleClose}></div>
        <img src={clickedImg} alt="" width={300}/>
        <span className="dissmiss"  onClick={handleClose}>X</span>
        <div onClick={handleRotationRight} className="overlay-arrows__left">
            L
        </div>
        </>
    )
}

export default Modal;