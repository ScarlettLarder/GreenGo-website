'use client';
import Image from 'next/image'
import Link from 'next/link';
export default function Testimonials() {
    return(
        <div className="mt-8 sm:mt-16 ">
            <h1 className="title text-4xl sm:text-6xl text-center text-greengo">Testimonials</h1>
            <div className="lg:mx-0 xl:mx-10 2xl:mx-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5 md:mx-20 mt-10"> 
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 border-4 border-lightblue shadow-2xl hover:scale-105 duration-100 rounded-xl">
                        <div>
                            <p className='flex justify-center text-2xl sm:text-4xl pt-2 md:pt-8 text-center'>&quot;I can always</p>
                        </div>
                        <div>
                            <p className='flex justify-center text-2xl sm:text-3xl pb-2 sm:pb-8 text-gray-800 text-center px-5'> find something at Green Go that I fall in love with instantly.&quot;</p>
                        </div>
                        <div className='rounded-tr-3xl rounded-tl-xl flex justify-center space-x-3 md:p-4 '>
                                <Image src={"/Testimon_UserPlaceholder.png"} width={70} height={70} alt='Placeholder' className='rounded-tr-3xl rounded-tl-xl rounded-b-3xl pb-2'/> 
                                <div className='block'>
                                    <p className='space-y-0.5 text-2xl text-center'>Evelyn Davis</p>
                                    <p className='space-y-0.5 text-xl text-grey-800 block underline text-center'>SiteHolder</p>
                                </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 border-4 border-lightblue shadow-2xl hover:scale-105 duration-100 rounded-xl">
                        <div>
                            <p className='flex justify-center text-4xl pt-8 text-center'>&quot;Thanks so much!</p>
                        </div>
                        <div>
                            <p className='flex justify-center text-3xl pb-8 text-gray-800 text-center px-5'>My Green Go Classic was great and delivery was super fast too!&quot;</p>
                        </div>
                        <div className='rounded-tr-3xl rounded-tl-xl flex justify-center space-x-3 p-4 '>
                                <Image src={"/Testimon_UserPlaceholder.png"} width={70} height={120} alt='Placeholder' className='rounded-tr-3xl rounded-tl-xl rounded-b-3xl'/> 
                                <div className='block'>
                                    <p className='space-y-0.5 text-3xl text-center'>Olivia Nguyen</p>
                                    <p className='space-y-0.5 text-2xl text-grey-800 block underline text-center'>Siteholder</p>
                                </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 border-4 border-lightblue shadow-2xl hover:scale-105 duration-100 rounded-xl">
                        <div>
                            <p className='flex justify-center text-4xl pt-8 text-center'>&quot;I can trust Green Go</p>
                        </div>
                        <div>
                            <p className='flex justify-center text-3xl pb-8 text-gray-800 text-center px-5'>to always deliver a great taste, whatever the flavour.&quot;</p>
                        </div>
                        <div className='rounded-tr-3xl rounded-tl-xl flex justify-center space-x-3 p-4 '>
                                <Image src={"/Testimon_UserPlaceholder.png"} width={70} height={120} alt='Placeholder' className='rounded-tr-3xl rounded-tl-xl rounded-b-3xl'/> 
                                <div className='block'>
                                    <p className='space-y-0.5 text-3xl text-center'>John Big</p>
                                    <p className='space-y-0.5 text-2xl text-grey-800 block underline text-center'>SiteHolder</p>
                                </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 border-4 border-lightblue shadow-2xl hover:scale-105 duration-100 rounded-xl">
                        <div>
                            <p className='flex justify-center text-4xl pt-8 text-center'>&quot;I love their</p>
                        </div>
                        <div>
                            <p className='flex justify-center text-3xl pb-8 text-gray-800 text-center px-5'>attention to the environment and sustainability&quot;</p>
                        </div>
                        <div className='rounded-tr-3xl rounded-tl-xl flex justify-center space-x-3 p-4 '>
                                <Image src={"/Testimon_UserPlaceholder.png"} width={70} height={120} alt='Placeholder' className='rounded-tr-3xl rounded-tl-xl rounded-b-3xl'/> 
                                <div className='block'>
                                    <p className='space-y-0.5 text-3xl text-center'>John Small</p>
                                    <p className='space-y-0.5 text-2xl text-grey-800 block underline text-center'>SiteHolder</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="border-4 border-gray-500 mx-24  mt-10 sm:mt-20 mb-10 sm:mb-20 rounded-full"/>
                    <div className="flex flex-col items-center text-2xl md:text-4xl  mb-20">
                        <Image src="/Testimon_ScanPlaceholder.jpg" width="300" height="100" alt="QR code"/>
                        <p className='text-center '>Let us know what you think!</p>
                        <Link className="underline hover:text-greengo duration-200 text-center" href="https://www.instagram.com/barackobama/" target="_blank">Or click here</Link>
                    </div>
                </div>

        </div>
    )
}