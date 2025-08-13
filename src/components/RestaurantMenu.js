import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestCategory from "./RestCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  let [showIndex, setShowIndex] = useState(0);
  let [showCategory, setShowCategory] = useState(true);

  if (restInfo === null) return <Shimmer />;
  //   console.log("restInfo :>> ", restInfo?.cards[2]?.card?.card?.info);
  const { itemCards } =
    restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2].card
      ?.card || {};

  const categories =
    restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    cloudinaryImageId,
    sla,
    id,
    labels,
    totalRatingsString,
  } = restInfo?.cards?.[2]?.card?.card?.info || {};

  return (
    <div className="container  mx-auto px-4">
      <div className="my-4 flex justify-between hover:bg-gray-200">
        <div>
          <p className="text-3xl font-bold">{name}</p>
          <p> {labels?.[1]?.message}</p>
        </div>
        <div>
          <p className="text-2xl font-bold">
            <span className="bg-green-500 text-white px-2 ">
              {avgRatingString}
            </span>
            <span className="text-1xl font-normal px-2">
              {totalRatingsString} . Rs.{costForTwo / 100} For Two
            </span>
          </p>
          <p className="pt-2 text-orange-400 font-bold font-fax">
            {cuisines.join(", ")}
          </p>
        </div>
      </div>
      <p className="text-2xl font-bold">Menu</p>
      <div className="py-5">
        {categories.map((category, index) => (
          <RestCategory
            key={category.card.card.categoryId}
            category={category.card.card}
            showItems={index == showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          ></RestCategory>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
