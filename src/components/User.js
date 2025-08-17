import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [userinfo, setUserinfo] = useState({});
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("setInterval ");
    }, 1000);
    increaseCount();
    getUserInfo();
    return () => {
      clearInterval(timer);
    };
  }, []);

  const getUserInfo = async () => {
    const jsonObject = await fetch("https://api.github.com/users/Manan080802");
    const data = await jsonObject.json();
    setUserinfo(data);
  };

  const increaseCount = () => {
    let count1 = count + 1;
    setCount(count1);
  };
  return (
    <div className="user-card">
      <img src={userinfo.avatar_url} alt={userinfo?.name} />
      <h2>Name : {userinfo?.name}</h2>
      <h3>Location : {userinfo?.location}</h3>
      <h3>Contact : {userinfo?.email || "-"}</h3>
      <h3>Count: {count}</h3>
    </div>
  );
};

export default User;
