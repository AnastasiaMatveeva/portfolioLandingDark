import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container footer-wrapper">
            <div className="footer-block">
                <span className="footer-name">Anastasiia Matviiva</span>
                <span className="footer-description">Front-end & React developer</span>
            </div>
            <div className="footer-block">
                <h3 className="footer-title">Useful Links</h3>
                <ul className="footer-menu">
                    <li className="footer-item"><a href="" className="footer-link">Home</a></li>
                    <li className="footer-item"><a href="" className="footer-link">About</a></li>
                    <li className="footer-item"><a href="" className="footer-link">Skills</a></li>
                    <li className="footer-item"><a href="" className="footer-link">Portfolio</a></li>
                    <li className="footer-item"><a href="" className="footer-link">Contact</a></li>
                </ul>
            </div>
            <div className="footer-block">
                <h3 className="footer-title">Social Media</h3>
                <ul className="footer-menu">
                    <li className="footer-item"><a href="" className="footer-link">Linkedin</a></li>
                    <li className="footer-item"><a href="" className="footer-link">Facebook</a></li>
                    <li className="footer-item"><a href="" className="footer-link">Instagram</a></li>
                    <li className="footer-item"><a href="" className="footer-link">Github</a></li>
                </ul>
            </div>
            <div className="footer-block">
                <h3 className="footer-title">Newsletter</h3>
                <p className="footer-text">Enter your email and get notified about news, of.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;