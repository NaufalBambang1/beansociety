import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='bottom-0'>
        <div className="md:container md:mx-auto">
            <div className="flex flex-col justify-center items-center py-[100px]">
                <div>
                    <img src="/images/coffeeLogo.png" alt="Coffee Logo" className="w-72" />
                </div>
                <div className="w-[60rem] pt-6 pb-6 max-[767px]:hidden">
                    <h1 className="text-lg font-semibold text-center ">This is the ideal destination to discover a warm and inviting spot to enjoy your coffee. Explore Bean Society, Brew Haven, and other great shops right here on this site</h1>
                </div>
                <div className="flex gap-5 pt-6">
                    <div className="cursor-pointer">
                    <FaInstagram className="text-2xl"/>
                    </div>
                    <div className="cursor-pointer">
                    <SlSocialFacebook className="text-2xl"/>
                    </div>
                    <div className="cursor-pointer">
                    <AiOutlineYoutube className="text-2xl"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-neutral-900 py-5 flex justify-center">
            <span>© 2024 Bean Society All Rights Reserved</span>
        </div>
    </div>
  )
}

export default Footer