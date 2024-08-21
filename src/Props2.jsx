import React from 'react';

const Props2 = ({cart}) => {

    return (
        <div>




<div className="drawer drawer-end z-30">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn bg-red-400 text-3xl text-white ">Cart</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
     
     


    <h2 className='text-[25px]'>All Product Count:{cart.length}</h2>

    {cart.map((data, index) => (
<li key={index} className="border-b py-2">

  <h4 className="font-bold">{data.title}</h4>
  <p className="text-gray-600">{data.description}</p>
</li>
))}


    </ul>
  </div>
</div>





        </div>
    );
};

export default Props2;