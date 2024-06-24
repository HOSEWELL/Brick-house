import React from "react";
import './index.css'

const Landing=()=>{

    return(
        <>
        <div className="landingpage">
            <div>
                <figure className="landingcontent">
                    <img src="https://www.lego.com/en-us/categories/adults-welcome/article/best-lego-sets-of-childhood-tv-shows-and-movies" alt="" />
                    <figcaption>THE LORD OF THE RINGS: RIVENDELL</figcaption>
                </figure>

            </div>
            <div>
                <h3>Select constructor</h3>
                <h3>price($) </h3>
                <input type="range" id="points" name="points" min="0" max="10"/>
                <h3>Age</h3>
                <span>Any</span><span>2-4</span><span>5-8</span><span>9-17</span><span>18+</span>
                <h3>Select Series</h3>
                <i><select name="" id="">
                    <option value="">Series</option>
                    <option value="">Movie</option>
                    <option value="">Trailes</option>
                    </select></i>
                <br />
                <button>select</button>
            </div>
        </div>

        </>
    )
}
export default Landing;