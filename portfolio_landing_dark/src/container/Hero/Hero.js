import React from 'react'
import "./Hero.scss"
import avatar from "../../images/avatar.png"
import girl_avatar from "../../images/girl_avatar.png"


const Hero = () => {
  return (
    <section className='hero'>
        <p className="hero-subtitle">
             Hi, I am <span>Anastasiia Matviiva</span> 👋
        </p>
        <h1 className="hero-title">Front-end & React developer</h1>
        <p className="hero-text">I like clear code and simple things, and I love what I do.</p>
        <figure className="hero-img">
            <img src={girl_avatar} alt="avatar" />
        </figure>
    </section>
  )
}

export default Hero