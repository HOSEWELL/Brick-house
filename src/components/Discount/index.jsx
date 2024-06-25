import React from "react";
import './index.css'

const Discount=()=>{
    return(
        <>
        <div className="discount">
            <div className="discountdiv">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjJQg2gpXvjng5RBRkMjkNC2uAKAUIqeQvIiivelIPN9chH6e" alt="" />
                <br />
                <span>New Year discount on <br />all Advert calendar!</span>
            </div>

            <div className="discountdiv"> 
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtrMYsCfJhYbzaKNKJS3WlWzZKfcqUeNUTLJ6_1g655ikzNRti" alt="" />
                <br />
                <span>Birthday promo set</span>
            </div>

            <div className="discountdiv">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTo9u3SFOLQ21SgFy7jmVKpJ61_T61cSjPg3Md7G9bipAcDHlSI" alt="" />
                <br />
                <span>Export Pandora with new<br />the Avater sets</span>
            </div>
        </div>

        </>

    )
}
export default Discount;