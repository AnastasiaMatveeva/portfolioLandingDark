import React from 'react';
import "./styles/main.scss";
import About from './container/About/About';
import Experience from './container/Experience/Experience';
import Header from './container/Header/Header';
import Hero from './container/Hero/Hero';
import Portfolio from './container/Portfolio/Portfolio';
import Skills from './container/Skills/Skills';
import Testimonials from './container/Testimonials/Testimonials';
import Footer from './container/Footer/Footer';




const App = () => {
  return (
    <div className='App' style={{scrollBehavior: 'smooth'}}>
    <Header/>
    <Hero/>
    <Experience/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}

export default App