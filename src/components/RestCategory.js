import { useState } from "react";
import ItemList from "./ItemList";

const RestCategory = (props) => {
  const { category } = { ...props } || {};
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="items-center">
      <div
        className="w-full bg-gray-100 shadow-lg my-5  p-5 cursor-pointer   flex justify-between"
        onClick={() => {
          handleClick();
        }}
      >
        <span className="font-bold text-lg">
          {" "}
          {category.title} ({category.itemCards.length})
        </span>
        <span className="mx-3 font-bold text-lg ">🔽</span>
      </div>
      <div className=" bg-gray-50 px-4 ">
        {showItems &&
          category?.itemCards.map((item) => (
            <ItemList
              key={item?.card?.info?.id}
              itemCards={item?.card?.info}
            ></ItemList>
          ))}
      </div>
    </div>
  );
};
export default RestCategory;
