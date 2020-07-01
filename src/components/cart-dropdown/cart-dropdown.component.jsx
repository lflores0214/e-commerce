import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { CartDropdown, EmptyMessage, CartItems } from "./cart-dropdown.styles";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <CartDropdown>
    <CartItems>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessage className="empty-message">
          Your cart is empty
        </EmptyMessage>
      )}
    </CartItems>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdown>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
