import React from "react";
import './index.css'

const Landing=()=>{

    return(
        <>
        <div className="landingpage">
            <div className="landingcontent">
                <div className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9XdQOWr5vZkNn_Nt2Jjr6OC5GBN8XiVENiZPBYd5gzDPBwqa" alt="" />
                </div>
               

            </div>
            <div className="selector">
                <h3>Select constructor</h3>
                <h3>price($) </h3>
                <input type="range" id="points" name="points" />
                <h3>Age</h3>
                <span>Any</span><span>2-4</span><span>5-8</span><span>9-17</span><span>18+</span>
                <h3>Select Series</h3>
                <i><select name="" id="selector">
                    <option value="">Series</option>
                    <option value="">Movie</option>
                    <option value="">Trailes</option>
                    </select></i>
                <br />
                <button className="select">select</button>
            </div>
        </div>

        </>
    )
}
export default Landing;