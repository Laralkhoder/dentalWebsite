import img from "./../../../../../assets/jonathan-borba-v_2FRXEba94-unsplash.jpg"
export const AboutUs=()=>{
  return(
    <section className="about-us d-flex flex-column align-items-center mt-5 py-5" style={{backgroundColor:"#eee"}}>
<div className="title" style={{fontSize: "32px",fontWeight: "500",  paddingBottom: "8px", borderBottom:" 2px solid var(--primary-color)"}}>حول</div>
<div className="content w-75 mt-5 d-flex justify-content-center  align-items-center gap-5">
  <div className="img">
  <img className="" style={{borderRadius:"16px"}} width="535px" height="305px" src={img} alt=""/>
  </div>
<p className="" style={{  fontWeight: "400",  fontSize: "18px",  lineHeight: "40px",  color: "#575757"}}>
نحن هنا لمساعدة طلاب طب الأسنان والمستعدين على العثور على مرضى للمعالجة. نقدم منصة تسهل التواصل بين الطلاب والمرضى بشكل مجاني. هدفنا هو توفير الرعاية الصحية لأكبر عدد ممكن من الأشخاص وتوفير فرص تعليمية و تدريبية للطلاب. </p>
</div>
</section>
  )
}