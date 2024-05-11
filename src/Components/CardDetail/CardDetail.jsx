import { useLoaderData, useParams } from 'react-router-dom';

const CardDetail = () => {
  const cards = useLoaderData();
  console.log(cards);
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default CardDetail;
//
