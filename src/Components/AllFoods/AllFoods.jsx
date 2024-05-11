import AllFoodBanner from '../AllFoodBanner/AllFoodBanner';
import Cards from '../Home/Cards/Cards';

const AllFoods = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="mt-5 mb-5">
        <AllFoodBanner></AllFoodBanner>
      </div>
      <Cards></Cards>
    </div>
  );
};

export default AllFoods;
