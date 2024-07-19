import img1 from "./../../../assets/Social media logo.svg"
import img2 from "./../../../assets/Social media logo-1.svg"
import img3 from "./../../../assets/Social media logo-2.svg"
import img4 from "./../../../assets/Social media logo-3.svg"
import img5 from "./../../../assets/Social media logo-4.svg"

export const Footer=()=>{
  return (
    <footer className="w-100 d-flex justify-content-center align-items-center gap-4" style={{height:"100px",backgroundColor:" var(--primary-color)",borderTop:"1px solid #eee"}}>
    <a >
      <img width="32px" height="32px" style={{fill:" var(--primary-color)"}} src={img1} alt="" />
    </a>
    <a >
      <img width="32px" height="32px" style={{fill:" var(--primary-color)"}} src={img2} alt="" />
    </a>
    <a >
      <img width="32px" height="32px" style={{fill:" var(--primary-color)"}} src={img3} alt="" />
    </a>
    <img width="32px" height="32px" style={{fill:" var(--primary-color)"}} src={img4} alt="" />
    <img width="32px" height="32px" style={{fill:" var(--primary-color)"}} src={img5} alt="" />
  </footer>
  )
}