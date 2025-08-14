import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";
import { cancelCard } from "../utils/cartSlice";
const Cart = () => {
  const cartList = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(cancelCard());
  };

  return cartList.length ? (
    <div className="container  mx-auto px-4">
      <div className="flex justify-between ">
        <p className="py-2 font-bold my-2 text-5xl">Cart</p>
        <button
          className="text-right bg-red-600 font-light text-2xl text-white px-4 py-2 my-1 cursor-pointer"
          onClick={() => clearCart()}
        >
          CLEAR CART
        </button>
      </div>
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
