import React from "react";
import './side1.css'
import tools1 from '../../images/tools1.png'
import tools2 from '../../images/tools2.png'
import tools3 from '../../images/tools3.png'

const Side1=()=>{
    return(
        <section className="content__box">
            <div className="content__box1">
                <h4>Mad Sell Goods at a <span>Discount 20% Off</span> Until of January!</h4>
                <p>The products of our store are the perfect combination of a real reliability and durability.</p>
                <a href="#">Shop Now </a>
                <img src={tools1} width="100px"/>

            </div>
            <div className="content__box2">
                <div className="content__box2_1">
                    <h4>Building Materials For Every Taste</h4>
                    <p>For Subscribers a <span>12% Discount</span> on Products From The Category.</p>
                    <div className="box__link">
                        <a href="#">Shop Now </a>
                        <img src={tools2} width="100px"/>
                    </div>
                </div>
                <div className="content__box2_2">
                    <h4>Newest Drills From <span>Willard</span>  Company</h4>
                    <p>Enhanced with a complementary combo kit</p>
                    <div className="box__link">
                        <a href="#">Shop Now </a>
                        <img src={tools3} width="100px"/>
                    </div>                   
                </div>        
            </div>
        </section>
    )
}
export default Side1;