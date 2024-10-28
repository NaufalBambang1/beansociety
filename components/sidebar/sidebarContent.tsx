"use client";
import {useState} from "react"
interface SubCategory {
    subCategory: string;
    product: Product[];
}

interface Product {
    id: number;
    title: string;
    image: string; // Sesuaikan dengan tipe gambar Anda
    price: string;
}

interface Category {
    category: string;
    image: string; // Pastikan gambar kategori didefinisikan
    subCategories: SubCategory[];
}

interface Props {
    categoryData: Category[]; // Pastikan ini adalah array kategori
}

const SidebarContent = ({categoryData}:Props) => {

    const [isOpen, setIsOpen] = useState<number | null>(null)

    const toggleDropdown = (index: number) =>{
        setIsOpen(isOpen === index ? null : index);
    }
  return (
    <div className="mb-3">
        {categoryData.map((category, index) => (
            <div key={index}>
                <button 
                    type="button" 
                    className={`flex justify-between items-center w-full p-3 text-base transition duration-75 rounded-lg group hover:bg-gray-700 text-white`} 
                    onClick={() => toggleDropdown(index)}
                >
                    <span className="text-lg text-nowrap">
                    {category.category}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                {isOpen === index && ( 
                    <ul id="dropdown-content" className="py-2">
                         {category.subCategories.map((subCategory, sindex) => (
                            <li key={sindex}>
                                <a href={`/category/${subCategory.subCategory}`} className="flex items-center w-full p-3 transition duration-75 rounded-lg pl-5 group hover:bg-gray-700 text-white " >
                                    <span className="text-nowrap">
                                        {subCategory.subCategory}
                                    </span>
                                </a>
                            </li>
                         ))}
                    </ul>
                )}
            </div>
          ))}
    </div>
  )
}

export default SidebarContent