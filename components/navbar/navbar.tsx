"use client"
import React, {useState,useEffect,useRef } from 'react'
import {useAnimate} from "framer-motion"

function useMenuAnimation(isOpen: boolean){
    const[scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            "ul",
            {
              clipPath: isOpen
                ? "inset(0% 0% 0% 0% round 10px)"
                : "inset(0% 0% 100% 0% round 10px)",
            },
            {
              type: "spring",
              bounce: 0,
              duration: 0.5,
            }
        );
    },[isOpen])

    return scope;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);
    const ulRef = useRef<HTMLUListElement>(null);
    
    const handleClickOutside = (event: MouseEvent) => {
        if (ulRef.current && !ulRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
  return (
    <div className="bg-neutral-900 w-full py-5 px-3 flex fixed top-0 z-50" >
        <div className="md:container md:mx-auto max-[767px]:w-full">
            <div className="flex flex-row">            
                <div className="px-3cursor-pointer">
                    <img src="/images/coffeeLogo.png" alt="Coffee Logo" className="h-11 w-full" />
                </div>
                <div className="px-3 flex flex-row justify-between w-full" >
                    <div className="content-center pl-5">
                        <ul className="flex flex-row text-white items-center gap-10 text-lg max-[767px]:hidden">
                            <li>
                            <a href="/" className="hover:underline hover:underline-offset-8">Home</a>
                            </li>
                            <li>
                            <a href="/about-us" className="hover:underline hover:underline-offset-8">About Us</a>
                            </li>
                            <li>
                            <a href="/contact-us" className="hover:underline hover:underline-offset-8">Contact Us</a>
                            </li>
                            <li>
                            <a href="/services" className="hover:underline hover:underline-offset-8">Services</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="flex gap-1" ref={scope}>
                        <div 
                            className="content-center cursor-pointer hover:bg-neutral-700 p-3 hover:p-3 hover:rounded-full"
                            // onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                strokeWidth={1.5} stroke="currentColor" 
                                className="size-6 text-white "
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>

                        <ul
                            style={{
                            pointerEvents: isOpen ? "auto" : "none",
                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                            }}
                            className='absolute top-[5.7rem] right-[1rem] bg-neutral-900 w-[30rem] p-4 min-h-[40rem]'
                        >
                            <li>Item 1 </li>
                            <li>Item 2 </li>
                            <li>Item 3 </li>
                            <li>Item 4 </li>
                            <li>Item 5 </li>
                        </ul>

                        <div className="content-center cursor-pointer hover:bg-neutral-700 p-3 hover:p-3 hover:rounded-full">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="size-6 text-white "
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default Navbar