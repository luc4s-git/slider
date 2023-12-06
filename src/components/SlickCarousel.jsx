import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { list } from '../data';
import { FaQuoteRight } from 'react-icons/fa';

import { useState } from 'react';

export default function SlickCarousel() {
  const [people, setPeople] = useState(list);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <section className="slick-container">
      <Slider {...settings}>
        {people.map((person, index) => {
          return (
            <article key={person.id}>
              <img
                src={person.image}
                alt={person.name}
                className="person-img"
              />
              <h5 className="name">{person.name}</h5>
              <p className="title">{person.title}</p>
              <p className="text">{person.quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
}
