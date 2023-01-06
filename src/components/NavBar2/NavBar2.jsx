import React from "react";
import './navBar2.css'

const NavBar2=()=>{
    return(
            <ol className="navBar2">
                <ul className="box__links">
                    <a href="#">Home</a>
                    <a href="#">Hand tools</a>
                    <a href="#">Power tools</a>
                    <a href="#">Shop</a>
                    <a href="#">Contcts</a>
                </ul>
                <ul className="box__links2">
                    <a href="#" className="links1">
                        <i class="uil uil-shopping-cart-alt"></i> 
                        Cart 
                        <i class="uil uil-0-plus"></i>
                    </a>
                    <a href="#" className="links2">
                        <i class="uil uil-balance-scale"></i>
                        <i class="uil uil-0-plus"></i>
                    </a>
                    <a href="#" className="links3">
                        <i class="uil uil-user"></i>
                    </a>

                </ul>
            </ol>
    )
}
export default NavBar2;