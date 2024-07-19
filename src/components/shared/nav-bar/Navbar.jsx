import "./Navbar.module.css"
import { Link } from "react-router-dom";
import logo from "./../../../assets/tooth.png";
// export const Navbar=()=>{
//   return (
// <nav className="w-100 d-flex align-items-center justify-content-between px-4" style={{height:"100px",background: "linear-gradient(to left,  #EEEEEE 0%,#EEEEEE 60%,white 60%,white 100%)"}}>
// <div className=" d-flex align-items-center gap-5 ">
// <div className="logo">
// <img style={{width:'60px', height:'60px'}} src={logo}></img>
// </div>
// <div className="navigation d-flex align-items-center justify-content-center px-3 gap-5">
// <Link to={'/'} className="text-decoration-none">
// الرئيسية
// </Link>
//      <Link to={'/clinical'} className="text-decoration-none">
//      الحالات
//      </Link>
//      <a className="text-decoration-none" href="#">حول</a>
//      <a className="text-decoration-none" href="#">اتصل بنا</a>
// </div>
// </div>
// <div className="buttons d-flex align-items-center gap-2">
// <button className="btn" style={{backgroundColor:"var(--primary-color)",color:"white"}}>تسجيل دخول</button>
// <button className="btn"  style={{backgroundColor:"var(--primary-color)",color:"white"}}>إنشاء حساب</button>
// </div>
// </nav>

//   )
// }

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cookies from "js-cookie";

export const NavBar = () => {
  console.log(Cookies.get("jwt"))
  const logout=()=>{
    Cookies.remove("jwt")
    Cookies.remove("id")
    window.location.reload();
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3" style={{background: "linear-gradient(to left,  #EEEEEE 0%,#EEEEEE 60%,white 60%,white 100%)"}}>
      <Container>
        <Navbar.Brand href="#home">
          <img style={{ width: "60px", height: "60px" }} src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex pb-3 pb-lg-0 flex-column flex-lg-row align-items-start align-items-lg-center gap-3 gap-lg-0 me-3 me-lg-0 mt-3 mt-lg-0 justify-content-between w-100 ">
            <div className="links flex-column flex-lg-row d-flex align-items-start align-items-lg-center justify-content-evenly w-50 ">
              <Nav.Link activeClassName="active">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/"}
                >
                  الرئيسية
                </Link>
              </Nav.Link>
              <Nav.Link activeClassName="active">
                <Link 
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/clinical"}
                >
                  الحالات
                </Link>
              </Nav.Link>


              {Cookies.get("jwt")!=null ?
              <Nav.Link activeClassName="active">
              <Link 
                style={{ textDecoration: "none", color: "black" }}
                to={"/form"}
              >
                استمارة المريض
              </Link>
            </Nav.Link>:""}

              <Nav.Link>اتصل بنا</Nav.Link>
            </div>
            {Cookies.get("jwt")==null ?
            <div className="buttons align-self-center d-flex align-items-center gap-5 gap-lg-3">
          
              <button
                className="btn"
                style={{ backgroundColor: "var(--primary-color)", color: "white" }}
              >
              <Link style={{color:"white"}} to={"/login"}>تسجيل دخول</Link>
                
              </button>
              <button
                className="btn"
                style={{ backgroundColor: "var(--primary-color)", color: "white" }}
              >
              <Link  style={{color:"white"}} to={"/register"}>  إنشاء حساب</Link>
              
              </button>
            </div>:
          
            <div className="buttons align-self-center d-flex align-items-center gap-5 gap-lg-3">
            <button className="btn btn-danger" onClick={logout}>
            LogOut
            </button>
            </div>

          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
