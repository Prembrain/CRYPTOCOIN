import React from 'react'
import Section from '../section'
import { solution } from '../../constants'
import { heroHome } from '../../assets'

export default function Solution(){
    return(
        <Section

            customPaddings
        >
            <div id='Solution'>
                <div className='container pt-10 pb-8 xl:pt-28 xl:pb-[6.5rem] lg:pt-24 lg:pb-[4.5rem] md:pt-16 md:pb-12'>
                    {solution.map((item) => (
                        <div 
                            className='grid grid-cols-2 mx-4 gap-x-4 md:grid-cols-4 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 lg:grid-cols-12'
                            key={item.id}    
                        >
                            <h3 className='h3 col-span-full md:col-span-2  lg:col-span-full p-4'>{item.title}</h3>
                            <p className='body-3 row-start-2 lg:col-start-7 lg:col-span-6  md:col-start-3 md:col-span-2 col-span-full p-4'>{item.detail}</p>
                        </div>
                    )
                    )}
                </div>
                <div className='w-full h-auto xl:flex justify-center inline-block align-top relative overflow-hidden'>
                    <div className='max-w-[2560px] block'>
                        <img
                            src={heroHome} 
                            alt="heroHome" />
                    </div>
                </div>
            </div>
        </Section>
    )
}