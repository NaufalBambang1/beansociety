"use client"
import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import {popularBeansData} from "../../utils/popularBeansData"

interface PopularItem{
    id: number,
    title:string,
    image:any,
    price:string
}

interface SubCategory{
    subCategory: string
    product: PopularItem[]
}
interface Category{
    category: string
    subCategories: SubCategory[]
}

interface Props{
    popularData?: Category
}

const PopularBeans = ({popularData}:Props) => {
if (!popularData) {
    return <p>Data not available</p>;
    }
  return (
    <div className="px-3">
        <div className="mb-6">
            <div>
                <h1 className="font-extrabold text-4xl">Popular Products</h1>
                <div className="border-b-8 w-20 my-3"></div>
            </div>
        </div>
        <TabGroup>
            <TabList className="mb-6 ">
                {popularData.subCategories.map(({subCategory})=>(
                    <Tab
                    key={subCategory}
                    className="rounded-full mr-2 py-2 px-6 text-2xl font-semibold text-white bg-neutral-900 focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                    {subCategory}
                </Tab>
                ))}
            </TabList>
            <TabPanels>
                {popularData.subCategories.map(({subCategory, product}) =>(
                    <TabPanel key={subCategory} className="rounded-xl bg-white/5 p-3">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                            {product.slice(0, 4).map((product)=>(
                                <a href={`/product/${product.id}`} key={product.id} className='bg-neutral-900 flex flex-col justify-between p-2 hover:bg-neutral-700 cursor-pointer min-h-[465px] max-[1280px]:min-h-fit '>
                                    <div className="bg-white">
                                        <img 
                                            src={product.image.src} 
                                            alt={product.title} 
                                            className="object-contain  min-h-[80px] min-w-[80px] w-full height-full"
                                            />
                                    </div>
                                    <div className="py-3">
                                        <h1 className="font-semibold mb-3 line-clamp-2">{product.title}</h1>
                                        <span className="text-amber-300">Rp.{product.price}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    </div>
  )
}

export default PopularBeans