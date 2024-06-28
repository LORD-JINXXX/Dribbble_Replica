"use client"
import React from 'react';
import { HiMiniChevronDown } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import MenuModal from './MenuModal';
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const [activeFD, setActiveFD] = useState(false);
  const [activeCourses, setActiveCourses] = useState(false);

  const toggleModal = () => {
    setIsActive(!isActive);

    if (!isActive) {
      document.body.style.overflow = 'hidden'; // Disable body scroll
    } else {
      document.body.style.overflow = 'auto'; // Enable body scroll
    }
  };

  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className='w-full h-[100px] flex flex-row justify-start items-center bg-white'>
      <div className='xl:w-[auto] xl:order-1 lg:w-[600px] lg:order-2 md:order-2 md:hidden sm:hidden hidden h-full xl:flex xl:flex-row xl:justify-start xl:items-center lg:flex lg:flex-row lg:justify-start lg:items-center mx-8'>
        <li onMouseOver={() => setActiveFD(true)} onMouseOut={() => setActiveFD(false)} className='w-[150px] px-2 mx-2 flex justify-center items-center list-none font-mona font-semibold text-sm cursor-pointer'>Find designers<HiMiniChevronDown className='mx-1' />
        </li>
        {
          activeFD && <li className='list-none'>
            <div className='flex justify-start items-start flex-row w-[250px] h-[auto] bg-white rounded-lg absolute top-20 left-10 border-2 shadow-lg px-5 py-5 z-50'>
              <div className='w-[90%] h-[100px] flex flex-col mx-2 mt-3'>
                <div className='w-[100%] h-[50px] flex justify-start flex-col mb-2'>
                  <span className='font-mona font-medium text-sm'>Designer search</span>
                  <span className='font-mona font-light text-xs'>Quickly find your next designer</span>
                </div>

                <div className='w-[100%] h-[50px] flex justify-end flex-col mt-2'>
                  <span className='font-mona font-medium text-sm'>Post a job</span>
                  <span className='font-mona font-light text-xs'>The #1 job board for design talent</span>
                </div>
              </div>
            </div>
          </li>
        }

        <li className='w-[100px] px-2 mx-2 flex justify-center items-center list-none font-mona font-semibold  text-sm cursor-pointer'>Inspiration</li>
        <li onMouseOver={() => setActiveCourses(true)} onMouseOut={() => setActiveCourses(false)} className='w-[100px] px-2 mx-2 flex justify-center items-center list-none font-mona font-semibold text-sm cursor-pointer'>Courses <HiMiniChevronDown className='mx-1' /></li>
        {
          activeCourses && <li className='list-none'>
          <div className='flex justify-start items-start flex-row w-[350px] h-[auto] bg-white rounded-lg absolute top-20 left-72 border-2 shadow-lg px-5 py-5 z-50'>
            <div className='w-[90%] h-[150px] flex flex-col mx-2 mt-3'>
              <div className='w-[100%] h-[50px] flex justify-start flex-col mb-2'>
                <span className='font-mona font-medium text-sm'>UX Diploma</span>
                <span className='font-mona font-light text-xs'>Learn UX design from scratch in 6 months</span>
              </div>

              <div className='w-[100%] h-[50px] flex justify-end flex-col mt-2'>
                <span className='font-mona font-medium text-sm'>UI Certificate</span>
                <span className='font-mona font-light text-xs'>12-week UI skills building for designers</span>
              </div>

              <div className='w-[100%] h-[50px] flex justify-end flex-col mt-2'>
                <span className='font-mona font-medium text-sm'>Live interractive workshops</span>
                <span className='font-mona font-light text-xs'>with design professionals</span>
              </div>
            </div>
          </div>
        </li>
        }
        
        <li className='w-[100px] px-2 mx-2 flex justify-center items-center list-none font-mona font-semibold  text-sm cursor-pointer'>Job</li>
        <li className='w-[100px] px-2 mx-2 flex justify-center items-center list-none font-mona font-semibold text-sm cursor-pointer'>Go Pro</li>
      </div>

      <div className='xl:w-[200px] xl:order-2 lg:w-[150px] lg:order-1 md:order-1 md:w-[50%] md:justify-start md:items-center sm:order-1 sm:w-[50%] sm:justify-start sm:items-center w-[50%] md:px-10 sm:px-2 px-2 flex justify-start items-center font-ondyne font-extrabold md:text-3xl sm:text-2xl text-xl hover:text-gray-700 cursor-pointer'>
        <div className='xl:hidden lg:hidden md:flex md:mx-2 md:justify-center md:items-center'>
          {
            isActive ? <RxCross1 className='w-[25px] h-[25px] mr-2' onClick={toggleModal} /> :
              <IoMdMenu className='w-[25px] h-[25px] mr-2' onClick={toggleModal} />
          }

        </div>
        Dribbble
        {
          isActive && <MenuModal />
        }
      </div>


      <div className='xl:w-[600px] lg:w-[600px] md:w-[50%] sm:w-[50%] w-[50%] md:px-5 sm:px-2 px-2 flex flex-row justify-end items-center order-3'>
        <span id='search_span' className={`xl:w-[250px] lg:w-[250px] md:w-[30px] sm:w-[25px] w-[25px] md:p-0 sm:p-0 p-0 md:bg-white sm:bg-white bg-white flex justify-start items-center lg:px-5 lg:py-3 rounded-full ${!isFocused ? 'lg:bg-slate-100' : 'lg:bg-white'} ${isFocused ? 'lg:border-2' : 'lg:border-0'} ${isFocused ? 'lg:border-pink-200' : 'lg:bottom-0'} `}>
          <CiSearch className='w-[25px] h-[25px] pr-1' />
          <input type="search" name="search" id="search" className='bg-slate-100 outline-none font-mona font-normal focus:bg-white md:hidden sm:hidden hidden'
            placeholder='search...' onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={() => setIsFocused(true)} />
        </span>
        <button className='mx-5 font-mona font-medium text-sm xl:w-[50px] lg:w-[50px] md:w-[50px] sm:hidden hidden'>Log in</button>
        <button className='mx-3 md:w-[100px] sm:w-[100px] w-[100px] md:px-6 sm:px-4 sm:py-3 px-4 py-3  md:py-3 rounded-full bg-black text-white font-mona font-medium hover:bg-slate-700 md:text-sm sm:text-xs text-xs'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar;