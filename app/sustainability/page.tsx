import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
const Sustainability: FunctionComponent = () => {
  return (
    <div className="bg-gradient-to-br from-green-100 to-indigo-100 ">
      <div className="bg-[url('/viny.svg')] bg-no-repeat">
        <p className='title text-gray-700 text-7xl pt-20 ml-20 text-center mb-20'>Sustainability <span className='text-greengo'>Commitment</span></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10 pb-14 object-center align-middle ">
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 text-center py-12 px-12 mx-20 text-3xl rounded-2xl inline-block align-middle border-4 border-lightblue">
          <p className="flex items-center justify-center">
            We believe in the purity of nature and the power of responsible sourcing. 
            Our energy drinks are crafted using only the finest ingredients, procured from organic and sustainable farms.
          </p>
          <p className="mt-10 flex items-center justify-center">
            This not only ensures a high-quality product for our consumers but also champions local farmers and eco-friendly 
            farming practices.
          </p>
        </div>
        <div className="mx-auto">
          <Image className="rounded-xl" src={"/Sustain_Img1_E1.png"} alt="Geese" width={600} height={1000}/>
        </div>
        <div className="mx-auto">
          <Image className="rounded-xl" src={"/Sustain_Img3_E1.png"} alt="Geese" width={600} height={1000}/>
        </div>
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 text-center py-12 px-12 mx-20 text-3xl rounded-2xl inline-block align-middle border-4 border-lightblue">
          <p>
             Our planet&apos;s health is paramount. Our energy drink packaging reflects this ethos.
             We utilize renewable, recyclable, and biodegradable materials to reduce our environmental footprint. 
          </p>
          <p className="mt-10">
            Every can you hold has been designed with Mother Earth in mind, ensuring that while you recharge, our planet doesn't deplete.
          </p>
        </div>
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 text-center py-12 px-12 mx-20 text-3xl rounded-2xl inline-block align-middle border-4 border-lightblue">
          <p>
            From the farm to your hands, we ensure that every step of our production process is ethically sound. 
            Our factories prioritize renewable energy sources, waste reduction, and fair labor practices.
          </p>
          <p className="mt-10">
            We are committed not just to energize you, but to invigorate our world with positive and sustainable actions.
          </p>
        </div>
        <div className="mx-auto ">
          <Image className="rounded-xl" src={"/Sustain_Img2_E1.png"} alt="Geese" width={600} height={1000}/>
        </div>
      </div>
      <div>
                <div className="border-4 border-gray-500 mx-24 mt-20 mb-20 rounded-full "/>
                <div className="flex flex-col items-center text-5xl pb-20 bg-[url('/viny2.svg')] bg-no-repeat bg-right-bottom">
                        <p>Find out more about us</p>
                        <Link className="bg-gradient-to-r from-green-100 to-blue-100 hover:from-green-200 hover:to-blue-50 px-10 py-2 m-4 duration-150 ease-in delay-75 rounded-full border-4 border-lightblue shadow-lightblue shadow-lg text-4xl" href="/about" target="_blank">Here</Link>
                    </div>
            </div>
    </div>
  );
};

export default Sustainability;
