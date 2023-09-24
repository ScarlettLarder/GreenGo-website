
'use client';
import { Carousel } from "flowbite-react";

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

export default function Testimonials() {

    const wow = "insane";

    return(
        <div className="mt-16 ">
            <h1 className="text-center text-5xl text-greengo">Testimonials</h1>
            <div className="h-screen m-10 z-10">
                <Carousel className="h-3/4 border border-blue-600">
                    <img src="/Main_Forest.jpg" alt="Forest" />
                    <img src="/Main_Health.jpg" alt="Health" />
                    <img src="/Main_Ingredients.jpg" alt="Ingredients" />
                </Carousel>
            
            </div>
        <p className="pt-32 bg-red-100">Testimonials</p>
        </div>
    )
}