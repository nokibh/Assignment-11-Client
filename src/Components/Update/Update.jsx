import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseHooks from '../Hook/UseHooks';

const Update = () => {
  const { user } = UseHooks();
  const list = useLoaderData();
  const {
    _id,
    food_name,

    food_qun,
    category,
    price,
    description,

    food_image,
  } = list;
  // const { id } = useParams(); const { user } = UseHooks();
  const handleUpdate = e => {
    e.preventDefault();

    const form = e.target;
    const food_name = form.food_name.value;
    const category = form.category.value;

    const description = form.description.value;
    const food_image = form.food_image.value;
    const food_qun = form.food_qun.value;

    const email = user.email;
    const addAll = {
      food_name,

      food_qun,
      category,
      price,
      description,
      email,
      food_image,
    };
    console.log(addAll);
    fetch(`http://localhost:5000/tops/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addAll),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Food  Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          form.reset();
        }
      });
  };
  console.log(list);
  return (
    <div className="gadgetContainer pt-10 mb-5 mt-5">
      <div className="shadow-lg p-5 border rounded-lg pl-12 bg-gradient-to-r from-[#151515c9] to-[rgba(21, 21, 21)]">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#496affce]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white flex justify-center gap-2">
              Update Food Item
            </span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleUpdate}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Food Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#5b49ffb8]"
                type="text"
                defaultValue={food_name}
                placeholder="Enter Food Name"
                id="name"
                name="food_name"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Food Category
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#494fffbd]"
                type="text"
                placeholder="Category"
                id="Price"
                name="category"
                defaultValue={category}
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Short Description
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#5549ffc3]"
                type="text"
                defaultValue={description}
                placeholder="Description"
                id="Price"
                name="description"
              />
            </div>

            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Image_url
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#5b49ffb8]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                defaultValue={food_image}
                name="food_image"
              />

              <label className="block mb-2 dark:text-white" htmlFor="image">
                Quantity
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#5b49ffb8]"
                type="text"
                defaultValue={food_qun}
                placeholder="Quantity"
                id="image"
                name="food_qun"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Price
              </label>
              <input
                name="session"
                defaultValue={price}
                id="brand"
                className="w-full p-2 border rounded-md focus:outline-[#5849ffb8]"
                type="text"
                placeholder="Price"
              ></input>
            </div>
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#6a49ffca]  bg-[#49dbff9f] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Update Food Item"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
