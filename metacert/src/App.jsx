import './App.css'
import React from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos'; 
import { useEffect } from 'react';
import Navbar from './Components/LandingPage/Navbar'
import SectionContainer from './Components/LandingPage/SectionContainer';
import InstitutionalGrade from './Components/LandingPage/InstitutionalGrade';
import TamperProof from './Components/LandingPage/TamperProof';
import Footer from './Components/LandingPage/Footer';

function App() {

  useEffect(() => { 
    AOS.init({ 
      offset: 100,
      delay: 200,
      easing: "ease",
      duration: 800,
     }); 
    AOS.refresh();
    }, []);

  return (
    <div>
      <Navbar/>
      <SectionContainer />
      <InstitutionalGrade/>
      <TamperProof/>
      <Footer/>
    </div>
  )
}

export default App