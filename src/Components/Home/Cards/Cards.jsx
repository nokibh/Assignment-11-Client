import { useEffect, useState } from 'react';
import Card from '../../Card/Card';

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('fake.json')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);
  return (
    <div>
      {cards.map(card => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

export default Cards;
