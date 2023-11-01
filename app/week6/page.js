"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData)
    const handleAddItem = (newItem) => { setItems([...items, newItem]);}

    const pageStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80")',
    backgroundSize: 'cover',
    backgroundColor: 'transparent',
    height: '170vh',
    };

    return (
        <main style={pageStyle}>
            <h1 className="text-4xl font-bold m-2 p-7 text-center stext-center text-green-800">Shopping List</h1><br></br>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items}/>
        </main>
    );
}