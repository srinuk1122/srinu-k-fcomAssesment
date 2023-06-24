import React from "react";
import './Cart.css';

const Cart = ({cartItems , handlerAddProduct,handlerRemoveProduct,handlerClerAllItems}) =>{

const totalAmout = cartItems.reduce((price ,item) => price + item.quantity *item.price, 0);

    return(
        <div className="cart-items">
            <center><h1>cart items</h1></center>
            {cartItems.length === 0 && <h1>no items are added .</h1>}
            <div>
                <div>
                    {cartItems.length >= 1 && <center><button onClick={handlerClerAllItems}>clear all items</button> </center>}
                </div>
                {cartItems.map((item) =>(
                    <div className="item-cart" key={item.id}>
                        <img src={item.imeage} alt={item.imeage} className="addcart-img"/>
                        <p>{item.name}</p>
                        <p>{item.quantity} * {item.price} = { item.quantity * item.price}</p>
                        <div>
                            <button className="cart-item-add" onClick={ () => handlerAddProduct(item)}>+ </button>
                             <button className="cart-item-remove" onClick={ () => handlerRemoveProduct(item)}> - </button>
                        </div>
                    </div>
                ))}
            </div>
           
           <div>
                    {cartItems.length >= 1 && <center> <h1>total : {totalAmout}</h1></center>}
                </div>
        </div>
    )
}
export default Cart;