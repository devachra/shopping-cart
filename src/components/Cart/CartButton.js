import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQunatity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiSliceActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQunatity}</span>
    </button>
  );
};

export default CartButton;
