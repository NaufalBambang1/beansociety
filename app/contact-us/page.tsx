import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="pt-2">
      <div className="md:container md:mx-auto">
        <div className='mb-[50px] pt-[50px] flex flex-col items-center'>
          <h1 className="font-extrabold text-3xl">Contact Us - Bean Society</h1>
          <div className="border-b-8 w-20 mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="px-3">
              <div className="flex gap-4 mb-6">
                <div className='pt-1'>
                  <FaLocationDot className='text-xl'/>
                </div>
                <div>
                  <span className="text-xl">Jl. Melati No. 23, Kelurahan Kebon Jeruk, Kecamatan Kebon Jeruk, Jakarta Barat, DKI Jakarta, 11530</span>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className='pt-1'>
                  <CiMail className='text-xl'/>
                </div>
                <div>
                  <span className="text-xl">info@example.com / info@example.com</span>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className='pt-1'>
                  <FaPhone className='text-xl'/>
                </div>
                <div>
                  <span className="text-xl">0821-4567-8910</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs