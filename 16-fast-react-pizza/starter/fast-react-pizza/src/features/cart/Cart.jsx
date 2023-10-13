import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { clearCart, getCart } from "./cartSlice";
import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import CartItem from "./CartItem";

function Cart() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2>Your cart, {username}</h2>
      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div>
        <Button to="/order/new">Order pizzas</Button>

        <Button onClick={() => dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
