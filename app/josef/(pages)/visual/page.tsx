'use client';

import Link from 'next/link';
import Image from 'next/image';
import ss1 from '../../../../public/images/work/visual/visual-1.jpg';
import ss2 from '../../../../public/images/work/visual/visual-2.jpg';
import ss3 from '../../../../public/images/work/visual/visual-3.jpg';
import ss4 from '../../../../public/images/work/visual/visual-4.jpg';

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
      <div className='bg-blackish flex flex-row py-20 justify-around w-full'>
        <div className='flex w-1/3 flex-col justify-around font-mono text-whiteish text-4xl'>
          <p className='mx-auto'>VISUAL</p>
        </div>
        <div className='flex w-2/3 flex-col justify-around'>
          <p className='mx-auto font-selectric text-whiteish text-3xl'>
            graphic/visual design work
          </p>
        </div>
      </div>
      <div className='bg-whiteish text-blackish flex'>
        <div className='flex flex-col justify-around'>
          <div className='w-full p-20 flex flex-col gap-10'>
            <p className='underline font-selectric text-3xl'>about</p>
            <p className='text-lg font-mono'>
              This is a selection of my graphic design work, spanning posters,
              packaging, and more
            </p>
            <p className='underline font-selectric text-3xl'>work</p>
            <div className='flex flex-row flex-wrap w-full justify-around gap-10'>
              <Image
                className='shrink-0'
                src={ss1}
                height={300}
                width={500}
                alt=''
              />
              <Image
                className='shrink-0'
                src={ss2}
                height={300}
                width={500}
                alt=''
              />
              <Image
                className='shrink-0'
                src={ss3}
                height={300}
                width={600}
                alt=''
              />
              <Image
                className='shrink-0'
                src={ss4}
                height={300}
                width={500}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
