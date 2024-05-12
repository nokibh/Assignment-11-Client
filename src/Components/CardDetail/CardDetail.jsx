import { Link, useLoaderData, useParams } from 'react-router-dom';

const CardDetail = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const card = cards.find(card => card._id === id);
  console.log(card);
  // console.log(cards);
  const { food_category, made_by, food_origin, price, food_image, food_name } =
    card;
  return (
    <div className="hero min-h-screen bg-base-200 mb-5 mt-5 rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <img src={food_image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold animate__animated  animate__jackInTheBox">
            Food Name: <br /> {food_name}
          </h1>
          <div className="flex gap-4 mt-4 font-bold">
            <p className="">Category : {food_category}</p>
            <p>Price: ${price}</p>
          </div>
          <div className="flex gap-6 mt-5 font-bold">
            <p>Made : {made_by}</p>
            <p>Food Origin : {food_origin}</p>
          </div>
          <Link to="/">
            <button className="mt-10 btn btn-outline mr-5 btn-secondary">
              Back To Home
            </button>
          </Link>
          <button className="mt-10 btn  btn-outline btn-info">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
//
