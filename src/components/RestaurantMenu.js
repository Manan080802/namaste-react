import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constant";

const RestaurantMenu = () => {
  const [restInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log("restId :>> ", resId);
  //   console.log("resId :>> ", resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const jsonObject = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const res = await jsonObject.json();
    let restInfoData = res?.data;
    setResInfo(restInfoData);
  };

  if (restInfo === null) return <Shimmer />;
  //   console.log("restInfo :>> ", restInfo?.cards[2]?.card?.card?.info);
  const { itemCards } =
    restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2].card
      ?.card || {};

  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    cloudinaryImageId,
    sla,
    id,
  } = restInfo?.cards?.[2]?.card?.card?.info || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}{" "}
            {(item.card.info.price || item.card.info.defaultPrice) / 100}Rs.
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
