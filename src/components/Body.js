// import resList from "../../swiggy_res_list.json";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [RestaurantList, setRestaurantList] = useState(resList);
  const filterTopRated = () => {
    RestaurantList = resList.filter((res) => res.info.avgRating > 4.5);
    setRestaurantList(RestaurantList);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {RestaurantList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
