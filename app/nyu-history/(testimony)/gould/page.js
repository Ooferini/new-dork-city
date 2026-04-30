'use client';

import gouldAudio from '../../../../public/nyu-history/audio/gould-plaza.mp3';

import { useRef } from 'react';

export default function Gould() {
  const snippets = [
    {
      title: 'Getting to Gould Plaza',
      start: 0,
      end: 48,
      played: false,
    },
    {
      title: 'Encampment first impressions',
      start: 48,
      end: 88,
      played: false,
    },
    {
      title: 'Anticipating the raids',
      start: 88,
      end: 145,
      played: false,
    },
    { title: 'During the raid', start: 145, end: 202, played: false },
    { title: "NYU's response", start: 202, end: 223, played: false },
  ];
  const audioRef = useRef();

  const playSnippet = (snippet) => {
    if (audioRef.current) {
      setTimeout(() => {
        audioRef.current.currentTime = snippet.start;
        audioRef.current.play();
        playing = true;

        setTimeout(
          function () {
            audioRef.current.pause();
            player.currentTime = 0;
          },
          (snippet.end - snippet.start) * 1000,
        );
      }, 10);
    } else {
      // Throw error
    }
  };

  return (
    <div className='lg:mx-auto lg:w-1/2 border-black border-2 md:border-y-none flex flex-col'>
      <div className='mx-6 py-6 border-b-2 text-4xl'>Gould Plaza</div>
      <div className='mx-6 py-6 border-b-2 text-xl'>
        an outdoor plaza located on West 4th Street between Washington Square
        East and Mercer Street. Since 1892, the Gould family has been
        exceptionally generous to New York University. To express its gratitude,
        the University named this plaza in memory of Frank Jay Gould of the
        class of 1899, his father, Jay Gould, and his sister, Helen Gould
        Shepard, a graduate of the NYU School of Law. The Plaza is home to the
        Stern School of Business, Warren Weaver Hall, and the Courant Institute
        for Mathematics.
      </div>
      <div className='mx-6 py-6  text-xl'>
        Hear about a student who participated in the Palestine solidarity
        encampment at Gould Plaza&apos;s experience in the space.
        <div className='w-full flex flex-col justify-around gap-2'>
          {snippets.map((snippet) => {
            return (
              <div
                key={snippet.name}
                className='bg-[#57068c] rounded p-2 mt-6 mx-auto flex justify-around text-white cursor-hover'
                onClick={() => {
                  playSnippet(snippet);
                }}
              >
                <p>{snippet.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <audio ref={audioRef} src={gouldAudio} />
    </div>
  );
}
