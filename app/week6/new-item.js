"use client";

import { useState } from "react";

export default function NewItem({onAddItem}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");


    const handleSubmit = (event) => {
        event.preventDefault();
        alert (`Submitting ${name} ${quantity} ${category}`);

        const item = {
            name,
            quantity,
            category,

        };
        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("Produce");
        
    
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    
    return (
        <main>
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
              <h1 className="text-2xl text-gray-800 font-bold mb-8">
                Create New Item
              </h1>
              <form onSubmit={handleSubmit}>
                <label className="block mb-4">
                  <span className="text-gray-800">Item Name:</span>
                  <input
                    required
                    onChange={handleNameChange}
                    value={name}
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                  />
                </label>
    
                <label className="block mb-4">
                  <span className="text-gray-800">Item quantity:</span>
                  <input
                    type="number"
                    required
                    onChange={handleQuantityChange}
                    value={quantity}
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                    min={1}
                    max={99}
                  />
                </label>
    
                <label className="block mb-4 ">
                  <span className="text-gray-800">Item Category:</span>
                  <select onchange={handleCategoryChange} classname="shadow appearance-none norder rounded-lg w-2/4 py-2 px-3 text-gay-700 leading-tight focus:outline-none focus:shadow-outline-none"> 
                    <option disabled>Category</option>
                    <option value='Produce'selected>Produce</option>
                    <option value='Dairy'>Dairy</option>
                    <option value='Bakery'>Bakery</option>
                    <option value='Meat'>Meat</option>
                    <option value='Frozen Foods'>Frozen Foods</option>
                    <option value='Canned Goods'>Canned Goods</option>
                    <option value='Dry Goods'>Dry Goods</option>
                    <option value='Beverages'>Beverages</option>
                    <option value='Snacks'>Snacks</option>
                    <option value='Household'>Household</option>
                    <option value='Other'>Other</option>
                  </select>
                </label>
    
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white">
                  Create Item
                </button>
              </form>
          </div>
        </main>
      );
    }
    