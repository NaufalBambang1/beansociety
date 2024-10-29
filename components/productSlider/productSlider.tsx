import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CoffeeItem{
    id: number,
    title: string,
    image: any,
    price: string,
}

interface SubCategory{
  subCategory: string
  product: CoffeeItem[]
}
interface Category{
  category: string
  subCategories: SubCategory[]
}

interface Props{
    coffeeData?: Category
}

const ProductSlider = ({coffeeData}:Props) => {
  if (!coffeeData) {
    return <p>Data not available</p>;
  }

    const settings={
        dots: false,
        infinite: true,
        arrows: true,
        autoplay:false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
    }
  return (
    <div className="px-3">
      {coffeeData.subCategories.map((subCategory, index) => (
        <div key={index} className='mb-6'>
          <div className="mb-6">
              <div>
                  <h1 className="font-extrabold text-4xl">{subCategory.subCategory}</h1>
                  <div className="border-b-8 w-20 my-3"></div>
              </div>
          </div>
          <Slider {...settings} className="gap-3">
            {subCategory.product.map((product) => (
                  <a href={`/product/${product.id}`} key={product.id} className='p-2 border border-white rounded-lg hover:bg-neutral-700 cursor-pointer ' >
                      <div>
                          <img src={product.image.src}  alt={product.title} />
                      </div>
                      <div className="py-2">
                          <span className='line-clamp-2'>{product.title}</span>
                      </div>
                      <div className='py-2'>
                          <span className="text-amber-300">Rp.{product.price}</span>
                      </div>
                  </a>
              ))}
          </Slider>
        </div>
         ))}
    </div>
  )
}

export default ProductSlider