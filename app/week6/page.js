"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData)
    const handleAddItem = (newItem) => { setItems([...items, newItem]);}
    return (
        <main>
            <h1 className="text-4xl font-bold text-center text-green-500">Shopping List</h1><br></br>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items}/>
        </main>
    );
}