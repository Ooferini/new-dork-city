export default function Home() {
  return (
    <div className='lg:mx-auto lg:w-1/2 border-black border-2 md:border-y-none flex flex-col'>
      <div className='mx-6 py-6 border-b-2 text-4xl'>NYU Oral History</div>
      <div className='mx-6 py-6 border-b-2 text-xl'>
        This oral history of NYU takes a critical look at the university through
        the lens of students who have been at odds with it. Minority students
        (especially Black students) have been disregarded and disrespected.
        Student activists have been brutalized, demonized, and harrased by the
        university. Students have been silenced, censored, and restricted so NYU
        can control the narrative of the NYU student experience. Find posters
        around campuses with QR codes to testimonies from real NYU students who
        have had enough. (Or explore below)
      </div>
      <div className='mx-6 py-6'>
        <p className='text-2xl pb-2'>Locations:</p>
        <ul className='text-lg list-disc list-inside'>
          <li className=''>
            <a href='./nyu-history/paulson' className='hover:underline'>
              John A. Paulson Center
            </a>
          </li>
          <li className=''>
            <a href='./nyu-history/kimmel' className='hover:underline'>
              Kimmel Center For University Life
            </a>
          </li>
          <li className=''>
            <a href='./nyu-history/bobst' className='hover:underline'>
              Elmer Holmes Bobst Library
            </a>
          </li>
          <li className=''>
            <a href='./nyu-history/gould' className='hover:underline'>
              Gould Plaza
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
