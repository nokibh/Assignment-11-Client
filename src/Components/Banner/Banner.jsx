import 'animate.css';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[400px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Yb5NsMd/360-F-205876015-h-YYs7ugqo-U8-QAob-SS3-Tbn-GQ92qy-S5g-Ec.jpg"
            className="w-full rounded-lg"
          />
          <div className="absolute h-full left-0 top-0 flex items-center   pl-12 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="space-y-7">
              <h2 className="text-6xl font-bold text-white animate__animated animate__flipInX">
                Delicious Bites Cafe
              </h2>

              <p className="text-white">
                From savory pastas to mouthwatering pizzas and refreshing
                salads, every bite at Delicious <br /> Bites Cafe is a burst of
                flavor and satisfaction.
              </p>
              <div>
                <div>
                  <Link to="/allFoods">
                    <button className="btn btn-outline btn-secondary">
                      Explore All Foods
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/z6TwLt4/photo-1517248135467-4c7edcad34c4.jpg"
            className="w-full  rounded-lg"
          />
          <div className="absolute h-full left-0 top-0 flex items-center   pl-12 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="space-y-7">
              <h2 className="text-6xl font-bold text-white animate__animated animate__flipInX">
                Delicious Bites Cafe
              </h2>

              <p className="text-white">
                Whether you are craving a hearty meal or a light snack, our cozy
                cafe ambiance and friendly service make <br /> it the perfect{' '}
                spot to unwind and indulge in culinary delights
              </p>
              <div>
                <div>
                  <Link to="/allFoods">
                    <button className="btn btn-outline btn-secondary">
                      Explore All Foods
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/GFMjsMK/restaurant-interior-1127-3394.jpg"
            className="w-full  rounded-lg"
          />
          <div className="absolute h-full left-0 top-0 flex items-center   pl-12 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="space-y-7">
              <h2 className="text-6xl font-bold text-white animate__animated animate__flipInX">
                Delicious Bites Cafe
              </h2>

              <p className="text-white">
                Welcome to Delicious Bites Cafe, where every meal is an
                adventure in taste and satisfaction. <br />
                Nestled in the heart
              </p>
              <div>
                <Link to="/allFoods">
                  <button className="btn btn-outline btn-secondary">
                    Explore All Foods
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/3rks2Jr/restaurant-background-2ez77umko2vj5w02.jpg"
            className="w-full rounded-lg"
          />{' '}
          <div className="absolute h-full left-0 top-0 flex items-center   pl-12 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="space-y-7">
              <h2 className="text-6xl font-bold text-white animate__animated animate__flipInXn">
                Delicious Bites Cafe
              </h2>

              <p className="text-white">
                From the rich and comforting flavors of classic pasta dishes to
                the aromatic indulgence <br /> of wood-fired pizzas
              </p>
              <div>
                <div>
                  <Link to="/allFoods">
                    <button className="btn btn-outline btn-secondary">
                      Explore All Foods
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
