import { FunctionComponent } from "react";
import Image from "next/image";
const Sustainability: FunctionComponent = () => {
  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-100">
      <p className='title text-gray-700 text-6xl pt-20 ml-20 text-center'>Sustainability <span className='text-greengo'>Commitment</span></p>
      <div className="grid grid-cols-2 gap-10 mx-10 ">
        <div className="bg-gradient-to-br from-rose-100 to-rose-200 text-center my-10 py-8 text-3xl">
          <p>
            We believe in the purity of nature and the power of responsible sourcing. 
            Our energy drinks are crafted using only the finest ingredients, procured from organic and sustainable farms.
          </p>
          <p className="mt-10">
            This not only ensures a high-quality product for our consumers but also champions local farmers and eco-friendly 
            farming practices.
          </p>
        </div>
        <div className="bg-blue-100">
          <Image src={"/Sustain_Img1.png"} alt="Geese" width={800} height={1000}/>
        </div>
        <div className="bg-yellow-100">
          hello!
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
