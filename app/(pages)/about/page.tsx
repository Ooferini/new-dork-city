import me from '../../../public/images/me.gif';
import Image from 'next/image';

export default function about() {
  return (
    <div className='flex flex-row text-whiteish'>
      <div className='w-2/3 p-20 flex flex-col gap-10'>
        <p className='text-5xl font-selectric underline'>about me</p>
        <p className='text-2xl  font-mono'>
          Hello! I'm Josef, a web designer with a passion for making
          good-looking, intuitive designs... but you already know that! I'm
          currently studying Integrated Design and Media at NYU, where I'm
          learning about human-computer interaction and user experience design,
          as well as web design/development tools like Figma and React.
        </p>
        <p className='text-2xl  font-mono'>
          I'm also passionate about music—I currently serve as the Tech Director
          at WNYU where I'm developing our new website. There, I also co-founded
          our music and culture magazine, STATIC. I care about cultivating
          community around music and want to work with others to uplift
          musicians and music lovers with technology and design.
        </p>
      </div>
      <div className='w-1/3  flex flex-col justify-around p-20'>
        <Image
          src={me}
          height={1000}
          width={500}
          alt='an gif of images of me, Josef!'
        />
      </div>
    </div>
  );
}
