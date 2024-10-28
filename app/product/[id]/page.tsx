"use client"

import React from 'react'
import { product as productData } from '../../../utils/product'
import Image from 'next/image';
import ProductSlider from "../../../components/productSlider/productSlider";

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
const ProductDetail = ({params}:{params:{id:string}}) => {
  const {id} = params

  let masterProduct: Product | undefined
  let CategoryType: string | undefined
  let relatedProducts: Category | undefined

  productData.forEach((category: Category)=>{
    category.subCategories.forEach((subCategory: SubCategory)=>{
      const product = subCategory.product.find((product)=>product.id.toString() === id)
      if (product){
        masterProduct = product
        CategoryType = category.category
        
        const filteredProducts  = subCategory.product.filter((p)=>p.id !== masterProduct?.id)

        relatedProducts = {
          category: CategoryType || '',
          subCategories: [{ subCategory: subCategory.subCategory, product: filteredProducts }],
        };
      }
    })
  })
  if (!masterProduct) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <div className='pt-2'>
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 pt-[3rem]">
          <div>
            <Image src={masterProduct.image} alt={masterProduct.title} width={500} height={500}/>
          </div>
          <div>
            <div className="mb-2">
              <h1 className="font-bold text-2xl line-clamp-2">{masterProduct.title}</h1>
            </div>
            <div className="mb-2">
              <h1 className="font-bold text-2xl">Rp.{masterProduct.price}</h1>
            </div>
            <div>
                <span>Category: {CategoryType}</span>
            </div>
            <div>
                <span>Condition: New</span>
            </div>
            <div>
                <span>Minimum Order: 1 Pcs</span>
            </div>
            <div>
                <span>Stock: 1 Pcs</span>
            </div>
            <div className="mt-4">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="grid grid-cols-2 mt-6 gap-5">
                <div className="border rounded-lg p-3 flex justify-center hover:bg-neutral-700 cursor-pointer">
                  <span>Buy Now</span>
                </div>
                <div className="border rounded-lg p-3 flex justify-center hover:bg-neutral-700 cursor-pointer">
                  <span>Add to Cart</span>
                </div>
            </div>
          </div>
        </div>

        <div className='mt-6'>
        <ProductSlider 
            coffeeData={relatedProducts}
            />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail