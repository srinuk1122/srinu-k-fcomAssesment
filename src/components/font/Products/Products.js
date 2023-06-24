import React from "react";
import './product.css';

const Products = ({productItems ,handlerAddProduct}) =>{




    return(
        <div className="product-cart"> 
                {productItems.map((productItem) =>(
                    <div className="product" key={productItem.id}>
                        <img src={productItem.imeage} alt={productItem.name} className="cart-img"/>
                        <p className="cart-heading">{productItem.name}</p>
                        <p className="cart-price">{productItem.price}</p>
                        <button className="cart-button" onClick={ ()=>handlerAddProduct(productItem)}>Add card</button>
                    </div>
                ))}
        </div>
    )
} 

export default Products;