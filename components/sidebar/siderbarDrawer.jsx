"use client";
import React, { useState, useEffect } from 'react';
import {motion, useAnimationControls} from "framer-motion"
import SidebarContent from './sidebarContent';
import { product } from '../../utils/product';

const containerVariants ={
    close:{
        width:"3rem",
        height:"21rem",
        top:"19rem",
        transition:{
            type:"spring",
            damping:15,
        }
    },
    open:{
        width: "16rem",
        height: "40rem",
        top: "10rem",
        transition:{
            type:"spring",
            damping:15,
        }
    }
}

const SiderbarDrawer = () => {
    const[isOpen, setIsOpen] = useState(false)

    const containerControls = useAnimationControls()

    useEffect(()=>{
        if(isOpen){
            containerControls.start("open")
        }else{
            containerControls.start("close")
        }
    })
    
    const handleMouseEnter = () =>{
        setIsOpen(true)
    }
    const handleMouseLeave = () =>{
        setIsOpen(false)
    }

    return (
        <motion.nav 
            variants={containerVariants}
            animate={containerControls}
            initial="close"
            className="bg-neutral-900 flex flex-col z-10 gap-20 fixed h-fit shadow shadow-neutral-600 w-10 left-8 rounded-md max-[767px]:hidden"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className={`w-full flex flex-col justify-center ${isOpen ? 'hidden' : ''}`}>
                <ul className="self-center cursor-pointer">
                    <li className='mt-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                        </svg>
                    </li>
                    <li className='mt-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                        </svg>
                    </li>
                    <li className='mt-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                        </svg>
                    </li>
                    <li className='mt-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                        </svg>
                    </li>
                    <li className='mt-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                        </svg>
                    </li>
                    <li className='mt-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                        </svg>
                    </li>
                    <li className='mt-6 mb-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                        </svg>
                    </li>
                </ul>

            </div>

            <div className={`w-full flex flex-col justify-center overflow-hidden transition-all duration-500 p-3 ${isOpen ? 'opacity-100 visible h-auto' : 'hidden'}`}>
                <div className="overflow-scroll max-h-fit">
                    <div className="px-3">
                        <h1 className="text-2xl font-bold text-neutral-500">Category</h1>
                        <div className="border-b-2 w-20 mb-2 mt-2 border-neutral-500"></div>
                    </div>
                    <SidebarContent 
                        categoryData={product}
                    />
                    {/* <SidebarContent 
                        title="Grocery"
                        isMultiLevel={true} 
                        subItems={[
                            {title:"Coffee Snack",link:"#"},
                            {title:"Robusta",link:"#"},
                            {title:"Arabica",link:"#"}
                        ]}
                        >
                    </SidebarContent>
                    <SidebarContent 
                        title="Coffee Machine"
                        isMultiLevel={true} 
                        subItems={[
                            {title:"Automatic Coffee Machine",link:"#"},
                            {title:"Commercial Expresso",link:"#"}
                        ]}
                        >
                    </SidebarContent>
                    <SidebarContent 
                        title="Brewer"
                        isMultiLevel={true} 
                        subItems={[
                            {title:"Coffee Maker",link:"#"},
                            {title:"Cold Brewer & Ice Dripper",link:"#"}
                        ]}
                        >
                    </SidebarContent>
                    <SidebarContent 
                        title="Grinder"
                        isMultiLevel={true} 
                        subItems={[
                            {title:"Commercial Grinder",link:"#"},
                            {title:"Home Grinder",link:"#"},
                            {title:"Manual Grinder",link:"#"}
                        ]}
                        >
                    </SidebarContent>
                    <SidebarContent 
                        title="Barista Tool"
                        isMultiLevel={true} 
                        subItems={[
                            {title:"Barista Apparel",link:"#"},
                            {title:"Barista Gear & Gadget",link:"#"}
                        ]}
                        >
                    </SidebarContent>
                    <SidebarContent 
                        title="Coffeeware"
                        isMultiLevel={true} 
                        subItems={[
                            {title:"Commercial Grinder",link:"#"},
                            {title:"Home Grinder",link:"#"},
                            {title:"Manual Grinder",link:"#"}
                        ]}
                        >
                    </SidebarContent>
                    <SidebarContent 
                        title="Part & Upgrade"
                        isMultiLevel={true} 
                        subItems={[
                            {title:"Body & Electrical Part",link:"#"},
                            {title:"Control & Display System",link:"#"}
                        ]}
                        >
                    </SidebarContent> */}
                </div>
            </div>
        </motion.nav>
    )
}
export default SiderbarDrawer