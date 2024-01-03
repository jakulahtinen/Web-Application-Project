import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="linkit">
                <Link to="/"> Verkkokauppa </Link>
                <Link to="/ostoskori"> 
                    <ShoppingCart size={32}/>
                </Link>
            </div>
        </div>
    );
};