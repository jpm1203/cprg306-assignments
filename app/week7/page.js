"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
/* import MealIdeas from "./meal-ideas"; */ 
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData)
    const handleAddItem = (newItem) => { setItems([...items, newItem]);}

    const pageStyle = {
    backgroundImage: 'url("https://foodindustry.asia/hubfs/What%20we%20do-1.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 'auto',
    };

    return (
        <main style={pageStyle}>
            <h1 className="text-4xl font-bold m-2 p-7 text-center stext-center text-green-800">Shopping List</h1><br></br>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items}/>
        </main>
    );
}