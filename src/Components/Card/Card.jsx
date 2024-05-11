const Card = ({ card }) => {
  console.log(card);
  const { food_image, food_name, food_category, price, quantity } = card;
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={food_image}
          alt="Shoes"
          className="rounded-xl border-5 border-red-500"
        />
      </figure>
      <div className="card-body ml-5">
        <h2 className="card-title font-bold">Food Name:{food_name}</h2>
        <p>${price}</p>
        <p>{food_category}</p>
        <p>{quantity}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
