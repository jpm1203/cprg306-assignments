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
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
          return a.category.localeCompare(b.category);
        }
        // Add a default return value for cases where neither 'name' nor 'category' is chosen for sorting
        return 0;
      });
      
    return (
        <div>
            <div className="flex gap-3">
                <button className="bg-white-500 w-20 p-1 focus:bg-green-500 rounded" onClick={handleSortByName}>Name</button>
                <button className="bg-white-500 w-20 p-1 focus:bg-green-500 rounded" onClick={handleSortByCategory}>Category</button>
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