import React from "react";

import { Item, Img,ItemDetails, Name } from "./cart-item.styles"

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <Item>
      <Img src={imageUrl} alt=""/>
      <ItemDetails className="item-details">
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </Item>
  );
};
export default CartItem