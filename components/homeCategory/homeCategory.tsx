"use client";

import React from 'react'
import{product} from "../../utils/product"

const HomeCategory = () => {
  return (
    <div className='px-3'>
        <div className="mb-6">
            <div>
                <h1 className="font-extrabold text-4xl">Our Categorys</h1>
                <div className="border-b-8 w-20 my-3"></div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-8">
            {product.map((category, index) =>(
                <a href={`/category/${category.category}`} key={index} className='bg-neutral-900 rounded-lg flex flex-col justify-between p-3 py-5 hover:bg-neutral-700 cursor-pointer'>
                    <div className="">
                        <img 
                            src={category.image.src} 
                            alt={category.category} 
                            className="object-contain aspect-[3/2] min-h-[80px] min-w-[80px] w-full height-full"
                            />
                    </div>
                    <div className="flex justify-center ">
                        <span className='text-lg font-semibold'>{category.category}</span>
                    </div>
                </a>
            ))}
        
        </div>
    </div>
  )
}

export default HomeCategory