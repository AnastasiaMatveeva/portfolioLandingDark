import React from 'react'
import './About.scss'
import aboutImg from '../../images/about-img.png'


const About = () => {
  return (
    <section className='about' id="About">
        <div className="container about-wrapper">
            <figure className='about-img'>
                <img src={aboutImg} alt="aboutImg" />
            </figure>
            <div className="about-content">
                <span className="inner-subtitle">Who I am</span>
                <h2 className="inner-title">About Me</h2>
                <p className="inner-text about-text">
                Hi! I’m Anastasiia Matviiva, and I’m a  developer who has passion for building clean web applications with intuitive functionality. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.
                </p>
                <a href="" className="hire-link">Hire me</a>
            </div>
        </div>
    </section>
  )
}

export default About