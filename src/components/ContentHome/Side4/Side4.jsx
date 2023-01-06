import React from "react";
import './side4.css'
import img1 from '../../images/side4I1.png'
import img2 from '../../images/side4I2.png'

const Side4=()=>{
    return(
        <section className="Side4">
            <div className="box1">
                <div className="box1_conent">
                    <h3>Sale <span>14% Off</span> on Drills And Drill Bits!</h3>
                    <p>Enhanced with acomplementary combo kit.</p>
                    <a href="#">Shop Now </a>
                </div>
                <img src={img1} className="box1_img" />
            </div>
            <div className="box2">
                <div className="box2_conent">
                    <h3>Circular Saw / Power Saw</h3>
                    <p>Save Up <span>45% All HandTool</span> Audiam Cusam in Store!</p>
                    <a href="#">Shop Now </a>
                </div>
                <img src={img2} className="box2_img" />
            </div>
        </section>
    )
}
export default Side4;