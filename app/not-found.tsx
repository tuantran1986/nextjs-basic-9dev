import Link from "next/link";

export default function NotFound() {
  
  // CSS : GLOBAL = 'not-found' 
  return (
    <div className='not-found'>

      <h1>OPPS ...</h1>
      <h2>This page can not found</h2>
      <p>BACK to the: <Link href='/'>HomePage</Link></p>

    </div>
  );
}