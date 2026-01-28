import Image from 'next/image';
import map from '../../public/images/process/week1/map.png';

export default function blog() {
  return (
    <div className='bg-newyork w-full flex flex-col text-whiteish'>
      <div className='font-selectric text-6xl px-6 p-4 border-whiteish border-b-4 '>
        Josef&apos;s Senior Project Process Site
      </div>
      <div className='border-whiteish border-b-2 p-4 flex flex-col'>
        <div className='font-selectric text-3xl pb-2'>Week 1 ~ 1/21-1/28</div>
        <p className='text-lg font-mono'>
          This week was the first week. In class, we did an exercise where we
          had a biiig sticky note to respond to a couple prompts about where we
          might want to take our project. Here is that map. Most of the writing
          is mine, the red is my in-class partner’s, and the light green is
          professor Brain’s.
        </p>
        <div className='mx-auto my-4 w-1/2'>
          <Image src={map} alt='the mind map' />
        </div>
        <p className='text-lg font-mono pb-2'>
          I’m still not quite sure exactly what my senior project is going to
          be. A website? An app? A device? I’m open to a lot right now. My
          strengths lie in web and UI design, so likely something in that area.
        </p>
        <p className='text-lg font-mono pb-2'>
          No matter what form my project takes, I want to explore the way that
          we interact with music. I really love music and I exist in a community
          of music-lovers (and a lot of music-makers), and generally everyone is
          fed up with the streaming model and social media dictating people’s
          music taste. So right now I’m trying to think about: What if Spotify
          was never invented? How would our daily music consumption work? How
          can we turn ’daily consumption’ into ’daily enjoyment’? What are the
          features of Spotify that work well outside of the streaming model?
          What are the alternatives already?
        </p>
        <p className='text-lg font-mono'>
          One thought I’ve had is an alternative to iTunes. A computer app that
          helps you organize and listen to your music library, but with a new
          way to organize that’s based on links between songs: producers,
          writers, labels, scenes, physical location. I’m not sure the
          practicality of this, but as of right now I think it’s where I want to
          take my project.
        </p>
      </div>
    </div>
  );
}
