
 import React from "react";
 import Cart from "./cart";
 import Product from "./product";
 import { BrowserRouter  , Routes , Route } from "react-router-dom";
 
  function Home(){

     return(
         
        <BrowserRouter>

       <Routes >
              
             <Route path="/" element={<Product/>}/>  
             <Route path="/cart" element={<Cart/> }/>                         

            </Routes>
            
            </BrowserRouter>
     );

  }

   export default Home