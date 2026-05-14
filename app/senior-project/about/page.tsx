export default function about() {
  return (
    <div className='bg-buffalo text-whiteish w-full'>
      <p className='p-4 text-6xl font-selectric'>Collective Music Collection</p>
      <p className='px-4 pb-4 font-mono'>
        Spotify sucks. It pays artists terribly, big labels are able to promote
        their artists by paying Spotify, the CEOs put their profits toward
        weapons companies… the list goes on. Streaming in general both makes
        music so wonderfully accessible, but the immediate access almost
        devalues the music and makes it a lot harder to connect with what
        we&apos;re listening to. Both our choice and our engagement with the
        music are deprioritized with streaming. Tragically, in 2026, it feels
        impossible to not have a subscription to Spotify (or Apple Music or
        Tidal or whatever), especially if you enjoy music. And one big reason is
        the (admittedly robust) social features. Especially Spotify, with their
        collaborative playlists, friend activity, and the Spotify Jam. These
        features all seem antithetical to Spotify&apos;s usual mission though.
        Instead of getting music recommended by an algorithm, these features
        encourage users to recommend music to each other. The Collective Music
        Collection is a local music server with a limited library curated by the
        people around you (and those who&apos;ve been around before). Instead of
        hitting shuffle on seemingly every song in existence and letting Spotify
        sell your ears to the highest bidder, instead explore a collection that
        can bring you closer to your community.
      </p>
      <div className=''>
        <img
          className='w-1/2 mx-auto pb-4'
          src='../../images/process/pic1.png'
        />
        <img
          className='w-1/2 mx-auto pb-4'
          src='../../images/process/pic2.jpg'
        />
        <img
          className='w-1/2 mx-auto pb-4'
          src='../../images/process/pic3.png'
        />
      </div>
    </div>
  );
}
