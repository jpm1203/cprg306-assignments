import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: WEB DEVELOPMENT 2 - ASSIGNMENT</h1>
      <br></br>
      <StudentInfo />
      <br></br>
      <p><Link href='./week2'>WEEK2</Link></p>
      <p><Link href='./week3'>WEEK3</Link></p>
      <p><Link href='./week4'>WEEK4</Link></p>
      <p><Link href='./week5'>WEEK5</Link></p>
      <p><Link href='./week6'>WEEK6</Link></p>
      <p><Link href='./week7'>WEEK7</Link></p>
      <p><Link href='./week8'>WEEK8</Link></p>
    </main>
  );
}