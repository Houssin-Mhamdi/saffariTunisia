import React from 'react'
import {services} from '../constent/services.js'
export default function Services() {
  return (
  <section className='container mx-auto px-8 py-2'>
      <div className='grid grid-rows-2 grid-flow-col gap-4 md:grid-rows-1 '>
        {services?.map((service)=>{
            return(
                <div key={service.id} className='flex items-center bg-slate-100 text-center p-1 md:p-3 rounded-3xl border-[1px] border-black hover:shadow-2xl'>
                    <img src={service.image} alt={service.name} className='w-5 h-5 ml-2 md:ml-16'/>
                    <p className='text-center ml-2 md:text-xl'>{service.name}</p>
                </div>
            )
        })}
    </div>
  </section>
  )
}
