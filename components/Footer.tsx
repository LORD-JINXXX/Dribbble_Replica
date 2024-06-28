import React from 'react';
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='w-[100vw] h-[100px] flex lg:flex-row md:flex-col sm:flex-col flex-col m-0 p-0 mt-20'>
            <div className='lg:w-1/2 md:w-full flex lg:justify-start md:justify-center items-center px-10 md:py-2 sm:py-2 py-2'>
                <span className='flex justify-center items-center font-mona font-light text-sm text-slate-800 mx-2'><FaRegCopyright className='mr-1 w-[10px] h-[10px]'/>2024 Dribbble</span>
                <span className='flex justify-center items-center font-mona font-light text-sm text-slate-800 mx-2'>Terms</span>
                <span className='flex justify-center items-center font-mona font-light text-sm text-slate-800 mx-2'>Privacy</span>
                <span className='flex justify-center items-center font-mona font-light text-sm text-slate-800 mx-2'>Cockies</span>
            </div>
            <div className='lg:w-1/2 md:w-full flex lg:justify-end md:justify-center items-center px-10 md:py-2 sm:py-2 py-2'>
                <span className='flex justify-center items-center font-mona font-light text-sm text-slate-800 mx-2'>Jobs</span>
                <span className='flex justify-center items-center font-mona font-light text-sm text-slate-800 mx-2'>Designers</span>
                <span className='flex justify-center items-center font-mona font-light text-sm text-slate-800 mx-2'>Freelancers</span>
                <span className='flex justify-center items-center font-mona font-light text-sm text-slate-800 mx-2'>Tags</span>
                <span className='flex justify-center items-center font-mona font-light text-sm text-slate-800 mx-2'>Places</span>
                <span className='flex justify-center items-center font-mona font-light text-sm text-slate-800 mx-2'>Resources</span>
            </div>
        </div>
    )
}

export default Footer;