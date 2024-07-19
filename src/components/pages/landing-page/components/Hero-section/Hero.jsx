import image from "./../../../../../assets/istockphoto-1349328691-612x612.jpg"

export const Hero=()=>{
  return (
    <div className="d-flex align-items-center justify-content-between" style={{ background: "linear-gradient(to left,#eee 0%,#eee 60%, white 60%,white 100%)", height:"500px"}}>
    
    <div className="para d-flex flex-column align-items-center justify-content-center w-100 gap-3" style={{marginRight:"50px"}}>
    <h1 style={{fontSize:"50px"}}>ابتسامة مشرقة تعكس <span style={{color:"var(--primary-color)"}}>جمالك</span></h1>
    <p className="text-black-50" style={{fontSize:"18px"}}>احجز موعدك الآن في عياداتنا لطب الأسنان</p>
    <button  className="btn mt-2 py-3 px-4" style={{backgroundColor:"var(--primary-color)",color:"white"}}>ابدأ معنا</button>
    </div>
    <div className="img">
    <img style={{width:"700px",height:"400px",borderRadius:"0 30px 30px  0"}} src={image} alt="" />
    </div>
    
    </div>
  )
}