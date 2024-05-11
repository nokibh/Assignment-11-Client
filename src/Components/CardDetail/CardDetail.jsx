import { Link, useLoaderData, useParams } from 'react-router-dom';

const CardDetail = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const card = cards.find(card => card._id === id);
  console.log(card);
  // console.log(cards);
  const { food_image, food_name } = card;
  return (
    <div className="hero min-h-screen bg-base-200 mb-5 mt-5 rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <img src={food_image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold animate__animated  animate__jackInTheBox">
            Food Name: <br /> {food_name}
          </h1>
          <Link to="/">
            <button className="mt-10 btn btn-outline btn-secondary">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
//
