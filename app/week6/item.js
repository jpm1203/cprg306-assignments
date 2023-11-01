export default function Item ({ name, quantity, category }) {
    return (
      <div className="border border-sky-500 bg-green-800 w-full max-w-xs m-2 p-2">
        <h1 className="text-xl font-bold">{name}</h1>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </div>
    );
  }