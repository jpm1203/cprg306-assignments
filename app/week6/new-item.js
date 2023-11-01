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
            <div className="w-full m-2 max-w-md bg-white p-7 rounded-lg shadow-md">
              <h1 className="text-2xl text-gray-800 font-bold mb-8">Add New Item</h1>
              <form onSubmit={handleSubmit}>
                <label className="block mb-4">
                  <span className="text-gray-800">Item Name:</span>
                  <input
                    required
                    onChange={handleNameChange}
                    value={name}
                    className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                  />
                </label>
            
                <div className="flex justify-between">
                    <label>
                        <input
                            className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}     
                            min={1}
                            max={99}
                        /> 
                </label>
    
                <label className="block mb-2">
                  <span className="text-gray-800">Item Category:</span>
                   <select onChange={handleCategoryChange} className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
                    <option disabled>Category</option>
                    <option value="Produce"selected>Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
                <button
                  type="submit"
                  className="w-full py-2 mt-2 bg-sky-600  hover:bg-green-800 rounded-md text-black">
                  Add Item
                </button>
              </form>
          </div>
        </main>
      );
    }
    