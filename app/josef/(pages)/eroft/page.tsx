'use client';

import Link from 'next/link';
import Image from 'next/image';
import ss1 from '../../../../public/images/work/eroft/eroft-1.jpg';

export default function page() {
  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const verticalContainer = document.getElementById('content');
  //   if (verticalContainer) {
  //     console.log('hi 1');
  //     const leftScroll = document.querySelector('#leftScroll');
  //     const rightScroll = document.querySelector('#rightScroll');
  //     if (leftScroll && rightScroll) {
  //       console.log('hi 2');
  //       gsap
  //         .timeline({
  //           defaults: {
  //             ease: 'none',
  //           },
  //           scrollTrigger: {
  //             trigger: verticalContainer,
  //             start: 'top top',
  //             end: '+=300',
  //             pin: true,
  //             invalidateOnRefresh: true,
  //             markers: true,
  //             scrub: 0.5,
  //           },
  //         })
  //         .to(leftScroll, {
  //           y: () => verticalContainer.clientHeight - leftScroll.clientHeight,
  //         })
  //         .to(
  //           rightScroll,
  //           {
  //             y: () =>
  //               verticalContainer.clientHeight - rightScroll.clientHeight,
  //           },
  //           '>'
  //         );
  //     }
  //   }
  // });

  return (
    <div className='flex flex-col text-whiteish bg-newyork pt-16'>
      <div className='bg-blackish flex flex-row py-20 justify-around w-full'>
        <div className='flex w-1/3 flex-col justify-around'>
          <Link
            href='https://motherforking.github.io/EROFT'
            className='font-mono text-whiteish text-4xl mx-auto flex flex-row gap-5 hover:cursor-pointer hover:underline'
          >
            EROFT
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-8 pt-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
              />
            </svg>
          </Link>
        </div>
        <div className='flex w-2/3 flex-col justify-around'>
          <p className='mx-auto font-selectric text-whiteish text-3xl'>
            classwork for Electronic Rituals, Oracles, and Fortune Telling
          </p>
        </div>
      </div>
      <div className='bg-buffalo flex' id='content'>
        <div className='w-1/2'>
          <div id='leftScroll' className='flex flex-col justify-around h-100'>
            <div className='w-full p-20 flex flex-col gap-10'>
              <p className='underline font-selectric text-3xl'>about</p>
              <p className='text-lg'>
                <Link
                  className='underline decoration-dashed hover:cursor-pointer hover:decoration-solid'
                  href='https://eroft.decontextualize.com'
                >
                  Electronic Rituals, Oracles, and Fortune Telling
                </Link>{' '}
                is a class I took in the Interactive Media Arts (IMA) program at
                NYU in Fall 2023. It was less about learning any particular
                skill and more about exploring artistically the ideas of ritual
                and fortune-telling in a digital media art context. Equipped
                with my (at the time less-developed) web design/development
                skills, I created five &apos;meditations&apos; as well as a
                final project. The projects, along with documentation, can be
                found on my{' '}
                <Link
                  className='underline decoration-dashed hover:cursor-pointer hover:decoration-solid'
                  href='https://motherforking.github.io/EROFT'
                >
                  class site
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <div
            id='rightScroll'
            className='flex flex-col gap-20 justify-around h-200'
          >
            <Image
              alt='me'
              width='500'
              height='200'
              src={ss1}
              className='mx-auto'
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
