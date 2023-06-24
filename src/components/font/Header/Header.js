import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = ({cartItems}) =>{
return(

    <header >
        <div className="header">
          <h1>
           <Link to="/" className="logo">
               Books shop
            </Link> 
          </h1>
          <ul>
            <li>
                <Link to="/Home">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
                <Link to="/Login">Login page</Link>
            </li>
          </ul>
          <ul>
            <li>
                <Link to="/Cart">Cart {cartItems.length}</Link>
            </li>
          </ul>
        </div>
    </header>
 )
}
export default Header;