import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="bg-[url('/Main_herobg.svg')] bg-center bg-no-repeat bg-cover">
        <Image className="mx-auto pt-10" src="/Main_CanPlaceholder.svg" height="1200" width="450" alt="can" />
      </div>
      <div className='mt-28 mb-5'>
        <p className='title text-gray-700 text-7xl text-center'>What makes us <span className='text-greengo'>Special</span></p>
      </div>
      <div className='grid grid-cols-3 gap-14 justify-center px-52 pb-28'>
          <div className='bg-green-100 border-4 border-lightblue rounded-3xl shadow-2xl'>
            <div className='bg-bordergreen m-5 rounded-b-2xl rounded-tr-3xl rounded-tl-xl shadow-xl'>
              <Image className="rounded-b-3xl rounded-tr-3xl rounded-tl-xl shadow-md" src="/Main_Forest.jpg" height="500" width="500" alt="forest" />
              <div>
                <p className='text-3xl text-center p-2.5 font-lightbold'>Sustainability</p>
              </div>
            </div>
            <p className='px-10 text-center text-3xl mb-10 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div className='bg-green-100 border-4 border-lightblue rounded-3xl shadow-2xl'>
            <div className='bg-bordergreen m-5 rounded-b-2xl rounded-tr-3xl rounded-tl-xl shadow-xl'>
              <Image className="rounded-b-3xl rounded-tr-3xl rounded-tl-xl shadow-md" src="/Main_Ingredients.jpg" height="500" width="500" alt="forest" />
              <div>
                <p className='text-3xl text-center p-2.5 font-lightbold'>Ingredients</p>
              </div>
            </div>
            <p className='px-10 text-center text-3xl mb-10 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div className='bg-green-100 border-4 border-lightblue rounded-3xl shadow-2xl'>
            <div className='bg-bordergreen m-5 rounded-b-2xl rounded-tr-3xl rounded-tl-xl shadow-xl'>
              <Image className="rounded-b-3xl rounded-tr-3xl rounded-tl-xl shadow-md" src="/Main_Health.jpg" height="500" width="500" alt="forest" />
              <div>
                <p className='text-3xl text-center p-2.5 font-lightbold'>Health-focused</p>
              </div>
            </div>
            <p className='px-10 text-center text-3xl mb-10 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
      </div>
      <div className='mt-10 mb-5'>
        <p className='title text-gray-700 text-7xl text-center'>So, whats <span className='text-greengo'>Inside?</span></p>
      </div>
      <div className='grid-cols-2 grid'>
        <div className=''>
          <p className='ml-32 text-4xl'>Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull amco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p className='ml-32 text-3xl text-gray-700 mt-10'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <Image className='mx-auto border-4 border-lightblue rounded-b-3xl rounded-tr-3xl rounded-tl-xl ' alt="green" src="/Main_Inside.jpg" width="500" height="100" />
      </div>
      


    </main>
  )
}
