import React, { useState } from 'react';

function Number() {
  // Declare a state variable to hold the input value
  const [inputValue, setInputValue] = useState("");
  const [productList, setProductList] = useState("");

  // Handle input change event
 

const handle=()=>{

    setProductList([...productList, inputValue]);
    setInputValue("");
}

   
 



  return (
    <div>
      {/* Bind the input field to the state */}
      <input
        type="text"
      
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-4 w-full"
        placeholder="Product Name"
      />

      <button onClick={handle}>Add a card</button>


      {
        productList.map=(product,index)=>{


<div key={index}>
<h2>{product}</h2>

</div>

        }
      }

      {/* Display the current input value
      <p>Input value: {inputValue}</p> */}
    </div>
  );
}

export default Number;
