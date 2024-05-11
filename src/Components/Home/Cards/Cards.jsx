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
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center">All Foods</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-4">
        {cards.map(card => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
