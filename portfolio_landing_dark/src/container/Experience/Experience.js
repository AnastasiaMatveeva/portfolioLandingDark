import React from 'react'
import "./Experience.scss"
import star from "../../images/star.svg"
import check from "../../images/check.svg"
import users from "../../images/users.svg"

const Experience = () => {
  return (
    <div className='experience container' id="Experience">
        <div className="experience-block" style={{backgroundImage:`url(${star})`}}>
            <p className="experience-number">3+</p>
            <p className="experience-text">Years of Experience</p>
        </div>
        <div className="experience-block" style={{backgroundImage:`url(${check})`}}>
            <p className="experience-number">10+</p>
            <p className="experience-text">Completed Projects</p>
        </div>
        <div className="experience-block" style={{backgroundImage:`url(${users})`}}>
            <p className="experience-number">10+</p>
            <p className="experience-text">Happy Clients</p>
        </div>
    </div>
  )
}

export default Experience