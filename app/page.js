import Link from 'next/link';
import StudentInfo from './StudentInfo';
import ItemList from './week3/item-list';

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: WEB DEVELOPMENT 2 - ASSIGNMENT</h1>
      <StudentInfo />
      <p><Link href='./week2'>WEEK2</Link></p>
      <p><Link href='./week3'>WEEK3</Link></p>
    </main>
  );
}