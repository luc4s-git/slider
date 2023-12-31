import { shortList, list, longList } from '../data';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default function Carousel() {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);
  const [autoPlayIsActive, setAutoPlayIsActive] = useState(true);

  const prevSlide = () => {
    setCurrentPerson((currentValue) => {
      if (currentValue <= 0) {
        const newValue = people.length - 1;
        return newValue;
      }
      const newValue = currentValue - 1;
      return newValue;
    });
  };

  const nextSlide = () => {
    setCurrentPerson((currentValue) => {
      if (currentValue >= people.length - 1) {
        const newValue = 0;
        return newValue;
      }
      const newValue = currentValue + 1;
      return newValue;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container ">
      {people.map((person, index) => {
        return (
          <article
            key={person.id}
            style={{
              transform: `translateX(${100 * (index - currentPerson)}%)`,
              opacity: index === currentPerson ? 1 : 0,
              visibility: index === currentPerson ? 'visible' : 'hidden',
            }}
            className="slide"
          >
            <img src={person.image} alt={person.name} className="person-img" />
            <h5 className="name">{person.name}</h5>
            <p className="title">{person.title}</p>
            <p className="text">{person.quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button
        className="prev"
        onClick={() => {
          prevSlide();
          setAutoPlayIsActive(!autoPlay);
        }}
      >
        <FaChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </section>
  );
}
