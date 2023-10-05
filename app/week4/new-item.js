"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [itemCreated, setitemCreated] = useState("false");

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
        setName(item,)
    }
}    