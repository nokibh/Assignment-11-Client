import { Link, useLoaderData, useParams } from 'react-router-dom';

const TopFoodDetail = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const card = cards.find(card => card._id === id);
  const { short_description, food_image, food_name } = card;
  console.log(card);
  return (
    <div>
      <div className="mb-5 mt-5">{/* <TopBanner></TopBanner> */}</div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={food_image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Food Name : {food_name}</h1>
            <p className="py-6">{short_description}</p>
            <Link to="/">
              <button className="mt-10 btn btn-outline mr-5 btn-secondary">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFoodDetail;
