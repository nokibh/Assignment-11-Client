import Banner from '../Banner/Banner';
import NewFood from '../NewFood';
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
      <div className="mb-2 mt-6">
        <NewFood></NewFood>
      </div>
    </div>
  );
};

export default Home;
