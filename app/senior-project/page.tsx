import Image from 'next/image';
import map from '../../public/images/process/week1/map.png';

export default function blog() {
  return (
    <div className='bg-newyork w-full flex flex-col text-whiteish'>
      <div className='font-selectric text-6xl px-6 p-4 border-whiteish border-b-4 '>
        Josef&apos;s Senior Project Process Site
      </div>
      <div className='px-20'>
        <div className='border-whiteish border-b-2 p-4 flex flex-col'>
          <div className='font-selectric text-3xl pb-2'>Week 2 ~ 1/28-2/3</div>
          <p className='text-lg font-mono pb-2'>
            This week I’ve been thinking about my project, reading a bit about
            the surrounding issues and trying to figure out what exactly I’m
            trying to do. I think one of the most important concepts to me is
            how we interact with music. Daily, how do I access, listen to, and
            hear about music? I personally use Spotify—especially if I’m out and
            about—but I also do have a collection of cassettes and CDs, as well
            as a walkman and a stereo that plays both tapes and CDs at home. I
            hear about music from my friends, one friend actually texted me a,
            well, Spotify link, to an album today. I also read Pitchfork and
            Stereogum, and I sometimes listen to WNYU, our radio station. But in
            the end, Spotify usually reigns supreme. Why? Because of the good UX
            features it has, especially its social features. What’s keeping me
            on Spotify is the collaborative playlist, the wireless device
            control, and the jam. And I so badly want to quit Spotify. It’s
            evil. And not just because it’s ruining the music industry (and even
            the music experience)—Spotify CEO Daniel Ek keeps investing in AI
            weapons and ’defense’ technology companies. Also Spotify keeps
            shoving their AI feautres down user’s throats. You can now see an
            AI-generated summary about many songs while you’re listening to
            them.
          </p>
          <p className='text-lg font-mono pb-2'>
            Filling out the meeting prep form this week was very helpful. It
            asked me a lot of questions that I hadn’t thought through yet. One
            big issue was the scope/audience. Am I making something for me and
            my friends? Or something that’s goal is to overthrow Spotify? I
            don’t have the economic expertise (or resources) to crerate
            something of large enough scale to truly rival Spotify (or any other
            streamer). I'm in another class right now called Engineering
            Resilience that’s all about technologies that don’t rely on a
            centralized grid. What would a decentralized (not in the blockchain
            way) music platform work? Maybe the social features in my project
            would work through Peer to Peer networking.
          </p>
          <p className='text-lg font-mono pb-2'>
            Ok, so, I’ve decided that the form of my project will be a (likely
            web-based) computer application. My next steps are to figure out
            what the app does. The main function will of course be listening to
            music. But how do you get to listening to music from opening the
            app? And what other supplemental features (like library
            organization) will there be? Also—what format is the music in? I was
            thinking mp3 because it’s my filetype of choice when it comes to
            music, but I’ve been thinking about all of the metamedia that
            surrounds music—album covers, liner notes, lyrics, supplemental
            artwork, maybe even your name sharpied on the case somewhere. And
            not only would you be able to compile all these things into one
            place, I’d love to let users share their music with others. I love
            getting a song file from a peer and it’s got a unique version of the
            album cover—it shows it’s been pre-loved.
          </p>
          <p className='text-lg font-mono pb-2'>
            This week I’m going to be laying out how exactly the app will work.
            What can you do on it? What does it look like? How does it
            (technically) work? I haven’t done a ton of work with networked
            stuff (or native applications), so I’ll have to figure that all out.
            In my meeting with my professor, she suggested coming up with some
            UX protocols/rules that would be strange and possibly conflicting
            with a music-listening app. So I’m going to do that and report back
            here.
          </p>
        </div>
        <div className='border-whiteish border-b-2 p-4 flex flex-col'>
          <div className='font-selectric text-3xl pb-2'>Week 1 ~ 1/21-1/27</div>
          <p className='text-lg font-mono'>
            This week was the first week. In class, we did an exercise where we
            had a biiig sticky note to respond to a couple prompts about where
            we might want to take our project. Here is that map. Most of the
            writing is mine, the red is my in-class partner’s, and the light
            green is professor Brain’s.
          </p>
          <div className='mx-auto my-4 w-1/2'>
            <Image src={map} alt='the mind map' />
          </div>
          <p className='text-lg font-mono pb-2'>
            I’m still not quite sure exactly what my senior project is going to
            be. A website? An app? A device? I’m open to a lot right now. My
            strengths lie in web and UI design, so likely something in that
            area.
          </p>
          <p className='text-lg font-mono pb-2'>
            No matter what form my project takes, I want to explore the way that
            we interact with music. I really love music and I exist in a
            community of music-lovers (and a lot of music-makers), and generally
            everyone is fed up with the streaming model and social media
            dictating people’s music taste. So right now I’m trying to think
            about: What if Spotify was never invented? How would our daily music
            consumption work? How can we turn ’daily consumption’ into ’daily
            enjoyment’? What are the features of Spotify that work well outside
            of the streaming model? What are the alternatives already?
          </p>
          <p className='text-lg font-mono'>
            One thought I’ve had is an alternative to iTunes. A computer app
            that helps you organize and listen to your music library, but with a
            new way to organize that’s based on links between songs: producers,
            writers, labels, scenes, physical location. I’m not sure the
            practicality of this, but as of right now I think it’s where I want
            to take my project.
          </p>
        </div>
      </div>
    </div>
  );
}
