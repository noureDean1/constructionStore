import React from "react";
import './side7.css';
import img7_1 from '../../images/side5I1.jpg';
import img7_2 from '../../images/side5I3.jpg';
import img7_3 from '../../images/tools11_3.jpg';
import img7_4 from '../../images/side5I7.jpg';


const Side7=()=>{
    return(
        <section className="Side7">
            <div className="Side7_tile">
                Sale Products
            </div>
            <div className="Side7_box">
                <a href="" >
                    <img src={img7_1} width="100px"/>
                    <h4>DEWALT Cordless Drills & Electric Drills</h4>
                    <span>$89.00</span>    
                </a> 
                <a href="" >
                    <img src={img7_2} width="100px"/>
                    <h4>DeWALT DCCS670</h4>
                    <span>$231.00</span>    
                </a> 
                <a href="" >
                    <img src={img7_3} width="100px"/>
                    <h4>DEWALT DWE402 4-12-Inch</h4>
                    <span>$189.00</span>    
                </a> 
                <a href="" >
                    <img src={img7_4} width="100px"/>
                    <h4>Dewalt DWMT81531</h4>
                    <span>$99.00</span>    
                </a> 
            </div>
        </section>
    )
}
export default Side7;