import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const jsonObject = await fetch(
      MENU_API + restId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const res = await jsonObject.json();
    let restInfoData = res?.data;
    setRestInfo(restInfoData);
  };
  return restInfo;
};
export default useRestaurantMenu;
