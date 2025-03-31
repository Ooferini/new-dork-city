'use client';

import Link from 'next/link';
import Image from 'next/image';
import ss1 from '../../../public/images/work/static/static-1.jpg';

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
          <p className='font-mono text-blackish text-4xl mx-auto'>STATIC</p>
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
                just put it online. We
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
