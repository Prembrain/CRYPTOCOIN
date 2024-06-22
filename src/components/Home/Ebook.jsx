import React from 'react'
import Section from '../section'
import {Regional} from '../../assets'
import { ebookdetail } from '../../constants'
import { IoIosArrowForward } from "react-icons/io";
import Button from "../Button"

export default function Ebook(){

    const ebook = ebookdetail[0]
    return(
        <Section
            className="xl:py-28 lg:py-16 md:py-9 py-10"
            customPaddings
        >
            <div className='realtvie overflow-hidden rounded-lg xl:max-w-[72rem]  lg:mx-auto lg:max-w-[60rem] grid grid-cols-2 mx-4 gap-x-4 md:grid-cols-4 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 lg:grid-cols-12'>
                <div className='relative z-20 md:col-span-2 col-span-full lg:col-span-7 xl:col-span-7 '>
                    <div className='bg-color-9 pb-11 p-4 md:pb-8 md:p-8 lg:p-16'>
                        <h6 className='h6 mb-4  text-gray-700'>{ebook.topic}</h6>
                        <h3 className='h3-1 mb-4 text-gray-900 '>{ebook.subject}</h3>
                        <p className='body-6 text-gray-800  mb-8'> 
                            {ebook.text}
                        </p>
                            <Button
                                href="#"
                                white
                                className="mt-2 sm:mt-4 md:mt-6 lg:mt-8"
                            >
                                <div className='flex items-center'> 
                                    <p className='mr-2'>{ebook.button}</p>
                                    <IoIosArrowForward/>
                                </div>
                            </Button>
                    </div>
                </div>
                <div className='h-[242px] md:h-auto relative block bg-cover bg-top md:bg-left col-span-full md:col-span-2 lg:col-span-5 xl:col-span-5'>
                    <div className='inline-block align-top overflow-hidden !absolute top-0 left-0 right-0 h-[284px] md:h-full md:-ml-8 lg:-ml-10 xl:-ml-12 z-10'>
                            <img className='absolute top:0 right:0 left:0 object-cover h-full w-full' src={Regional} alt="regional" />
                    </div>
                </div>
            </div>
        </Section>
    )
}