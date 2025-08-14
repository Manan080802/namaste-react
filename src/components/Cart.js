import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.items);
  

  return cartList.length ? (
    <div className="container  mx-auto px-4">
      {cartList.map((card) => (
        <ItemList key={card.id} itemCards={card}></ItemList>
      ))}
    </div>
  ) : (
    <div className="container  mx-auto px-4">
      <div className="text-center m-75 font-light text-3xl">
        <p className="font-bold ">Your cart is empty</p>
        <p>You can go to home page to view more restaurants</p>
        <div className="my-2 px-15">
          <Link to="/">
            <span className="bg-orange-600 text-white font-bold m-15 px-3 ">
              See restaurants near you
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cart;
