import Image from 'next/image';
import Link from 'next/link';
import me from '../public/me.png';

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-6 grid-rows-11 h-[calc(100dvh-4rem)]'>
        <div className='col-span-3 row-span-4'>
          <Image src={me} width={2000} alt='an image of me, Josef!'></Image>
        </div>
        <div className='p-20 col-span-3 row-span-4 text-2xl font-sans flex flex-col justify-around'>
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
        <div className='col-span-4 row-span-7 justify-between gap-10 bg-buffalo flex flex-col font-mono p-20 text-3xl text-whiteish'>
          <p>WORK</p>
          <ul className='list-disc'>
            <Link href='/work/wnyu/'>
              <li className='hover:underline hover:cursor-pointer'>WNYU</li>
            </Link>
            <Link href='/work/static/'>
              <li className='hover:underline hover:cursor-pointer'>STATIC</li>
            </Link>
            <Link href='/work/eroft/'>
              <li className='hover:underline hover:cursor-pointer'>EROFT</li>
            </Link>
            <Link href='/work/visual/'>
              <li className='hover:underline hover:cursor-pointer'>VISUAL</li>
            </Link>
            <Link href='/work/penaltybox/'>
              <li className='hover:underline hover:cursor-pointer'>
                BEATMAKING
              </li>
            </Link>
          </ul>
        </div>
        <div className='col-span-2 row-span-7 bg-newyork'></div>
      </div>
    </div>
  );
}
