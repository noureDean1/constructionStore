import React from "react";
import './navBar1.css'

const NavBar1=()=>{
    return(
            <ol className="navBar1">
                <ul className="Logo">
                    <h4>Dean<span>lard</span></h4>
                    <p>Construction tools store</p>
                </ul>
                <ul className="box__Search">
                    <input type="search" placeholder="Serach now "/>
                    <i class="uil uil-search"></i>
                </ul>
                <ul className="box__info">
                    <h4>123-456-78901</h4>
                    <p>form 8:00 to 20:00</p>
                </ul>
            </ol>
    )
}
export default NavBar1;