'use client';
import Image from 'next/image'
import Link from 'next/link';
export default function Testimonials() {

    const wow = "insane";

    return(
        <div className="mt-16 ">
            <h1 className="title text-6xl text-center text-greengo">Testimonials</h1>
            <div className="lg:mx-0 xl:mx-10 2xl:mx-32">
                <div className="grid lg:grid-cols-2 gap-5 mx-10 sm:mx-20 mt-10"> 
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 border-4 border-lightblue shadow-2xl hover:scale-105 duration-100 rounded-xl">
                        <div>
                            <p className='flex justify-center text-4xl p-8 text-center'>Very good drink</p>
                        </div>
                        <div>
                            <p className='flex justify-center text-3xl pb-8 text-gray-800 text-center'>Might just be me tho lol but tbh idk</p>
                        </div>
                        <div className='rounded-tr-3xl rounded-tl-xl flex justify-center space-x-3 p-4 '>
                                <Image src={"/Place_1.jpeg"} width={120} height={120} alt='Placeholder' className='rounded-tr-3xl rounded-tl-xl rounded-b-3xl'/> 
                                <div className='block'>
                                    <p className='space-y-0.5 text-3xl text-center'>Big cat</p>
                                    <p className='space-y-0.5 text-2xl text-grey-800 block underline text-center'>at Big site co</p>
                                </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 border-4 border-lightblue shadow-2xl hover:scale-105 duration-100 rounded-xl">
                        <div>
                            <p className='flex justify-center text-4xl p-8 text-center'>Very good drink</p>
                        </div>
                        <div>
                            <p className='flex justify-center text-3xl pb-8 text-gray-800 text-center'>Might just be me tho lol but tbh idk</p>
                        </div>
                        <div className='rounded-tr-3xl rounded-tl-xl flex justify-center space-x-3 p-4 '>
                                <Image src={"/Place_1.jpeg"} width={120} height={120} alt='Placeholder' className='rounded-tr-3xl rounded-tl-xl rounded-b-3xl'/> 
                                <div className='block'>
                                    <p className='space-y-0.5 text-3xl text-center'>Big cat</p>
                                    <p className='space-y-0.5 text-2xl text-grey-800 block underline text-center'>at Big site co</p>
                                </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 border-4 border-lightblue shadow-2xl hover:scale-105 duration-100 rounded-xl">
                        <div>
                            <p className='flex justify-center text-4xl p-8 text-center'>Very good drink</p>
                        </div>
                        <div>
                            <p className='flex justify-center text-3xl pb-8 text-gray-800 text-center'>Might just be me tho lol but tbh idk</p>
                        </div>
                        <div className='rounded-tr-3xl rounded-tl-xl flex justify-center space-x-3 p-4 '>
                                <Image src={"/Place_1.jpeg"} width={120} height={120} alt='Placeholder' className='rounded-tr-3xl rounded-tl-xl rounded-b-3xl'/> 
                                <div className='block'>
                                    <p className='space-y-0.5 text-3xl text-center'>Big cat</p>
                                    <p className='space-y-0.5 text-2xl text-grey-800 block underline text-center'>at Big site co</p>
                                </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 border-4 border-lightblue shadow-2xl hover:scale-105 duration-100 rounded-xl">
                        <div>
                            <p className='flex justify-center text-4xl p-8 text-center'>Very good drink</p>
                        </div>
                        <div>
                            <p className='flex justify-center text-3xl pb-8 text-gray-800 text-center'>Might just be me tho lol but tbh idk</p>
                        </div>
                        <div className='rounded-tr-3xl rounded-tl-xl flex justify-center space-x-3 p-4 '>
                                <Image src={"/Place_1.jpeg"} width={120} height={120} alt='Placeholder' className='rounded-tr-3xl rounded-tl-xl rounded-b-3xl'/> 
                                <div className='block'>
                                    <p className='space-y-0.5 text-3xl text-center'>Big cat</p>
                                    <p className='space-y-0.5 text-2xl text-grey-800 block underline text-center'>at Big site co</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="border-4 border-gray-500 mx-24 mt-20 mb-20 rounded-full"/>
                    <div className="flex flex-col items-center text-4xl  mb-20">
                        <Image src="/BarackQR.jpg" width="300" height="100" alt="QR"/>
                        <p className='text-center '>Let us know what you think!</p>
                        <Link className="underline hover:text-greengo duration-200 text-center" href="https://www.instagram.com/barackobama/" target="_blank">If you do not have a phone click here</Link>
                    </div>
                </div>

        </div>
    )
}