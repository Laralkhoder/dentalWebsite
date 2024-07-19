
import './App.css'
import './fontscss.css'
import{BrowserRouter,Route, Routes} from 'react-router-dom'
import {Register} from './components/auth/components/register/register'
import { Login } from './components/auth/components/login/login'
import { LandingPage } from './components/pages/landing-page/landingPage'
import { Clinical } from './components/pages/Clinical/Clinical'
import { PatientForm } from './components/pages/PatientForm/patientForm'
function App() {

console.log(window.location.pathname)
   


  return (
  <BrowserRouter>
    <Routes>
    
        <Route path='/' element={<LandingPage />} />
        <Route path="/api/auth/:userid/verify/:verificationToken" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="clinical" element={<Clinical />} />
        <Route path="form" element={<PatientForm />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
