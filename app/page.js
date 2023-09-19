import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: WEB DEVELOPMENT 2 - Assignment</h1><br></br>
      <StudentInfo /><br></br>
      <nav>
        <Link href="/week2">Week2</Link>
      </nav>
    </main>
  );
}
