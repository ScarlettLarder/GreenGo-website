import Image from "next/image";

export default function blog() {

    const wow = "insane";

    return(
        <main>
            <div className="md:mt-24 md:ml-16 mt-12 ml-8">
                <h1 className="text-6xl underline decoration-greengo">Blog Page</h1>
                <p className="text-3xl text-gray-600">The latest info from Green Go, right here</p>
            </div>
            <div className="grid grid-cols-1 justify-center gap-12 mx-20 mt-10">

                <div className="rounded-lg bg-lightgreen flex justify-between drop-shadow-2xl mx-4 md:mx-16">
                    <div className="p-10">
                        <h1 className="text-5xl ">Green Go, went? </h1>
                        <p className="pt-5 text-3xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...</p>
                        <p className="pt-5 text-2xl text-gray-600">By big blogger</p>
                    </div>
                    <Image className='rounded-tl-xl rounded-tr-3xl rounded-b-3xl right-0 m-10 hidden md:flex' src='/Main_Forest.jpg' alt="Forest" width={400} height={400}/>
                </div>

                <div className="bg-backgreen rounded-lg flex justify-between drop-shadow-2xl mx-4 md:mx-16">
                    <div className="p-10">
                        <h1 className="text-5xl ">Green Go, went? </h1>
                        <p className="pt-5 text-3xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...</p>
                        <p className="pt-5 text-2xl text-gray-600">By big blogger</p>
                    </div>
                    <Image className='rounded-tl-xl rounded-tr-3xl rounded-b-3xl right-0 m-10 hidden md:flex' src='/Main_Health.jpg' alt="Health" width={350} height={350}/>
                </div>

                <div className="bg-lightgreen rounded-lg flex justify-between drop-shadow-2xl mx-4 md:mx-16" >
                    <div className="p-10">
                        <h1 className="text-5xl ">Green Go, went? </h1>
                        <p className="pt-5 text-3xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...</p>
                        <p className="pt-5 text-2xl text-gray-600">By big blogger</p>
                    </div>
                    <Image className='rounded-tl-xl rounded-tr-3xl rounded-b-3xl right-0 m-10 hidden md:flex' src='/Main_Ingredients.jpg' alt="Ingredients" width={400} height={400}/>
                    
                </div>
            </div>
        </main>
    )
}