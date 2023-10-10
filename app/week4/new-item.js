"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [itemCreated, setItemCreated] = useState("false");

    const handleSubmit = async (item) => {
        item.preventDefault();

        const newItem = {
            name,
            quantity,
            category,

        };
        console.log(newItem);
        setItemCreated(true);
        setName("");
        setQuantity("");
        setCategory("");
        setItemCreated(false);
    
    };
    const handleNameChange = (item) => {
        setName(item.target.value);
    };
    const handleQuantityChange = (item) => {
        setQuantity(item.target.value);
    };
    const handleCategoryChange = (item) => {
        setCategory(item.target.value);
    };
    
    return (
        <main>
          <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
            {itemCreated && (
              <div className="absolute top-0 mt-8 text-2xl text-yellow-400">
                Item Created
              </div>
            )}
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
                    type="quantity"
                    required
                    onChange={handleQuantityChange}
                    value={quantity}
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                  />
                </label>
    
                <label className="block mb-4 ">
                  <span className="text-gray-800">Item Category:</span>
                  <input
                    type="Category"
                    required
                    onChange={handleCategoryChange}
                    value={Category}
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                  />
                </label>
    
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
                >
                  Create Event
                </button>
              </form>
            </div>
          </div>
        </main>
      );
    }
    