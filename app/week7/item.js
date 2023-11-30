import React from 'react';

export default function Item ({ name, quantity, category }) {
  return (
    /* for items.json layout */
    <div className="border border-sky-500 rounded-lg shadow-md bg-transparent-800 w-full max-w-md m-2 p-2">
      <h1 className="text-xl font-bold">{name}</h1>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </div>
  );
}