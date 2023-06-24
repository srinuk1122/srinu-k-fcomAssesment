import React from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";


import { Route , Routes as Routess } from "react-router-dom";

const Routes = ({productItems ,cartItems,handlerAddProduct ,handlerRemoveProduct,handlerClerAllItems})  =>{
    return(
        <div>
        
                    <Routess>
                        <Route exact path="/" element={<Products productItems={productItems} handlerAddProduct={handlerAddProduct} />} /> 
                        <Route exact path="/Cart" element={<Cart cartItems={cartItems} handlerAddProduct={handlerAddProduct} handlerRemoveProduct={handlerRemoveProduct} handlerClerAllItems={handlerClerAllItems} />} /> 
                        <Route exact path="/login" element={<Login/>} />
                        <Route exact path="/home" element={<Products productItems={productItems} handlerAddProduct={handlerAddProduct} />} /> 

                    </Routess>

          
        </div>
    )
}


export default Routes;



