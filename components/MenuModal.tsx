import React from 'react';


const MenuModal = () => {
    return (
        <div className='w-[100vw] h-[auto] absolute top-24 left-0 bg-white border-t-2 flex flex-col justify-start items-start z-20 overflow-y-suto'>
            <div className='w-full flex justify-start items-start flex-col px-8 py-3 mt-4'>
                <div className='flex justify-start items-start font-mona font-medium text-sm'>Find designers</div>
                <div className='flex justify-start items-start flex-row'>
                    <div className='w-[.5px] h-[100px] bg-slate-200 ml-5 mt-3'></div>
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
            </div>

            <div className='w-full flex justify-start items-start flex-col px-8 py-3 mt-4'>
                <div className='flex justify-start items-start font-mona font-medium text-sm'>Inspiration</div>
            </div>

            <div className='w-full flex justify-start items-start flex-col px-8 py-3 mt-4'>
                <div className='flex justify-start items-start font-mona font-medium text-sm'>Find designers</div>
                <div className='flex justify-start items-start flex-row'>
                    <div className='w-[.5px] h-[150px] bg-slate-200 ml-5 mt-3'></div>
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
            </div>

            <div className='w-full flex justify-start items-start flex-col px-8 py-3 mt-4'>
                <div className='flex justify-start items-start font-mona font-medium text-sm'>Job</div>
            </div>

            <div className='w-full flex justify-start items-start flex-col px-8 py-3 mt-4'>
                <div className='flex justify-start items-start font-mona font-medium text-sm'>Go Pro</div>
            </div>

            <div className='w-full flex justify-start items-start flex-col px-8 py-3 mt-4 mb-10'>
                <div className='flex justify-start items-start font-mona font-medium text-sm'>Log in</div>
            </div>
        </div>
    )
}

export default MenuModal;