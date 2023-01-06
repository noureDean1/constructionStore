import React from "react";
import './side5.css';
import img1 from '../../images/side5I1.jpg';
import img2 from '../../images/side5I2.jpg';
import img3 from '../../images/side5I3.jpg';
import img4 from '../../images/side5I4.jpg';
import img5 from '../../images/side5I5.jpg';
import img6 from '../../images/side5I6.jpg';
import img7 from '../../images/side5I7.jpg';
import img8 from '../../images/side5I8.jpg';

const Side5=()=>{
    return(
        <section className="Side5">
            <div className="Side5__box1">
                Best Sellers Products
            </div>
            <div className="Side5__box2">
                <a href="">
                    <img src={img1} width="100px"/>
                    <h3>DEWALT Cordless Drills & Electric Drills</h3>
                    <span>$89.00</span>
                </a>
                <a href="">
                    <img src={img2} width="100px"/>
                    <h3>DEWALT Cordless Drills & Electric Drills</h3>
                    <span>$89.00</span>
                </a>
                <a href="">
                    <img src={img3} width="100px"/>
                    <h3>DeWALT DCCS670 & Electric Drills</h3>
                    <span>$231.00</span>
                </a>
                <a href="">
                    <img src={img4} width="100px"/>
                    <h3>DEWALT Cordless Drills & Electric Drills</h3>
                    <span>$89.00</span>
                </a>
                <a href="">
                    <img src={img5} width="100px"/>
                    <h3>DeWALT DCCS670</h3>
                    <span>$231.00</span>
                </a>
                <a href="">
                    <img src={img6} width="100px"/>
                    <h3>DeWALT DCCS670</h3>
                    <span>$231.00</span>
                </a>
                <a href="">
                    <img src={img7} width="100px"/>
                    <h3>Dewalt DWMT81531</h3>
                    <span>$99.00</span>
                </a>
                <a href="">
                    <img src={img8} width="100px"/>
                    <h3>DeWALT DCCS670</h3>
                    <span>$231.00</span>
                </a>
            </div>
        </section>
    )
}
export default Side5;