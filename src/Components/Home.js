import React from 'react';

export const Home =()=>{
 return(
    <>
   <div className="top_header">
      <h1>Home Component</h1>
      <img src="https://cdn.pixabay.com/photo/2021/09/13/22/02/add-6622547_960_720.png" alt="add to cart" />
   </div>
    <div className="outer_box">
      <div className="image-wraper">
         <img src="https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307_960_720.png" alt="phone Img" />
      </div>
      <div className="image-wraper">
         <span>Phone Price :1000</span>
      </div>
      <div className="image-wraper">
         <button>Add to Cart</button>
      </div>
    </div>
    </>
 )
}
