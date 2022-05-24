import React from 'react';
import Book1 from './images/book1.jpg';
import Book2 from './images/book2.jpg';
import Book3 from './images/book3.jpg';
import Book4 from './images/book4.jpeg';
import Book5 from './images/book5.webp';
import Book6 from './images/book6.jpg';
function Shop(){

   return(
      <div className='Shop'>
         <h2>Find your favorite book here :</h2>
         <div className='books'>
            <div className='book1'>
               <h4>Book1</h4>
               <img src={Book1} alt="img1"/>
               <h5>Price : 10 $</h5>
               <button>Buy </button>
            </div>
            <div className='book2'>
               <h4>Book1</h4>
               <img src={Book2} alt="img2"/>
               <h5>Price : 10 $</h5>
               <button>Buy </button>
            </div>
            <div className='book3'>
               <h4>Book1</h4>
               <img src={Book3} alt="img3"/>
               <h5>Price : 10 $</h5>
               <button>Buy </button>
            </div>
            <div className='book4'>
               <h4>Book1</h4>
               <img src={Book4} alt="img4"/>
               <h5>Price : 10 $</h5>
               <button>Buy </button>
            </div>
            <div className='book5'>
               <h4>Book1</h4>
               <img src={Book5} alt="img5"/>
               <h5>Price : 10 $</h5>
               <button>Buy </button>
            </div>
            <div className='book6'>
               <h4>Book1</h4>
               <img src={Book6} alt="img6"/>
               <h5>Price : 10 $</h5>
               <button>Buy </button>
            </div>
         </div>
      </div>
   )
}

export default Shop;