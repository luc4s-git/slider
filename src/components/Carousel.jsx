import { shortList, list, longList } from '../data';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default function Carousel() {
  const [currentPerson, setCurrentPerson] = useState(0);
  const [people, setPeople] = useState(list);
  const [longPeopleList, setLongPeopleList] = useState(longList);

  const prevSlide = () => {};
  const nextSlide = () => {};

  return (
    <section className="slider-container ">
      {longPeopleList.map((person, index) => {
        return (
          <article key={person.id} className="slide">
            <img src={person.image} alt={person.name} className="person-img" />
            <h5 className="name">{person.name}</h5>
            <p className="title">{person.title}</p>
            <p className="text">{person.quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </section>
  );
}
