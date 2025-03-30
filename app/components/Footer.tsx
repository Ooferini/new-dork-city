import Link from 'next/link';

export default function Footer() {
  return (
    <div className='h-16 flex flex-row justify-between px-10 py-4 font-mono text-lg bg-greyish'>
      <div className='flex flex-col justify-around'>
        <Link href='https://newdorkcity.online'>new dork city</Link>
      </div>
      <div className='flex flex-col justify-around'>
        <p>2025 Josef Dunlap</p>
      </div>
    </div>
  );
}
