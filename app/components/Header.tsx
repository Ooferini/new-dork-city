import Link from 'next/link';

export default function Header() {
  return (
    <div className='w-full h-16 text-white'>
      <div className='fixed t-0 flex flex-row justify-between z-100 px-10 py-4 font-mono text-lg'>
        <Link href='../'>Josef Dunlap</Link>
      </div>
    </div>
  );
}
