import React from 'react';
import "./Skills.scss";
import html from "../../images/logos-html.png";
import figma from "../../images/logos-figma.png";
import javascript from "../../images/logos-javascript.png";
import css from "../../images/logos-css.png";
import github from "../../images/logos-github.png";
import gitlab from "../../images/logos-gitlab.png";
import bootstap from "../../images/logos-bootstrap.png";
import sass from "../../images/logos-sass.png";
import xd from "../../images/logos-xd.png";
import typescript from "../../images/logos-typescript.png";


const Skills = () => {
  return (
    <section className='skills' id="Skills">
      <div className="skills-wrapper container">
        <div className="skills-content">
          <span className="skills-subtitle inner-subtitle">
            My Skills
          </span>
          <h2 className="skills-title inner-title">What My Programming
            Skills Included?</h2>
          <p className="skills-text inner-text">I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.</p>
          <a href="" className="hire-link">Hire me</a>
        </div>
        <div className="skills-icons">
          <figure><img src={html} alt="" /></figure>
          <figure><img src={css} alt="" /></figure>
          <figure><img src={javascript} alt="" /></figure>
          <figure><img src={gitlab} alt="" /></figure>
          <figure><img src={bootstap} alt="" /></figure>
          <figure><img src={xd} alt="" /></figure>
          <figure><img src={figma} alt="" /></figure>
          <figure><img src={sass} alt="" /></figure>
          <figure><img src={typescript} alt="" /></figure>
          <figure><img src={github} alt="" /></figure>
        </div> 
      </div>
       
  
    </section>
  )
}

export default Skills