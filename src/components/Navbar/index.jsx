import React from "react";
import './index.css'


const Navbar=()=>{

    return(
        <>
            <div className="navbar">
                <div>
                    <span></span>
                    <span style={{color:'red'}}>Brick House</span>
                </div>
                <div className="navinput">
                    <span><box-icon name='grid' type='solid' ></box-icon>Catalog</span>
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="navicons"> 
                    <li><i class="fa-solid fa-heart"></i></li>
                    <li><i class="fa-solid fa-cart-shopping"></i></li>
                    <li><i class="fa-solid fa-user"></i></li>

                </div>
            </div>
        </>
    )
}
export default Navbar;