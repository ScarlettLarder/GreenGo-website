import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { League_Spartan } from 'next/font/google'

const league_spartan = League_Spartan({ 
  subsets: ['latin'],
  weight: ['500']
})

export const metadata: Metadata = {
  title: 'GreenGo Energy drink',
  description: 'An energy drink with sustainability and you in mind.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='mx-auto' lang="en">
      
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dbn5irt.css" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={league_spartan.className}>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js" async></script>
      <div className='min-w-full'>
      <header className="justify-between flex items-center text-3xl bold border bg-backgreen border-lightblue border-b-2 w-full bg-[url('/Nav_bg.svg')] bg-no-repeat bg-right shadow-sm ">
          <Link className='title text-greengo hover:text-green-500 focus:text-green-300 text-4xl float-left ml-5' href="/">GreenGo</Link>
          <div className="mt-1 sm:mt-2 text-sm flex sm:items-center font-normal sm:text-2xl bg-green-100 border-4 border-bordergreen rounded-b-2xl rounded-tr-2xl rounded-tl-md mr-10 mb-2 z-40">
            <button className='py-1 hover:bg-pink-100 items-center inline-flex px-5 rounded-bl-xl focus:bg-pink-200' id='dropdownHoverButton' data-dropdown-toggle='dropdownHover' data-dropdown-trigger='hover' type='button'>About
                <svg className='w-2.5 h-2.5 ml-2.5' xmlns="http://www.w3.org/2000/svg" fill='none' viewBox='0 0 10 6' aria-hidden='true'> 
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <div className=' rounded-lg text-xl shadow-xl m-5 border-2 bg-green-50  border-greengo hidden' id='dropdownHover'>
                <ul className='py-2 text-gray text-sm' aria-labelledby='dropdownHoverButton'>
                  <li className='hover:bg-green-100 focus:bg-green-200 py-2 px-4 '>  
                    <a href='/blog' className=''>Blog</a>
                  </li>
                  <li className='hover:bg-green-100 py-2 px-4'>
                    <a href='/product' className=''>Products</a>
                  </li>
                  <li className='hover:bg-green-100 py-2 px-4'>
                    <a href='/sustainability' className=''>Sustainability</a>
                  </li>
                  <li className='hover:bg-green-100 py-2 px-4'>
                    <a href='/testimonials' className=''>Testimonials</a>
                  </li>
                  <li className='hover:bg-green-100 py-2 px-4'>
                    <a href='/about' className=''>About</a>
                  </li>
                </ul>
              </div>
            <Link className='hover:text-darkgreen active:text-lmossgreen border-l-4 border-greengo hover:bg-pink-100 p-1 px-5 focus:bg-pink-200 hidden md:flex' href="/shop">Shop</Link>
            <Link className='hover:text-darkgreen active:text-lmossgreen border-l-4 border-greengo p-1 px-5 hover:bg-pink-100 focus:bg-pink-200 rounded-br-xl rounded-tr-xl hidden md:flex' href="/contact">Contact Us</Link>
          </div>
        </header>
        {children}
        <footer className='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 justify-between flex items-center text-3xl bold border-4 border-t-fuchsia-300 bottom-0 w-full '>
          <div className='flex'>
            <div className='bg-lightgreen p-1 ml-3 pl-3 pr-3 mt-1 rounded-2xl border-blue-400 border-4 block text-2xl hover:bg-green-100'>
              <a href="#" >Go back to the top</a>
            </div>
          </div>
          <Image className='mt-2 mr-10' src="/NavB_SusSlurp.png" alt="logo" width={220} height={200}/>
        </footer>
        </div>
      </body>
    </html>
  )
}
