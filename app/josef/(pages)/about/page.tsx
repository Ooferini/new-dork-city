import me from '../../../../public/images/me.gif';
import Image from 'next/image';

export default function about() {
  return (
    <div className='container-hf pt-16 flex flex-row bg-newyork text-whiteish'>
      <div className='w-2/3 p-20 flex flex-col gap-10 bg-buffalo'>
        <p className='text-5xl font-selectric underline'>about me</p>
        <p className='text-2xl'>
          Hello! I&apos;m Josef, a web designer with a passion for making
          good-looking, intuitive designs... but you already know that! I&apos;m
          currently studying Integrated Design and Media at NYU, where I&apos;m
          learning about human-computer interaction and user experience design,
          as well as web design/development tools like Figma and React.
        </p>
        <p className='text-2xl'>
          I&apos;m also very passionate about music and public service! I
          currently serve as the Tech Director at WNYU where I&apos;m developing
          our new website. There, I also co-founded our music and culture
          magazine, STATIC. I care about cultivating community around music and
          want to work with others to uplift musicians and music lovers with
          technology and design.
        </p>
        <div className='flex justify-left text-xl font-mono'>
          <a
            className='flex-shrink bg-newyork p-4'
            href='https://drive.google.com/file/d/1q9ipDMrvPcU7jpkacno1bmRFbZKY6N1C/view?usp=sharing'
            target='_blank'
          >
            resume
          </a>
        </div>
      </div>
      <div className='w-1/3 hover:pause bg-buffalo flex flex-col justify-around p-20'>
        <Image
          className=''
          src={me}
          height={600}
          width={500}
          alt='a gif of images of me, Josef!'
        />
      </div>
    </div>
  );
}
