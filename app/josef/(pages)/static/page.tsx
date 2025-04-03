'use client';

import Link from 'next/link';
import Image from 'next/image';
import ss1 from '../../../../public/images/work/static/static-1.jpg';
import ss2 from '../../../../public/images/work/static/static-2.jpg';

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
    <div className='flex flex-col text-whiteish bg-buffalo pt-16'>
      <div className='bg-whiteish flex flex-row py-20 justify-around w-full'>
        <div className='flex w-1/3 flex-col justify-around'>
          <Link
            href='https://staticmag.org'
            target={'_blank'}
            className='font-mono text-blackish text-4xl mx-auto flex flex-row gap-5 hover:cursor-pointer hover:underline'
          >
            STATIC
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
          <p className='mx-auto font-selectric text-blackish text-3xl'>
            wnyu&apos;s online music magazine
          </p>
        </div>
      </div>
      <div className='bg-newyork flex' id='content'>
        <div className='w-1/2'>
          <div id='leftScroll' className='flex flex-col justify-around h-100'>
            <div className='w-full p-20 flex flex-col gap-10'>
              <p className='underline font-selectric text-3xl'>about</p>
              <p className='text-lg font-mono'>
                I co-founded/revived STATIC, WNYU&apos;s sporadically-printed
                program guide in Spring 2023 and have been serving as its
                labelless &apos;tech guy&apos; ever since. We started with a
                site on{' '}
                <Link
                  href='https://cargo.site'
                  className='underline decoration-dashed hover:cursor-pointer hover:decoration-solid'
                >
                  cargo
                </Link>
                , then we overhauled the site using WordPress.{' '}
                <span className='text-greyish'>
                  (Also we&apos;re working on re-doing it again in React using
                  the Sanity CMS, stay tuned)
                </span>
              </p>
              <p className='underline font-selectric text-3xl'>goal</p>
              <p className='text-lg font-mono'>
                The initial goal for the revival of STATIC, was a print magazine{' '}
                <span className='text-greyish'>(which we eventually made)</span>
                , but the school was... averse to that idea and encouraged us to
                just put it online.
              </p>
            </div>
          </div>
        </div>
        <div className='w-1/2 p-20'>
          <div id='rightScroll' className='flex flex-col gap-20 justify-around'>
            <Image
              alt='me'
              width='500'
              height='200'
              src={ss1}
              className='mx-auto'
            ></Image>
            <Image
              alt='me'
              width='500'
              height='200'
              src={ss2}
              className='mx-auto'
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
