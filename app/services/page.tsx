import React from 'react'
import { FaCoffee,FaMusic,FaShoppingBasket,FaTag,FaTruck  } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="pt-2">
      <div className="md:container md:mx-auto">
        <div className="flex flex-col items-center pt-[6rem]">
          <h1 className="font-extrabold text-3xl">Our Coffee Experience Services</h1>
          <div className="border-b-8 w-20 my-3"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-3 pt-6">
          <div className="flex gap-5">
            <div className="p-4 bg-neutral-900 hover:bg-neutral-700 h-fit cursor-pointer">
              <FaCoffee />
            </div>
            <div>
                <div className="mb-2">
                  <h1 className="font-bold text-2xl">Day Fresh</h1>
                </div>
                <div>
                  <span className="text-lg">Start your day with a cup of joy. A smooth blend that brings warmth and energy, 
                    perfect for early risers seeking a gentle yet invigorating taste.</span>
                </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="p-4 bg-neutral-900 hover:bg-neutral-700 h-fit cursor-pointer">
              <FaMusic />
            </div>
            <div>
                <div className="mb-2">
                  <h1 className="font-bold text-2xl">Velvet Aroma</h1>
                </div>
                <div>
                  <span className="text-lg">A rich and fragrant brew that envelopes your senses. With a creamy texture and deep notes,
                     this blend is a perfect companion for a relaxing afternoon.</span>
                </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="p-4 bg-neutral-900 hover:bg-neutral-700 h-fit cursor-pointer">
              <FaShoppingBasket />
            </div>
            <div>
                <div className="mb-2">
                  <h1 className="font-bold text-2xl">Golden Moment</h1>
                </div>
                <div>
                  <span className="text-lg">A harmonious mix of flavors that feels like a golden sunrise. Balanced and smooth, 
                    it's the ideal choice for moments when you want to pause and reflect.</span>
                </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="p-4 bg-neutral-900 hover:bg-neutral-700 h-fit cursor-pointer">
              <FaTag />
            </div>
            <div>
                <div className="mb-2">
                  <h1 className="font-bold text-2xl">Brewed Harmony</h1>
                </div>
                <div>
                  <span className="text-lg">A carefully crafted blend that balances bold and subtle flavors.
                    Its robust character pairs well with both sweet and savory treats, making it a versatile choice for any time of day.</span>
                </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="p-4 bg-neutral-900 hover:bg-neutral-700 h-fit cursor-pointer">
              <FaTruck />
            </div>
            <div>
                <div className="mb-2">
                  <h1 className="font-bold text-2xl">Pure Essence</h1>
                </div>
                <div>
                  <span className="text-lg">Simple yet refined, this blend brings out the pure essence of coffee. 
                    With its clean finish and bright undertones, it offers a refreshing and uncomplicated sip.</span>
                </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="p-4 bg-neutral-900 hover:bg-neutral-700 h-fit cursor-pointer">
              <FaDroplet />
            </div>
            <div>
                <div className="mb-2">
                  <h1 className="font-bold text-2xl">Black power</h1>
                </div>
                <div>
                  <span className="text-lg">For those who crave intensity, this dark roast delivers bold flavors and a rich, 
                    smoky aroma. A powerful brew that awakens the senses and leaves a lasting impression.</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services