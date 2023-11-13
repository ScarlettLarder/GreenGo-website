"use client"

import Image from 'next/image'
import Spline from '@splinetool/react-spline';
import Link from 'next/link'


export default function Home() {
  return (
    <main className="">  
      <div className="bg-[url('/Main_herobg.svg')] bg-center bg-no-repeat bg-cover relative">
        <div className=''>
          <div className="waveTextAnimated wow pt-14 letter tracking-widest text-9xl text-gray-700 px-10">
            <span className='px-7 text-9xl'>W</span>
            <span className='px-7 text-9xl'>E</span>
            <span className='px-7 text-9xl'>L</span>
            <span className='px-7 text-9xl'>C</span>
            <span className='px-7 text-9xl'>O</span>
            <span className='px-7 text-9xl'>M</span>
            <span className='px-7 text-9xl'>E</span>
          </div>
        </div>
        <div className='z-30 relative pt-18'>
          <Spline scene="https://prod.spline.design/rrpNlXeZXTzEdg63/scene.splinecode" />
        </div>
      </div>
      <div className='mt-28 mb-5'>
        <p className='title text-gray-700 text-6xl text-center'>What makes us <span className='text-greengo'>Special</span></p>
      </div>
      <div className='grid grid-cols-3 gap-14 justify-center px-52 pb-28'>
          <div className='bg-green-100 border-4 border-lightblue rounded-3xl shadow-2xl hover:scale-105 duration-100'>
            <div className='bg-bordergreen m-5 rounded-b-2xl rounded-tr-3xl rounded-tl-xl shadow-xl'>
              <Image className="rounded-b-3xl rounded-tr-3xl rounded-tl-xl shadow-md" src="/Main_Forest.jpg" height="500" width="500" alt="forest" />
              <div>
                <p className='text-3xl text-center p-2.5 font-lightbold'>Sustainability</p>
              </div>
            </div>
            <p className='px-10 text-center text-3xl mb-10 '>We focus on sustainability, being net-positive and using eco friendly materials. Learn more on our sustainability page.</p>
          </div>
          <div className='bg-green-100 border-4 border-lightblue rounded-3xl shadow-2xl hover:scale-105 duration-100'>
            <div className='bg-bordergreen m-5 rounded-b-2xl rounded-tr-3xl rounded-tl-xl shadow-xl'>
              <Image className="rounded-b-3xl rounded-tr-3xl rounded-tl-xl shadow-md" src="/Main_Ingredients.jpg" height="500" width="500" alt="forest" />
              <div>
                <p className='text-3xl text-center p-2.5 font-lightbold'>Ingredients</p>
              </div>
            </div>
            <p className='px-10 text-center text-3xl mb-10 '>Only using natural, healthy Ingredients for our products, you can trust us to give you what you deserve- the best.</p>
          </div>
          <div className='bg-green-100 border-4 border-lightblue rounded-3xl shadow-2xl hover:scale-105 duration-100'>
            <div className='bg-bordergreen m-5 rounded-b-2xl rounded-tr-3xl rounded-tl-xl shadow-xl'>
              <Image className="rounded-b-3xl rounded-tr-3xl rounded-tl-xl shadow-md" src="/Main_Health.jpg" height="500" width="500" alt="forest" />
              <div>
                <p className='text-3xl text-center p-2.5 font-lightbold'>Health-focused</p>
              </div>
            </div>
            <p className='px-10 text-center text-3xl mb-10 '>We also have a focus on health, having vitamins and minerals inside greengo, with juice and caffeine to give you a healthy kick.</p>
          </div>
      </div>

      <div className='mt-10 mb-5'>
        <p className='title text-gray-700 text-6xl text-center'>So, whats <span className='text-greengo'>Inside?</span></p>
      </div>

      <div className='grid-cols-2 grid mb-10'>
        <div className=''>
          <p className='ml-32 text-4xl'>Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull amco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p className='ml-32 text-3xl text-gray-700 mt-10'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <Image className='mx-auto border-4 border-lightblue rounded-b-3xl rounded-tr-3xl rounded-tl-xl hover:scale-105 duration-100' alt="green" src="/Main_Inside.jpg" width="500" height="100" />
      </div>
    </main>
  )
}
