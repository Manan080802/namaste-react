// import resList from "../../swiggy_res_list.json";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [RestaurantList, setRestaurantList] = useState([]);
  let [FilterRestaurantList, setFilterRestaurantList] = useState([]);
  let [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0499889&lng=72.6699673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonObject = await data.json();
    let res =
      jsonObject?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(res);
    setFilterRestaurantList(res);
  };

  // filter
  const filterTopRated = () => {
    FilterRestaurantList = RestaurantList.filter(
      (res) => res.info.avgRating > 4.4
    );
    setFilterRestaurantList(FilterRestaurantList);
  };

  // search
  const searchRestaurant = (searchName) => {
    const regex = new RegExp(searchName, "i");
    FilterRestaurantList = RestaurantList.filter((res) =>
      regex.test(res.info.name)
    );
    setFilterRestaurantList(FilterRestaurantList);
  };

  return RestaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter the Restaurant "
            className="search-box"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <button
            onClick={() => {
              searchRestaurant(searchName);
            }}
          >
            search
          </button>
        </div>
        <button className="filter-btn" onClick={filterTopRated}>
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {FilterRestaurantList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
