import React from 'react'
import Section from './section'
import { Learn } from '../constants'

export default function learn(){
    return(
        <Section>
            <div className='flex flex-col justify-center items-center mx-auto max-w-[1280px]'>
                <div className='block text-center px-4'>
                    <h1 className='h2'>
                        Learn About Cryptocurrency
                    </h1>
                    <p className='mt-4 sm:mt-6 lg:mt-8 text-[0.875rem] lg:body-1'>Learn all about Cryptocurrency to start investing</p>
                </div>
                <div className='grid grid-rows-7 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-12 lg:grid-rows-2 gap-y-10 gap-x-6 mt-[3rem] sm:mt-[6rem] px-6 md:px-8 text-color-14'>
                    {Learn.map(item => {
                            if(item.id === "0"){
                                return(
                                    <a 
                                        href='https://www.cnbc.com/cryptoworld/'
                                        target="_blank"
                                        key={item.id}
                                        className='relative col-span-full md:col-span-2 lg:col-span-6 bg-cover bg-learn1 bg-no-repeat noreapte rounded-lg hover:scale-[1.025]'
                                    >
                                        <div className='h-full content-end text-color-13 p-4'>
                                            <h3 className='h3 font-semibold'>{item.title}</h3>
                                            <p className='inline-block text-[0.75rem] font-semibold uppercase px-2.5 py-1 bg-[#511281] bg-opacity-40 rounded-lg'>{item.tag}</p>
                                        </div>
                                    </a>
                                )
                            }else if (item.id >= "1" && item.id <= "2") {
                                return(
                                    <a 
                                        href='https://www.cnbc.com/cryptoworld/'
                                        target="_blank"
                                        key={item.id}
                                        className='col-span-full md:col-span-1 lg:col-span-3 bg-color-13 rounded-lg hover:scale-[1.025]'
                                    >
                                        <img className='rounded-t-lg  w-full h-[195px] object-cover' src={item.img} alt={`learn${item.id}`} width={296} height={195}/>
                                        <div className='p-4'>
                                            <p className={`inline-block text-[0.75rem] font-semibold uppercase px-2.5 py-1 ${item.tag === "crypto basic" ? "bg-[#0FAE96] text-[#0FAE96]" : "bg-[#511281] text-[#511281]"} bg-opacity-15 rounded-lg`}>{item.tag}</p>
                                            <h3 className='text-base font-semibold mt-2'>{item.title}</h3>
                                            <p className='text-[0.75rem] text-[#808080] mt-2'>{item.info}</p>
                                        </div>
                                    </a>
                                )
                            }else{
                                return(
                                    <a 
                                        href='https://www.cnbc.com/cryptoworld/'
                                        target="_blank"
                                        key={item.id}
                                        className='col-span-full md:col-span-1 lg:row-start-2 lg:col-span-3  bg-color-13 rounded-lg hover:scale-[1.025]'
                                    >
                                        <img className='rounded-t-lg w-full h-[195px] object-cover' src={item.img} alt={`learn${item.id}`} width={296} height={195}/>
                                        <div className='p-4'>
                                            <p className={`inline-block text-[0.75rem] font-semibold uppercase px-2.5 py-1 ${item.tag === "crypto basic" ? "bg-[#0FAE96] text-[#0FAE96]" : "bg-[#511281] text-[#511281]"} bg-opacity-15 rounded-lg`}>{item.tag}</p>
                                            <h3 className='text-base font-semibold mt-2'>{item.title}</h3>
                                            <p className='text-[0.75rem] text-[#808080] mt-2'>{item.info}</p>
                                        </div>
                                    </a>
                                )
                            }
                        }
                    )}
                </div>
            </div>
            <div className='h-[1px] bg-[#808080] mt-[6rem] lg:mt-[10rem] mx-10 xl:mx-auto xl:max-w-[1280px]' />
        </Section>
    )
}