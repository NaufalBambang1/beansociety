"use client";
import React,{useState, useEffect, useRef} from "react";
import { motion,useAnimation,useInView } from "framer-motion"
import HomeCategory from "../components/homeCategory/homeCategory";
import PopularBeans from "../components/popularBeans/popularBeans";
import ProductSlider from "../components/productSlider/productSlider";
import {product} from "../utils/product"

const Home = () => {
  const variants ={
    hiddenX:{
      opacity:0, x: -30
      
    },
    visibleX:{
      opacity:1, x: 0,
      transition:{
        type:"spring",
        damping:15,
      },
      duration: 0.2
    },
    hiddenY:{
      opacity:0, y: -30
      
    },
    visibleY:{
      opacity:1, y: 0,
      transition:{
        type:"spring",
        damping:15,
      },
      duration: 0.2
    }
  }

  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})

  const XControls = useAnimation()
  const YControls = useAnimation()

  useEffect(()=>{
    if(isInView){
      XControls.start("visibleX")
      YControls.start("visibleY")
    }
  },[isInView])

  const groceryData = product.find(category => category.category ==="Grocery")
  const coffeeMachineData = product.findLast(category => category.category === "Coffee Machine")

  return (
    <div ref={ref} >
      {/* Home */}
      <div  className="relative w-full bg-main-image h-[500px] px-4 sm:h-[800px] flex items-center justify-center">
        <motion.div
          className="sm:container sm:mx-auto"
          variants={variants}
          initial="hiddenX"
          animate={XControls}
          >
          <div className="flex justify-center top-[-20px]">
            <div className="flex flex-col">
              <h1 className="font-semibold text-2xl mb-2">Enjoy a cup of wonder,</h1>
              <h1 className="font-extrabold text-6xl mb-2">Welcome to Bean Society!</h1>
              <p className="font-semibold text-2xl">Discover the flavorful journey that awaits you with each sip</p>
              <div className="mt-5">
                <button className="bg-[#dfac04] py-3 px-5 rounded-3xl hover:bg-gray-700">
                  <span className="font-semibold ">Explore Our Products</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* About */}
      <div className="pt-[110px] pb-[100px]">
          <div className="md:container md:mx-auto">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2"
                variants={variants}
                initial="hiddenY"
                animate={YControls}
              >
                <div className="w-full flex justify-center items-center px-3">
                  <img src="images/caffelatte.png" alt="caffelatte" className="w-[400px] h-[400px]"/>
                </div>

                <div className="flex flex-col justify-center px-3">
                  <h1 className="font-extrabold text-4xl mb-5">About Us – Bean Society</h1>
                  <div className="border-b-8 w-20 mb-5"></div>
                  <p className="text-lg mb-5">
                  At Bean Society, we believe that every cup of coffee tells a story. Our journey began with a simple passion for crafting exceptional coffee, 
                  sourcing the finest beans from around the world, and perfecting every brew with care and precision.
                  </p>
                  <p className="text-lg mb-5">
                  We take pride in delivering more than just coffee—we offer an experience. From rich, bold espresso to smooth, flavorful blends, every product is crafted to satisfy both the casual drinker and the true coffee aficionado. 
                  Our commitment is not only to the quality of the coffee but also to the community of coffee lovers who seek out something special in every cup.
                  </p>
                  <h3 className="font-semibold text-xl">Taste the passion. Experience Bean Society.</h3>
                  <a href="/about-us"  className="bg-[#dfac04] py-2 px-5 mt-5 rounded-3xl hover:bg-gray-700 w-fit">
                    <span className="font-semibold ">More About Us</span>
                  </a>
                </div>
              </motion.div>
          </div>
      </div>
      
      {/* Category */}
      <div className="pt-[100px] pb-[50px]">
        <div className="md:container md:mx-auto">
          <HomeCategory />
        </div>
      </div>

      {/* Popular Beans */}
      <div className="pt-[50px] pb-[50px]">
        <div className="md:container md:mx-auto">
          <PopularBeans
            popularData={groceryData}
          />
        </div>
      </div>

      {/* Coffee Slider */}
      <div className="pt-[50px]">
        <div className="md:container md:mx-auto">
          <ProductSlider 
            coffeeData={groceryData}
          />
        </div>
      </div>
      <div className=" pb-[50px]">
        <div className="md:container md:mx-auto">
          <ProductSlider 
            coffeeData={coffeeMachineData}
            />
        </div>
      </div>
    </div>
  )
}

export default Home