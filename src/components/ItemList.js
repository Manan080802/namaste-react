import { CDN_URL } from "../utils/constant";

const ItemList = (props) => {
  const { itemCards } = { ...props };
  return (
    <div className="my-5 border-b-2">
      <div className="flex justify-between">
        <div className="description my-3 px-3 w-9/12">
          <p>
            <span
              className={
                itemCards?.isVeg
                  ? "bg-green-400 text-white px-3 my-4"
                  : "bg-red-400 text-white px-3 my-4"
              }
            >
              {itemCards?.isVeg ? "veg" : "non-veg"}
            </span>
            {itemCards?.ratings?.aggregatedRating?.rating ? (
              <span
                className={
                  itemCards?.ratings?.aggregatedRating?.rating < 3
                    ? " text-red-600 px-2"
                    : itemCards?.ratings?.aggregatedRating?.rating < 4
                    ? "text-yellow-600 px-2"
                    : itemCards?.ratings?.aggregatedRating?.rating < 4.5
                    ? "text-green-600 px-2"
                    : "text-blue-600 px-2"
                }
              >
                {itemCards?.ratings?.aggregatedRating?.rating} (
                {itemCards?.ratings?.aggregatedRating?.ratingCount})
              </span>
            ) : (
              <span></span>
            )}
          </p>
          <p className="font-bold text-2xl my-2"> {itemCards?.name} </p>
          <p className="font-bold text-1xl">
            Rs. {(itemCards?.price || itemCards?.defaultPrice) / 100}
          </p>
          <p className="font-light">{itemCards?.description}</p>
        </div>
        <div className="image  w-2/12 p-4">
          <img src={CDN_URL + itemCards?.imageId} className="rounded-3xl" />
          <div className="absolute">
            <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-green-500 font-bold px-4 py-1 rounded-md shadow-2xl cursor-pointer">
              Add +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemList;
