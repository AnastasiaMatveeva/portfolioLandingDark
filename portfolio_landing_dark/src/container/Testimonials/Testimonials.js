import React from 'react';
import "./Testimonials.scss";
import star from '../../images/star_filled.svg';
import ron from "../../images/ron.jpeg";
import germiona from "../../images/germiona.jpeg";
import harry from "../../images/harry.jpeg";



import Rating from 'react-rating';

const Testimonials = () => {
    const ratings = [{
        rating: 5,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, similique perspiciatis, illo reiciendis officia tenetur tempora architecto est in minus molestias sit",
        name: "Hermione Granger",
        position:" Magician, muggle-born",
        avatar: germiona
    },{
        rating: 5,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, similique perspiciatis, illo reiciendis officia tenetur tempora architecto est in minus molestias sit",
        name: "Harry Potter",
        position:"Magician, half blood",
        avatar: harry
    },{
        rating: 4.5,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, similique perspiciatis, illo reiciendis officia tenetur tempora architecto est in minus molestias sit",
        name: "Ronald Weasle",
        position:"Magician, pure blood",
        avatar: ron
    }]
  return (
    <section className='testimonials container' id="Testimonials">
        <div className="inner-content testimonials-content">
        <span className="testimonials-subtitle inner-subtitle">
        Testimonials
          </span>
          <h2 className="testimonials-title inner-title">What Customer Says</h2>
        </div>
        <div className="testimonials-items">
            {
                ratings.map((item, idx)=>(
                    <div className="testimonials-wrapper" key={idx}>
                        <Rating
                          placeholderRating={item.rating}
                          emptySymbol={<img src={star}/>}
                          placeholderSymbol={<img src={star} />}
                          fullSymbol={<img src={star}/>}/>
                        <p className="text">{item.text}</p> 
                        <div className="testimonials-footer">
                            <img src={item.avatar} alt="" className="avatar" />
                            <div>
                                <p className="name">{item.name}</p>
                                <p className="position">{item.position}</p>
                            </div> 
                        </div>
                        
                    </div>
                ))
            }
        </div>
       
    </section>
  )
}

export default Testimonials;