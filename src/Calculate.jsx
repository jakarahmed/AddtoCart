


import React, { useState } from "react";
import Props from "./Props";

function Calculate() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productList, setProductList] = useState([]);

  const addProduct = () => {
    if (productName && productPrice) {
      const newProduct = {
        name: productName,
        price: productPrice,
      };
      setProductList([...productList, newProduct]);
      setProductName("");
      setProductPrice("");
    } else {
      alert("Please enter both product name and price.");
    }
  };




  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-4 w-full"
        placeholder="Product Name"
      />
      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-4 w-full"
        placeholder="Product Price"
      />
      <button
        onClick={addProduct}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Add Product
      </button>
      <div className="mt-6">
        <h2 className="text-xl font-bold">Product List</h2>
        <ul className="list-disc list-inside">



          {productList.map((product, index) => (
            <li key={index}>
              <Props massage={product}></Props>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>



  <div>






  </div>
    </div>
  );
}

export default Calculate;
