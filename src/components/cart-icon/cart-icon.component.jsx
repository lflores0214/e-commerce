import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";



import { ShoppingCartIcon, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <ShoppingCartIcon onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCount >{itemCount}</ItemCount>
  </ShoppingCartIcon>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
