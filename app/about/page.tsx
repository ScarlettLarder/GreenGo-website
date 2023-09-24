import Image from 'next/image'
export default function about() {

    const wow = "insane";

    return(
        <main>
            <Image className='float-right mt-20 mr-32 border-4 border-lightblue rounded-b-3xl rounded-tr-3xl rounded-tl-xl hover:scale-105 duration-100' alt="green" src="/About_GreenCo3D.PNG" width="500" height="100" />
            <p className='title text-gray-700 text-6xl pt-20 ml-20'>About <span className='text-greengo'>Us</span></p>
            <div className='pt-10 flex flex-row'>
                <span className='ml-20 text-4xl basis-3/4'>Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull amco laboris nisi ut aliquip ex ea commodo consequat. <p className='text-3xl text-gray-700 mt-10'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </span>
            </div>
        </main>
    )
}