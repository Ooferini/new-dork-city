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
    <div className='flex flex-col text-whiteish'>
      <div className='bg-whiteish flex flex-row py-20 justify-around w-full'>
        <div className='flex w-1/3 flex-col justify-around'>
          <p className='font-mono text-blackish text-4xl mx-auto'>WNYU</p>
        </div>
        <div className='flex w-2/3 flex-col justify-around'>
          <p className='mx-auto font-selectric text-blackish text-3xl'>
            NYU&apos;s student-run radio station
          </p>
        </div>
      </div>
      <div className='bg-buffalo flex' id='content'>
        <div className='w-1/2'>
          <div id='leftScroll' className='flex flex-col justify-around h-100'>
            <div className='w-full p-20 flex flex-col gap-10'>
              <p className='underline font-selectric text-3xl'>about</p>
              <p className='text-lg font-mono'>
                I have been a DJ at WNYU since my first semester at NYU, and as
                of Fall 24, I&apos;ve also served as the Tech Director of the
                station. This means I maintain the website, but most of my work
                has been on developing our new website!
              </p>
              <p className='text-lg font-mono'>
                This project was started by{' '}
                <Link
                  href='https://github.com/hminsky2002'
                  className='underline decoration-dashed hover:cursor-pointer hover:decoration-solid'
                >
                  Harry Minsky
                </Link>
                , the previous Tech Director at the station, and I&apos;ve
                learned so much from him. Thanks Harry
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
