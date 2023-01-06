import React from "react";
import './side8.css';

const Side8=()=>{
    return(
        <section className="Side8">
            <div className="Side8_box1">
                <h4>Subscribe Our Newsletter!</h4>
                <p>Get 25% off first purchase when you subsribe our newsletter!</p>
                <div className="Side8Box1__input">
                    <input type="email" placeholder="Your Email *"/>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="Side8_box2">
                <h4>Why Choose Tool & Equipment</h4>
                <p>Purchase when subsribe</p>
                <p>Voluptatibus add definitionem</p>
                <p>Facete dolorem disputando</p>
                <p>Offendit intellegam</p>
            </div>
            <div className="Side8_box3">
                <h4>Join Our Community</h4>
                <div className="Side8_box3_icon">
                    <i class="uil uil-facebook"></i>
                    <i class="uil uil-twitter"></i>
                    <i class="uil uil-google"></i>
                    <i class="uil uil-youtube"></i>
                    <i class="uil uil-instagram-alt"></i>

                </div>
            </div>
        </section>
    )
}
export default Side8;