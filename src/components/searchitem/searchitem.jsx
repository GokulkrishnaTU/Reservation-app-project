import React from 'react'
import "./searchitem.css"

function Searchitem() {
  return (
    <div className='searchItems'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnrIVX5QLZ9qDe6u5rS9-NHZJZGqdj1awVw&usqp=CAU" alt="hey"  className='slImg' />
        <div className="slDesc">
        <h1 className=" siTitle" >Tower Street Apartments</h1>
 <span className=" siDistance" >500m from center</span>
 <span className=" siTaxiOp">Free airport taxi</span>
 <span className=" siSubtitle">
   Studio Apartment with Air conditioning
</span>
 <span className=" siFeatures">
   Entire studio 1 bathroom
                                 21m2 1 full bed
</span>
 <span className=" siCancelOp">Free cancellation </span>
 <span className=" siCancel0pSubtitle"> 
 you can cancel later , so lock on in this greatprice today</span>


        </div>
        <div className="slDetails">
            <div className="siRating">

            <span>Excellent</span>
            <button>5.9</button>
            </div>


        <div className="detialsText">
            <span className="siPrice">includes taces and fees</span>
            <span className="siTaxOP">seea avilabilty</span>
            <button className="siChecked">See avilabilty</button>
        </div>
        </div>

      
    </div>
  )
}

export default Searchitem
