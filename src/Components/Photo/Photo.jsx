const Photo = ({ card }) => {
  const { food_image } = card;
  return (
    <div>
      <div class="mb-4">
        <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            className="w-96 h-56 rounded-lg"
            src={food_image}
            class="max-w-xs"
            alt="Louvre"
          />
          <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
