import { Footer } from "../../shared/footer/footer"
import { NavBar } from "../../shared/nav-bar/Navbar"
import { AboutUs } from "./components/AboutUs/aboutUs"
import { Cases } from "./components/Cases/Cases"
import { Hero } from "./components/Hero-section/Hero"
import { ContactUs } from "./components/contactUs/contactUs"
export const LandingPage=()=>{
  return(
  <div className="w-100">
  <NavBar></NavBar>
  <Hero></Hero>
  <Cases></Cases>
  <AboutUs></AboutUs>
  <ContactUs></ContactUs>
  <Footer></Footer>
  </div>

  )
}