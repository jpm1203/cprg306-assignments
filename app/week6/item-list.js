import { useState } from "react";
import Item from "./item";


export default function ItemList({items}) {

    const [sortBy, setSortBy] = useState("name");

    const handleSortByName = () => {
        setSortBy("name");
    }

    const handleSortByCategory = () => {
        setSortBy("category");
    }

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
          return a.category.localeCompare(b.category);
        }
        
        return 0;
      });
      
    return (
        <div>
            <div className="mt-8 m-2">
                <label htmlFor="bg-white-500 w-20 m-2 p-1 focus:bg-green-800">Sort by:</label>
                <button className="bg-sky-600 w-20 m-2 p-1 focus:bg-green-800 rounded" onClick={handleSortByName}>Name</button>
                <button className="bg-sky-600 w-20 m-2 p-1 focus:bg-green-800 rounded" onClick={handleSortByCategory}>Category</button>
            </div>

            {sortedItems.map((item) => (
                <Item 
                key={item.id} 
                name={item.name} 
                quantity={item.quantity} 
                category={item.category} 
                />
            ))}
        </div>


    );


}