import { useEffect, useState } from 'react';
import Card from '../../Card/Card';

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/foods')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-4">
      {cards.map(card => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

export default Cards;
