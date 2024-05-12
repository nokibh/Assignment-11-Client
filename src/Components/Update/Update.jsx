import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const list = useLoaderData();
  // const { id } = useParams();
  console.log(list);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Update;
