import { useEffect, useState } from 'react';
import TopFood from '../TopFood/TopFood';
import { Link } from 'react-router-dom';

const TopFoods = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/tops')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center">Our Top Foods</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-4">
        {cards.map(card => (
          <TopFood key={card._id} card={card}></TopFood>
        ))}
      </div>
      <div className="text-center">
        <Link to="/allFoods">
          <button className="btn btn-wide btn-outline btn-secondary">
            See All Foods
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
