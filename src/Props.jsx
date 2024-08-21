import React, { useEffect, useState } from 'react';
import Props2 from './Props2';


const Props = () => {

const [product,setProduct]=useState([]);
const [cart,setCard]=useState([])


useEffect(()=>{
    fetch('../public/fake.json')
    .then((res) => {
        return res.json();
      })
      .then((data) => {
     
        setProduct(data)})


},[])



const addToCart=(item)=>{

    setCard([...cart,item])
   

}






  


    return (
       <div>
    <div className='flex justify-end z-20'>
    <Props2 cart={cart} />
    </div>



<h2 className='text-center text-[35px] font-bold text-fuchsia-600 p-16'>
    All Product </h2>


<div className='flex justify-around flex-wrap'> 
           


           
              
           
           
           {product.map((item) => (
                
           
           
           
           <div key={item.id}>
           
           
           <div className="card bg-base-100 w-96 shadow-xl">
             <figure>
             <img key={item.id} src={item.img} width={300} height={300} />
             </figure>
             <div className="card-body">
               <h2 className="card-title">{ item.title}</h2>
               <p>{item.description.slice(0.100)}</p>
               <div className="card-actions justify-end">
                 <button  onClick={() => addToCart(item)}  className="btn bg-green-400">Add to cart</button>
                
               </div>
             </div>
           </div>
           
           
           
           </div>
           
                 ))}
           
                     
                   </div>

              
       </div>
    );
};

export default Props;