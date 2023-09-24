
import Image from "next/image";

/**  ---Quick start guide for web dev, delete if/when not needed--- 
 * 
 * TSX is both javascript and html. Html is used after return in tsx, while javascript can be added before the return, where const wow is. 
 * You can also create functions outside of the default function if needed. Raw CSS can be implimented in the "global.css", but you should try to use
 * tailwind most of the time by adding ClassName to your headings, like in the <p></p> tag and adding varibles like the ones in the cheatsheet (https://tailwindcomponents.com/cheatsheet/)
 * Tailwind is a library for css that makes it easier to work with; please look at the Core Concepts pages in the docs:
 * https://tailwindcss.com/docs/utility-first
 * Tailwind CheatSheet can be used to quickly get class names, such as sizes, colours ect. Just look it up in the search bar!
 * https://tailwindcomponents.com/cheatsheet/
 * 
 * For some general tips, try to make your site to look like the figma design as much as possible, tailwind.config.ts has preset colours from the pallet that you can call
 * instead of "red-100" for example. Look at the base page.tsx for main page if you want to look at some of my code to use for reverse engineering.
 * 
 * Goodluck!
 * (oh and "npm run dev" in the terminal to see your site btw, and use testbranch for saving)
 */


export default function blog() {

    const wow = "insane";

    return(
        <main>
            <div className="mt-24 ml-16">
                <h1 className="text-5xl">Blog Page</h1>
                <p className="text-3xl text-gray-600">The latest info from Green Go, right here</p>
            </div>
            <div className="grid grid-cols-1 justify-center gap-12 mx-16 my-20 ">

                <div className="rounded-lg bg-lightgreen flex justify-between drop-shadow-2xl">
                    <div className="p-10">
                        <h1 className="text-5xl ">Green Go, went? </h1>
                        <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...</p>
                    </div>
                    <Image className='rounded-tl-xl rounded-tr-3xl rounded-b-3xl right-0 m-10' src='/Main_Forest.jpg' alt="Forest" width={400} height={400}/>
                </div>

                <div className="bg-backgreen rounded-lg flex justify-between drop-shadow-2xl">
                    <div className="p-10">
                        <h1 className="text-5xl ">Green Go, went? </h1>
                        <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...</p>
                    </div>
                    <Image className='rounded-tl-xl rounded-tr-3xl rounded-b-3xl right-0 m-10' src='/Main_Health.jpg' alt="Health" width={350} height={350}/>
                </div>

                <div className="bg-lightgreen rounded-lg flex justify-between drop-shadow-2xl" >
                    <div className="p-10">
                        <h1 className="text-5xl ">Green Go, went? </h1>
                        <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...</p>
                    </div>
                    <Image className='rounded-tl-xl rounded-tr-3xl rounded-b-3xl right-0 m-10' src='/Main_Ingredients.jpg' alt="Ingredients" width={400} height={400}/>

                </div>
            </div>
            <p className="pt-32 bg-red-100">blog</p>
        </main>
    )
}