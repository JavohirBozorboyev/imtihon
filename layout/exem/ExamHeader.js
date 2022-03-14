import Image from 'next/image'
import ExamBanner from '../../img/banner.png'

function ExamHeader() {
  return (
    <div className="container py-12 flex items-center flex-col md:flex-row">
      <div className="w-full md:w-6/12">
        <h1 className="text-green-400  text-4xl lg:text-6xl capitalize font-serif">
          O'z bilimingizni sinab ko'ring
        </h1>
        <p className=" mt-4 text-base md:text-xl text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          delectus, beatae aliquid exercitationem magni maxime repellendus
          reiciendis officia ipsa.
        </p>
        <div className="mt-12">
          
        </div>
      </div>
      <div className="w-full relative md:w-6/12 sm:p-4 ">
        <Image src={ExamBanner}  objectFit="cover" />
      </div>
    </div>
  );
}

export default ExamHeader