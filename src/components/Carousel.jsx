import { shortList, list, longList } from '../data';
import { useState } from 'react';

export default function Carousel() {
  const [personList, setPersonList] = useState(list);
  const [longPersonList, setLongPersonList] = useState(longList);

  return <h1>Carousel</h1>;
}
