import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const list = useLoaderData();
  const { food_name } = list;
  console.log(list);
  return <div>Update a food {food_name}</div>;
};

export default Update;
