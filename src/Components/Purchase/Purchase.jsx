import { useLoaderData, useParams } from 'react-router-dom';

const Purchase = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const card = cards.find(card => card._id === id);
  console.log(card);
  const {
    food_image,
    food_name,

    email,

    price,
    short_description,
  } = card;
  return (
    <div>
      <div className="lg:flex mb-5 mt-5">
        <div className="w-">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="px-10 p-2 rounded-xl pt-10">
              <img
                src={food_image}
                alt="Shoes"
                className="rounded-xl h-44 w-48 border-5 border-red-500"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">Food Name : {food_name}</h2>
              <p className="font-semibold">
                <span className="font-bold"> Food Description : </span>
                {short_description}
              </p>
              <p className="font-bold">Price : {price}</p>
              <div className="font-bold">Food Order Detail : </div>
              <div className="font-semibold">
                <h5> Email : {email}</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Order place */}
        <div>
          <div className="gadgetContainer pt-10 ">
            <div className="shadow-lg p-5 border rounded-lg bg-[#e0d5dcb0]">
              {/* Heading */}
              <div className="mt-5 mb-8">
                <p className="text-center text-3xl font-semibold">
                  <span className="mr-3 text-[#496affce]">
                    <i className="bx bxs-alarm-add"></i>
                  </span>
                  <span className="dark:text-white flex justify-center gap-2">
                    Add Food Item
                  </span>
                </p>
              </div>
              {/* form */}
              <form>
                <div className="flex gap-8 ">
                  <div className="flex-1">
                    <label
                      className="block mb-2 dark:text-white"
                      htmlFor="image"
                    >
                      Food Name
                    </label>
                    <input
                      className="w-full p-2 border rounded-md focus:outline-[#5b49ffb8]"
                      type="text"
                      placeholder="Enter Food Name"
                      id="name"
                      defaultValue={food_name}
                      name="food_name"
                    />

                    <label
                      className="block mt-4 mb-2 dark:text-white"
                      htmlFor="price"
                    >
                      Time
                    </label>
                    <input
                      className="w-full p-2 border rounded-md focus:outline-[#494fffbd]"
                      type="text"
                      placeholder="Time"
                      id="Price"
                      name="time"
                    />
                  </div>

                  {/* Right side */}
                  <div className="flex-1">
                    <label
                      className="block mb-2 dark:text-white"
                      htmlFor="image"
                    >
                      Email
                    </label>
                    <input
                      className="w-full p-2 border rounded-md focus:outline-[#5b49ffb8]"
                      type="text"
                      placeholder="Email"
                      defaultValue={email}
                      id="image"
                      name="email"
                    />
                    <label
                      className="block mt-4 mb-2 dark:text-white"
                      htmlFor="brand"
                    >
                      Price
                    </label>
                    <input
                      name="price"
                      id="brand"
                      className="w-full p-2 border rounded-md focus:outline-[#5849ffb8]"
                      type="text"
                      defaultValue={price}
                      placeholder="Price"
                    ></input>
                  </div>
                </div>

                <input
                  className="px-4 w-full py-2 mt-4 rounded hover:bg-[#6a49ffca]  bg-[#49dbff9f] duration-200 text-white cursor-pointer font-semibold"
                  type="submit"
                  value="Purchase"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
