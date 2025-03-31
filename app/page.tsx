import Image from 'next/image';
import Link from 'next/link';
import me from '../public/images/me.jpg';

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-6 grid-rows-11 h-[calc(100dvh-4rem)]'>
        <div className='col-span-3 row-span-4'>
          <Image src={me} width={2000} alt='an image of me, Josef!'></Image>
        </div>
        <div className='p-20 col-span-3 row-span-4 text-2xl font-sans flex flex-col justify-around bg-whiteish'>
          <p>
            Hello! I’m Josef, a web designer with a passion for making
            good-looking, intuitive designs.
          </p>
          <Link
            href='../about/'
            className='flex justify-start gap-5 hover:underline hover:cursor-pointer text-newyork'
          >
            Learn More
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-8'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
              />
            </svg>
          </Link>
        </div>
        <div className='col-span-4 row-span-7 justify-between bg-buffalo font-mono pl-26 p-20 flex flex-col gap-10 text-3xl text-whiteish'>
          <p>WORK</p>
          <ol className='list-decimal list-outside'>
            <Link href='/wnyu/'>
              <li className='hover:underline hover:cursor-pointer'>WNYU</li>
            </Link>
            <Link href='/static/'>
              <li className='hover:underline hover:cursor-pointer'>STATIC</li>
            </Link>
            <Link href='/eroft/'>
              <li className='hover:underline hover:cursor-pointer'>EROFT</li>
            </Link>
            <Link href='/visual/'>
              <li className='hover:underline hover:cursor-pointer'>VISUAL</li>
            </Link>
            <Link href='/penaltybox/'>
              <li className='hover:underline hover:cursor-pointer'>
                PENALTYBOX
              </li>
            </Link>
          </ol>
        </div>
        <div className='col-span-2 row-span-7 bg-newyork'></div>
      </div>
    </div>
  );
}
