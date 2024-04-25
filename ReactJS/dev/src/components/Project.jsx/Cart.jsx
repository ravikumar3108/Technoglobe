import React from "react";
import { useCart } from "react-use-cart";

function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();
   

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul className="">
        {items.map((item) => (
          <li key={item.id}>

            <p>{item.title}</p>
            <p>{item.price}</p>
            <div style={{width:"20%"}}>
            <img src={item.image} alt="" width={100}/>
            </div>
            
            {item.quantity}
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cart;
