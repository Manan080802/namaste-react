// import resList from "../../swiggy_res_list.json";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [RestaurantList, setRestaurantList] = useState([]);
  let [FilterRestaurantList, setFilterRestaurantList] = useState([]);
  let [searchName, setSearchName] = useState("");
  const IsOnline = useOnlineStatus();

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

  return IsOnline ? (
    RestaurantList.length == 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter flex justify-center">
          <div className="search-container m-4 p-4">
            <input
              type="text"
              placeholder="Enter the Restaurant "
              className="search-box border border-gray-300 rounded-md p-2 h-15 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 "
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <button
              className=" bg-green-500 text-white w-45 text-1xl rounded-md p-2 mx-2 h-15 hover:bg-blue-500 "
              onClick={() => {
                searchRestaurant(searchName);
              }}
            >
              search
            </button>
          </div>
          <div></div>
          <button
            className="filter-btn  bg-green-500 text-white w-45 text-1xl rounded-md m-8 p-4 mx-2 h-15 hover:bg-blue-500 "
            onClick={filterTopRated}
          >
            Top rated Restaurant
          </button>
        </div>
        <div className=" flex flex-wrap">
          {FilterRestaurantList.map((res) => (
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
              <RestaurantCard key={res.info.id} resData={res} />
            </Link>
          ))}
        </div>
      </div>
    )
  ) : (
    <h1>you are offline</h1>
  );
};

export default Body;
