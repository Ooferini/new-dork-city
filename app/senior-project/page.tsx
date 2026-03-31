import Image from 'next/image';
import map from '../../public/images/process/week1/map.png';
import dock from '../../public/images/process/dock.png';
import upload from '../../public/images/process/upload.png';
import album from '../../public/images/process/album.gif';

export default function blog() {
  return (
    <div className='bg-newyork w-full flex flex-col text-whiteish'>
      <div className='font-selectric text-6xl px-40 p-4 border-whiteish border-b-4 '>
        Josef&apos;s Senior Project Process Site
      </div>
      <div className='px-40'>
        <div className='border-whiteish border-b-2 p-4 flex flex-col'>
          <div className='font-selectric text-3xl pb-2'>
            Week 9 ~ 3/18-3/24 ~ Midterm
          </div>
          <p className='text-lg font-mono pb-2'>
            This week was the midterm presentation! There, I showed off this
            current prototype. Made in Figma, it has a menu to look through the
            library, as well as views for an individual album (with a place to
            see/add comments). I also have a modal for uploading music. I still
            need to make this all real, by creating that application that will
            serve this front end to users. The backend will be minimal, just
            storing the music and other data that&apos;ll need to be consistent
            across devices (user comments, user activity, etc).
          </p>
          <Image
            className='mx-auto pb-2'
            src={album}
            alt='gif of my prototype—albums on shelves, clicking on an album, which takes the user to a page with album details that scrolls down to a corkboard with comments on it'
          />
          <Image className='mx-auto pb-2' src={upload} alt='upload UI' />
          <p className='text-lg font-mono pb-2'>
            During the midterm demo, I recieved a lot of good notes from my
            classmates! To start, there&apos;s the overall style/branding.
            It&apos;s a little unrefined—I want to switch from the serif font,
            it&apos;s too bookish which I think will make people think it&apos;s
            an audiobook app. I&apos;m feeling something simple and sans-serif.
            To lean into the classic skeuomorphic iOS/OS X design attitude, I
            want to keep the texture of wood consistent throughout the app.
            Previous in-class feedback brought up the jukebox as a design
            metaphor, which the wood is in line with. I think it&apos;d be
            interesting to take that further, maybe incorporating the tube
            lights that usually adorn jukeboxes.
          </p>
          <p className='text-lg font-mono pb-2'>
            I also am not entirely set on virtual shelves being the way that
            music is organized. In class and at the midterm demo I got a couple
            of suggestions for alternatives, like albums being less sorted in a
            pile or in a box. Honestly, shelves seems easiest to implement, but
            I like the idea too of having maybe multiple ways of organizing. One
            user could have a shelf while another has a box?
          </p>
          <p className='text-lg font-mono pb-2'>
            I had a lot of people asking about the more social features during
            the demo as well. People really liked the comments, and were
            wondering what my plans were for other social features. As of right
            now, I&apos;m planning on having user activity be public, so if any
            two people are on the same instance of the app, they can see each
            others&apos; current listening activity. I like the idea of a
            minimal chatroom as well, or some sort of &apos;space&apos; where
            you can see everyone who&apos;s online.
          </p>
        </div>
        {/* <div className='border-whiteish border-b-2 p-4 flex flex-col'>
          <div className='font-selectric text-3xl pb-2'>Week 8 ~ 3/11-3/17</div>
          <p className='text-lg font-mono pb-2'></p>
        </div>
        <div className='border-whiteish border-b-2 p-4 flex flex-col'>
          <div className='font-selectric text-3xl pb-2'>Week 7 ~ 3/4-3/10</div>
          <p className='text-lg font-mono pb-2'></p>
        </div>
        <div className='border-whiteish border-b-2 p-4 flex flex-col'>
          <div className='font-selectric text-3xl pb-2'>Week 6 ~ 2/25-3/3</div>
          <p className='text-lg font-mono pb-2'>
          </p>
        </div>
        <div className='border-whiteish border-b-2 p-4 flex flex-col'>
          <div className='font-selectric text-3xl pb-2'>Week 5 ~ 2/18-2/24</div>
          <p className='text-lg font-mono pb-2'></p>
        </div> */}
        <div className='border-whiteish border-b-2 p-4 flex flex-col'>
          <div className='font-selectric text-3xl pb-2'>Week 4 ~ 2/11-2/17</div>
          <p className='text-lg font-mono pb-2'>
            This week I’ve been working through user flows and how music will be
            organized. I want to place emphasis on a communal organizational
            system—letting users collectively decide how an instance of the app
            will be organized. However, I do need to set up some system to allow
            for this (that hopefully isn’t too complicated because I will have
            to implement it—and because users have to be able to understand it).
          </p>
        </div>
        <div className='border-whiteish border-b-2 p-4 flex flex-col'>
          <div className='font-selectric text-3xl pb-2'>Week 3 ~ 2/4-2/10</div>
          <p className='text-lg font-mono pb-2'>
            This week I’ve been working on my proposal—trying to iron out more
            specific issues with my project. I’ve come to the conclusion that my
            project’s form will be an application (basically a server) that can
            be used for collective music organization, listening, and sharing.
            The app will serve a web-based interface accessible through a
            browser. In this interface, users can see what others are listening
            to, upload and download music to/from the collection, creating a
            relational database, inspired by the organizational style of{' '}
            <a
              href='https://rateyourmusic.com'
              className='underline hover:no-underline'
            >
              Rate Your Music
            </a>{' '}
            and{' '}
            <a
              href='https://discogs.com'
              className='underline hover:no-underline'
            >
              Discogs
            </a>
            .
          </p>
          <p className='text-lg font-mono pb-2'>
            I see the app being run on home networks by music enthusiasts. I
            also can see the app being run on community wifi networks, like{' '}
            <a
              href='https://redhookwifi.com'
              className='underline hover:no-underline'
            >
              Red Hook Wifi
            </a>{' '}
            and in other places where a single network may be used by many
            users, like schools or workplaces. I also hope for it to be used on
            public wifi networks, especially with people who do not have an
            internet connection at home.
          </p>
          <p className='text-lg font-mono pb-2'>
            I have also been trying to figure out how the UI works and how music
            is organized and presented to users. I’ve been thinking about the
            ’design metaphor,’ and I’m really inspired by the skeuomorphism of
            classic iOS/OS X. I like the idea of having ’shelves’ that users can
            use to organize the collection. For the design of the shelf I really
            like the OS X Snow Leopard dock—glassy but not 100% realistic.
          </p>
          <Image src={dock} alt='screenshot of OS X Snow Leopard dock' />
          <p className='text-lg font-mono pb-2'>
            I think having the collection be seen as more physical is really
            interesting. I’ve been trying to figure out how to represent,
            delineate, and group pieces of music. The smallest bit is an
            individual track or song, which would be part of an album (or some
            other collection of tracks). But where does a DJ mix fit into this?
            It’s both the smaller level track and on the larger level of an
            album. How do users access every track in the collection? I want to
            shy away from just a list, so would they have to find the tracks by
            going through the albums/higher level units? That seems fun and
            encourages exploration and seeing what people have contributed. How
            are these represented visually? I see albums and user-created
            playlists/mixtapes being on the same level, and these are what would
            populate the shelves. But how do users see these on the shelves? The
            album cover sitting there? What if it’s a playlist, does every
            playlist need a cover or should I create a stand-in? What would it
            look like if this was all physicsl?
          </p>
        </div>
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
            streamer). I’m in another class right now called Engineering
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
