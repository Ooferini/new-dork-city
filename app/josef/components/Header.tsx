import Link from 'next/link';

export default function Header() {
  return (
    <div className='fixed t-0 flex flex-row justify-between z-100 px-10 py-4 font-mono text-lg text-whiteish'>
      <Link href='../josef/'>Josef Dunlap</Link>
    </div>
  );
}
