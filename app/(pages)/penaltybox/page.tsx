'use client';

import Link from 'next/link';
import Image from 'next/image';
import ss1 from '../../../public/images/work/penaltybox/81mph.jpg';

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
    <div className='flex flex-col  bg-blackish pt-16'>
      <div className='bg-newyork flex flex-row py-20 justify-around w-full'>
        <div className='flex w-1/3 flex-col justify-around font-mono text-whiteish text-4xl'>
          <p className='mx-auto'>PENALTYBOX</p>
        </div>
        <div className='flex w-2/3 flex-col justify-around'>
          <p className='mx-auto font-selectric text-whiteish text-3xl'>
            concept and music for penaltybox, my &apos;band&apos;
          </p>
        </div>
      </div>
      <div className='bg-blackish text-whiteish flex' id='content'>
        <div className='w-1/2'>
          <div id='leftScroll' className='flex flex-col justify-around h-100'>
            <div className='w-full p-20 flex flex-col gap-10'>
              <p className='underline font-selectric text-3xl'>about</p>
              <p className='text-lg'>
                PENALTYBOX is a &apos;band&apos; consisting of me and my friends
                Leah and Collin. Existing mostly as a concept{' '}
                <span className='text-greyish'>(for now)</span>, it became a
                little more real when I took Bedroom Beatmaking, a class where I
                learned how to use Ableton Live for music production. I released
                my final project for the class under the penaltybox moniker on{' '}
                <Link
                  target={'_blank'}
                  href='https://soundcloud.com/ooferini/sets/81mph'
                  className='underline decoration-dashed hover:cursor-pointer hover:decoration-solid text-[#FF3300]'
                >
                  soundcloud
                </Link>{' '}
                and{' '}
                <Link
                  target={'_blank'}
                  href='https://www.ninaprotocol.com/releases/penaltybox81-81mph'
                  className='underline decoration-dashed hover:cursor-pointer hover:decoration-solid text-[#569AFF]'
                >
                  nina
                </Link>
                . I also designed the EP&apos;s cover.
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
