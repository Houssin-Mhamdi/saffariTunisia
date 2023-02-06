import React from 'react'

export default function Content() {
    return (
        <div>
            <img src="dubaiii.jpg" alt="" className='md:w-full' />
            <div className='container mx-auto px-4'>
            <input type="text" placeholder='what are you looking for' className='absolute top-32 w-[22rem] md:w-[76rem] md:top-28  p-3 rounded-3xl' />
                <button className='absolute top-[132px] right-5 md:top-[117px] md:right-32 bg-blue-600 p-2 rounded-full text-white'>Search</button>
                <div className='absolute top-[20rem]'>
                    <h2 className='font-bold text-6xl text-white'>Tunis</h2>
                    <br />
                    <h1 className='font-bold text-7xl text-white'>Safarie</h1>
                </div>
            </div>
        </div>
    )
}
