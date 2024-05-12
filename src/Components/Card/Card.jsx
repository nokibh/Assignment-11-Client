import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  // console.log(card);
  const { _id, food_image, food_name, food_category, price, food_quantity } =
    card;
  return (
    <div className="card w-80 bg-base-100 shadow-xl animate__animated animate__shakeX">
      <figure className="px-10 pt-10">
        <img
          src={food_image}
          alt="Shoes"
          className="rounded-xl h-44 w-48 border-5 border-red-500"
        />
      </figure>
      <div className="card-body ml-5">
        <h2 className="card-title font-bold">Food Name:{food_name}</h2>
        <p className="font-bold">${price}</p>
        <p className="font-bold">{food_category}</p>
        <p className="font-bold">Quantity : {food_quantity}</p>
        <div className="card-actions justify-end">
          <Link to={`/Card/${_id}`}>
            <button className="btn btn-outline btn-secondary">Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
