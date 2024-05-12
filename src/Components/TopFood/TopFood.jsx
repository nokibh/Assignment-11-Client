import { Link } from 'react-router-dom';

const TopFood = ({ card }) => {
  const { _id, food_image, food_name, food_qun, price } = card;
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
        <h2 className="card-title font-bold">Food Name : {food_name}</h2>
        <p className="font-bold">Quantity : {food_qun}</p>
        <p className="font-bold">Price : {price}</p>
        <div className="card-actions justify-center mt-4">
          <Link to={`/Top/${_id}`}>
            <button className="btn btn-outline btn-secondary">View Item</button>
          </Link>
          <button className="btn btn-outline btn-secondary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default TopFood;