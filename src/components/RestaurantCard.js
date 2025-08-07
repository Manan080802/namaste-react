import { CDN_URL } from "../../utils/constant";

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
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} className="res-logo" alt={name} />
      <h3>{name} </h3>
      <h4>{cuisines.join(", ")} </h4>
      <h4>{avgRatingString} stars </h4>
      <h4>{sla.slaString} </h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
