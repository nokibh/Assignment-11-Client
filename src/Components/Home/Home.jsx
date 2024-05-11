import Banner from '../Banner/Banner';
import Cards from './Cards/Cards';

const Home = () => {
  return (
    <div>
      <div className="mb-4 mt-4">
        <Banner></Banner>
      </div>
      <Cards></Cards>
    </div>
  );
};

export default Home;
