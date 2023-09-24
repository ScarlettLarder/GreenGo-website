"use client"
import Image from 'next/image'
export default function contact() {

    const wow = "insane";

    return(
        <main>
            <Image className='float-right mt-20 mr-32 border-4 border-lightblue rounded-b-3xl rounded-tr-3xl rounded-tl-xl hover:scale-105 duration-100' alt="green" src="/About_GreenCo3D.PNG" width="500" height="100" />
            <p className='title text-gray-700 text-6xl pt-20 ml-20'>Contact <span className='text-greengo'>Us</span></p>
            <p className="text-3xl text-gray-600 ml-20 mb-10">We would love to get in touch</p>
            <span className="text-4xl ml-20 text-greengo">Email: <p className='ml-20 text-gray-700'>gmail.gmail.com</p></span>
            <br/>
            <span className="text-4xl ml-20 text-greengo pt-10">Phone Number: <p className='ml-20 text-gray-700'>1324 54367</p></span>
            <div>
            <p className='text-4xl ml-20 mt-10 text-greengo'>Form submit:</p>
            <div >
                <form className='ml-24 mt-5'>
                    <input 
                        required
                        type="text" 
                        placeholder='Enter Name' />
                    <button type="submit">+</button>
                    <br/><br/>
                    <input 
                        required
                        type="text" 
                        placeholder='Enter Email' />
                    <button type="submit">+</button>
                    <br/><br/>
                    <textarea
                        required
                        placeholder='Enter Message' />
                    <button type="submit">+</button>
                </form>
            </div>
            </div>
        </main>
    )
}