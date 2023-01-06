import React from "react";
import './side3.css'
import img1 from '../../images/tools11.png'
import img1_1 from '../../images/tools11_1.jpg'
import img1_2 from '../../images/tools11_2.jpg'
import img1_3 from '../../images/tools11_3.jpg'
import img1_4 from '../../images/tools11_4.jpg'
const Side3=()=>{
    return(
        <section className="Side3">
            <div className="Box1__Title">
                Trending Products
            </div>
            <div className="Box2__Products">
                <div className="Box2__Products_1">
                    <h4>Product Of The Day Discount</h4>
                    <div className="box__times">
                        <div className="time1">
                            <p>00</p>
                            <span>Days</span>
                        </div>
                        <div>:</div>
                        <div className="time1">
                            <p>00</p>
                            <span>Hours</span>
                        </div>
                        <div>:</div>
                        <div className="time1">
                            <p>00</p>
                            <span>Minutes</span>
                        </div>
                    </div>
                    <img src={img1} width="100px"/>
                    <h3>DeWALT DCCS670</h3>
                    <span className="price">$231.00</span>
                </div>
                <div className="Box2__Products_2">
                    <a href="">
                        <img src={img1_1} width="100px"/>
                        <p>DEWALT Cordless Drills & Electric Drills</p>
                        <span>$89.00</span>
                    </a>
                    <a href="">
                    <img src={img1_2} width="100px"/>
                        <p>DeWALT DCCS670</p>
                        <span>$231.00</span>
                    </a>
                    <a href="">
                    <img src={img1_3} width="100px"/>
                        <p>DEWALT DWE402 4-12-Inch</p>
                        <span>$189.00</span>
                    </a>
                    <a href="">
                    <img src={img1_4} width="100px"/>
                        <p>Dewalt DWMT81531</p>
                        <span>$99.00</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Side3;