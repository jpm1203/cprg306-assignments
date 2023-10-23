import ItemList from "./item-list";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center text-sky-800">Shopping List</h1><br></br>
      <ItemList /><br></br>
    </main>
    
  );
}
