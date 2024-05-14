const Photo = ({ card }) => {
  const { food_image } = card;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl dark:md:hover:bg-fuchsia-600 ">
        <figure>
          <img className="w-96 h-56" src={food_image} alt="Movie" />
        </figure>
      </div>
    </div>
  );
};

export default Photo;
