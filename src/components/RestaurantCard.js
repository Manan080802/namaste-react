import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  let { resData } = { ...props };
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[300px] bg-sky-100 rounded-2xl">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="res-logo rounded-4xl"
        alt={name}
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{cuisines.join(", ")}</p>
        <p className="text-gray-700 text-base">{avgRatingString}</p>
        <p className="text-gray-700 text-base">{sla.slaString}</p>
        <p className="text-gray-700 text-base">{costForTwo}</p>
      </div>
    </div>
  );
};

export const wthPromotedCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-green-900 text-white absolute p-2 m-4 rounded-1xl">
          Most people like ❤️
        </label>

        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};

export const discardCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-red-900 text-white absolute p-2 m-4 rounded-1xl">
          Avoid people👎
        </label>

        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};
export default RestaurantCard;
