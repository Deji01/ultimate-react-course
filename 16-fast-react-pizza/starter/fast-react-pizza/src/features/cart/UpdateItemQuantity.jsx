import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
      <span>{currentQuantity}</span>
      <Button onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  );
}

export default UpdateItemQuantity;
