import { shortList, list, longList } from '../data';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default function Carousel() {
  const [people, setPeople] = useState(list);
  const [longPeopleList, setLongPeopleList] = useState(longList);

  return (
    <div className="slider-container ">
      {shortList.map((person) => {
        return (
          <div key={person.id} className="slide">
            <img src={person.image} alt={person.name} className="person-img" />
            <h5 className="name">{person.name}</h5>
            <p className="title">{person.title}</p>
            <p className="text">{person.quote}</p>
          </div>
        );
      })}
      <button className="prev">
        <FaChevronLeft />
      </button>
      <button className="next">
        <FaChevronRight />
      </button>
    </div>
  );
}
