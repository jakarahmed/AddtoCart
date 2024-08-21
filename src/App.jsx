
import './App.css'




// import React, { useState } from "react";
// import Calculate from './Calculate';
// import Number from './Number';
import Props from './Props';
import Props2 from './Props2';

function App() {
  // const [ticketCount, setTicketCount] = useState("");
  // const [result, setResult] = useState(null);
  // const [error, setError] = useState("");

  // const calculateMoney = (tickets) => {
  //   const ticketPrice = 120;
  //   const guardCost = 500;
  //   const staffCount = 8;
  //   const lunchCostPerStaff = 50;

  //   const totalCost = guardCost + staffCount * lunchCostPerStaff;
  //   const totalIncome = tickets * ticketPrice;
  //   return totalIncome - totalCost;
  // };






  // const handleCalculate = () => {
  //   const tickets = parseInt(ticketCount);

  //   if (isNaN(tickets) || tickets < 0) {
  //     setError("টিকেট সংখ্যা নেগেটিভ হতে পারে না।");
  //     setResult(null);
  //   } else {
  //     setError("");
  //     const remainingMoney = calculateMoney(tickets);
  //     setResult(remainingMoney);
  //   }

   
  // };



  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* <h1 className="text-2xl font-bold mb-4">Calculate Remaining Money</h1>
      <input
        type="number"
        value={ticketCount}
        onChange={(e) => setTicketCount(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-4 w-full"
        placeholder="টিকেট সংখ্যা দিন"
      />
      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Calculate
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result !== null && !error && (
        <p className="mt-4 text-lg">
          বাকের ভাইর কাছে অবশিষ্ট টাকা: {result} টাকা
        </p>
      )} */}

{/* <Calculate></Calculate> */}

{/* <Number></Number> */}

<Props></Props>
    

    </div>
  );
}

export default App;
