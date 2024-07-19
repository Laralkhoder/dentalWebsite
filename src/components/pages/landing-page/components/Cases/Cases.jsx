import Carousel from 'react-bootstrap/Carousel';
import img1 from "./../../../../../assets/cases/360_F_269973202_B89lsfasciLOCLVIrbI6BeWkyY9nod5p.jpg"
import img2 from "./../../../../../assets/cases/download.jpeg"
import img3 from "./../../../../../assets/cases/images.jpeg"
export const Cases=()=>{
  return (
    <section className="about-us d-flex flex-column align-items-center mt-5 py-4" style={{borderRight:"30px solid  var(--primary-color)",borderLeft:"30px solid  var(--primary-color)"}}>
<div className="title" style={{fontSize: "32px",fontWeight: "500",  paddingBottom: "8px", borderBottom:" 2px solid var(--primary-color)"}}>الحالات الأكثر شيوعاً</div>
<div className="carousel mt-5 " style={{width:"1000px"}}>
<Carousel fade>
<Carousel.Item>
<div className="img">
<img src={img1} alt="" width="1000px" height="500px"/>
</div>
<div className="caption" style={{backgroundColor:"black"}}>
<Carousel.Caption style={{backgroundColor: "#00000090",  zIndex: "100",width:"100%",right:"0",bottom:"0"}}>
    <h3>جسر ثابت خلفي</h3>
    <p className='text-white-50'>شرح اااااااااااااااااا</p>
  </Carousel.Caption>
  </div>
</Carousel.Item>
<Carousel.Item>
<div className="img">
<img width="1000px" height="500px" src={img2} alt="" />
</div> 
 <Carousel.Caption style={{backgroundColor: "#00000090",  zIndex: "100",width:"100%",right:"0",bottom:"0"}}>
    <h3>معالجة لبية</h3>
    <p className='text-white-50'>شرح اااااااااااااااااا</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<div className="img">
<img src={img3} alt="" width="1000px" height="500px" />
</div>
<Carousel.Caption style={{backgroundColor: "#00000090",  zIndex: "100",width:"100%",right:"0",bottom:"0"}}>
    <h3>تنظيف و تقليح</h3>
    <p className='text-white-50'>
    شرح ااااااااااااااااا
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
</section>
  )
}