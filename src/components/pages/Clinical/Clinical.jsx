import axios from "axios"
import { BASE_URL } from "../../../api/api"
import { useEffect, useState } from "react";
import { Loader } from "../../shared/loader/loader";
import { NavBar } from "../../shared/nav-bar/Navbar";
import  styles from './Clinicals.module.css'
export const Clinical=()=>{

  const [cards, setCards] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllClinical();
  }, []);

  const getAllClinical=()=>{
    try{
      setIsLoading(true);
    axios.get(BASE_URL+"/clinicale/").then(res=>{
      console.log(res)
      setCards(res.data);
      setIsLoading(false);
    })
    .catch(err=>{
      console.log(err)
      setIsLoading(false);
    })}
    catch(err){
      console.log(err)
    
    }
  }


  return(
    <div className="container-fluid p-0">
    {isLoading?<div className="load position-absolute top-50 start-50 w-100 h-100" style={{transform:"translate(-50%,-50%)",zIndex:"100",backgroundColor:"rgba(255,255,255,0.5)"}}>
<Loader></Loader></div>
:""}
<NavBar></NavBar>
    <div className=" mt-5 mx-auto">
    <div className="cards mx-auto row g-4 ">
    {cards.map((ele,index)=>{
      return <div key={index} className="col-sm-12 col-md-6 col-lg-3"> 
      <div>
      <div className={styles.our_solution_category}>
      <div className={styles.solution_cards_box}>
        <div className={styles.solution_card}>
          <div className={styles.hover_color_bubble}></div>
          <div className={styles.so_top_img} style={{backgroundImage:`url(${ele.image[0]})`,width: "100%",
          height: "150px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
      }}>
      </div>
      <div className="card-body mt-3" style={{borderTop:"1px solid #eee"}}>
      <div className={styles.solu_title}>
      <h3>{ele.name}</h3>
    </div>
    <div className={styles.solu_description}>
            {ele.description.map((desc,index) => {
          return <ul key={index}>
          <li >{desc}</li>
          </ul>
        })}
</div>
      </div></div></div></div>
    </div>
    </div>
    })}
  
    </div>
    </div>
  </div>)
} 