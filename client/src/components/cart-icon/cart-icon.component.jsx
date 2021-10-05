import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

import "./cart-icon.styles.scss";

function CartIcon() {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  const toggleCartHiddenHandler = useCallback(
    () => dispatch(toggleCartHidden()),
    [dispatch]
  );

  return (
    <div className="cart-icon" onClick={toggleCartHiddenHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default CartIcon;
