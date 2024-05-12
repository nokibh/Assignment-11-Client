import Banner from '../Banner/Banner';
import TopFoods from '../TopFoods/TopFoods';

const Home = () => {
  return (
    <div>
      <div className="mb-4 mt-4">
        <Banner></Banner>
      </div>
      <div className="mb-5 mt-5">
        <TopFoods></TopFoods>
      </div>
    </div>
  );
};

export default Home;
