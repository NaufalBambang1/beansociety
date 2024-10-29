"use client"

import React,{ useState, useEffect} from 'react'
import { BiSolidCategoryAlt } from "react-icons/bi";
import { product as productData } from '../../../utils/product'

interface Product{
    id: number,
    title: string,
    image: any,
    price: string
}

interface SubCategory{
    subCategory: string
    product: Product[]
}

interface Category{
    category: string
    subCategories: SubCategory[]
}

const Category = ({params}:{params:{id:string}}) => {
    const decodedId = decodeURIComponent(params.id)

    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
    const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null)

    useEffect(() => {
        const foundCategory = productData.find((category) =>
            category.subCategories.some((subCategory) => subCategory.subCategory === decodedId)
        )
        if (foundCategory) {
            setSelectedCategory(foundCategory)
            const foundSubCategory = foundCategory.subCategories.find((subCategory) => subCategory.subCategory === decodedId)
            setSelectedSubCategory(foundSubCategory || null)
        } else {
            setSelectedCategory(null)
            setSelectedSubCategory(null)
        }
    }, [decodedId])

  return (
    <div className='pt-2'>
        <div className="container mx-auto ">
            <div className="flex pt-[3rem] gap-5 max-[767px]:hidden">
                <div className='w-[20%] '>
                    <div className='flex items-center gap-3 pb-3'>
                        <BiSolidCategoryAlt className='text-2xl'/>
                        <h1 className='text-2xl font-bold'>Category</h1>
                    </div>
                    <div className='border rounded-lg p-3'>
                        {selectedCategory && (
                            <div>
                                <div className='bg-neutral-700 rounded-lg'>
                                <h2 className="font-bold mt-3 p-3">{selectedCategory.category}</h2>
                                </div>
                                {selectedCategory.subCategories.map((subCategory) => (
                                    <ul>
                                        <li className=' px-3 py-2'>
                                            <a
                                                key={subCategory.subCategory}
                                                href={`/category/${subCategory.subCategory}`}
                                                className={`cursor-pointer ${subCategory.subCategory === decodedId ? ' font-bold' : ''} hover:underline`}
                                            >
                                                {subCategory.subCategory}
                                            </a>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className='w-[80%] pt-10'>
                    <div className='grid grid-cols-6 gap-3'>
                    {selectedSubCategory ? (
                        selectedSubCategory.product.map((product) => (
                            <div key={product.id} className="mb-4 border p-3 rounded-lg">
                                <img src={product.image.src} alt={product.title} className="w-full h-auto rounded-lg mb-2" />
                                <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
                                <p className="text-amber-300">{product.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No products found for this category.</p>
                    )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category