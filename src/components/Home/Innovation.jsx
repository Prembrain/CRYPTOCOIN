import React from 'react'
import Section from '../section'
import Button from '../Button'
import { innovation } from '../../constants'

export default function Innovation(){
    return(
        <Section
            className='container py-10 xl:py-36 lg:py-[6.5rem] md:py-16 '
            customPaddings
        >
            <div className='xl:max-w-[72rem] lg:mx-auto lg:max-w-[60rem] grid grid-cols-2 gap-x-4 md:grid-cols-4 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 lg:grid-cols-12'>
                <h3
                    className='h3 p-4 pl-8 lg:p-4 xl:mb-[7.5rem] md:mb-20 mb-16 lg:col-span-7 col-span-full'
                >   Innovation and transaction
                    transparency for financial institutions,
                    enterprises, governments and more
                </h3>
            </div>
            <article className='xl:max-w-[72rem] lg:mx-auto lg:max-w-[60rem] grid grid-cols-2 mx-4 gap-x-4 md:grid-cols-4 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 lg:grid-cols-12 '>
                {innovation.map((item) => (
                    <div
                        className='flex flex-col justify-between p-4 mb-10 md:mb-5 lg:mb-0 lg:col-span-4 md:col-span-2 col-span-full' 
                        key={item.id}
                    >
                        <img 
                            className='xl:w-[121px] xl:h-[121px] w-[95px] h-[95px] xl:mb-6 md:mb-4 mb-2'
                            src={item.img} 
                            alt={item.id} 
                            width={96}
                            height={96}
                        />
                        <h5 className='h5 my-4'>{item.title}</h5>
                        <p className ='body-5 text-color-7'>
                            {item.detail}
                        </p>
                        <div className='mt-8'>
                            <Button
                                href="#"
                                white
                            >
                                {item.button}
                            </Button>
                        </div>
                    </div>
                )
                )}
            </article>
        </Section>
    )
}