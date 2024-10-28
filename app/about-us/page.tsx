import React from 'react'

const AboutUs = () => {
  return (
    <div className="p-2 pt-[4rem]">
      <div className="md:container md:mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="w-full flex justify-center items-center px-3">
            <img src="images/caffelatte.png" alt="caffelatte" className="w-[400px] h-[400px]"/>
          </div>

          <div className="flex flex-col justify-center px-3">
            <h1 className="font-extrabold text-4xl mb-5">ABOUT BEAN SOCIETY</h1>
            <div className="border-b-8 w-20 mb-5"></div>
            <p className="text-lg mb-5">
            Bean Society isn’t just a coffee shop; it’s a destination for coffee lovers who crave quality and convenience. Established in 2024,
            we set out to craft a space where people can enjoy premium coffee, delicious pastries, and the perfect start to their day.
            Whether you're rushing between meetings or looking to take a breather, Bean Society is here to offer that ideal cup of coffee you can count on.
            </p>
            <p className="text-lg mb-5">
            With a welcoming atmosphere and a passion for all things coffee, we aim to make every visit a memorable experience. 
            Our baristas are not just coffee makers — they’re artisans, dedicated to brewing perfection in every cup.
            </p>
            <h3 className="font-semibold text-xl">Taste the passion. Experience Bean Society.</h3>
          </div>
        </div>

        {/* Timeline */}
        <div className="pt-[4rem]">
          <div className="flex flex-col items-center mb-6">
              <h1 className="font-extrabold text-4xl">Our Timeline</h1>
              <div className="border-b-8 w-20 my-3"></div>
          </div>
          <div className="flex justify-center">
            <ol className="relative border-s border-gray-200">                  
              <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                  <time className="mb-1 text-xl font-semibold leading-none">February 2024 -</time>
                  <h3 className="text-lg font-semibold ">Opening Our Doors</h3>
                  <p className="mb-4 text-base font-normal">
                  Bean Society launches its first store, providing a combination of handcrafted coffee and a welcoming space to relax or work.
                  </p>
              </li>
              <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                  <time className="mb-1 text-xl font-semibold leading-none">October 2024 -</time>
                  <h3 className="text-lg font-semibold ">Best Online Shop Award</h3>
                  <p className="mb-4 text-base font-normal">
                  In our very first year, we earned the prestigious Best Online Shop Award for outstanding service and innovation.
                  </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs