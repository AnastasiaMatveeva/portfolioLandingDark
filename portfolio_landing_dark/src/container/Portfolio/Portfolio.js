import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "./Portfolio.scss";
import porfolio_1 from "../../images/portfolio_1.jpg";
import porfolio_2 from "../../images/portfolio_2.jpg";
import porfolio_3 from "../../images/portfolio_3.jpg";



const Portfolio = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 851,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
      };

      const portfolioSlider = [
        {
            imgSrc: porfolio_1,
            title: "portfolio"
        },
        {
            imgSrc: porfolio_2,
            title: "portfolio"
        },
        {
            imgSrc: porfolio_3,
            title: "portfolio"
        },
        {
            imgSrc: porfolio_1,
            title: "portfolio"
        }
      ]
  return (
    <section className='portfolio container' id="Portfolio">
        <div className="inner-content portfolio-content">
        <span className="portfolio-subtitle inner-subtitle">
            My Works
          </span>
          <h2 className="portfolio-title inner-title">Featured Works</h2>
        </div>
        <div className="slider">
            <Slider {...settings}>
                {
                    portfolioSlider.map((portfolio, index) => (
                        <div className="portfolio-block" key={index}>
                            <figure>
                             <img src={portfolio.imgSrc} alt={portfolio.title} />
                            </figure>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </section>
  )
}

export default Portfolio;