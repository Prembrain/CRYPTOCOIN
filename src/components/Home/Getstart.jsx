import React from 'react'
import Section from '../section'
import {getStart} from '../../constants'
import Button from '../Button'
import { IoIosArrowForward } from "react-icons/io";


export default function GetStart(){

    const get = getStart[0]
    return(
        <Section
            className="bg-color-10 py-12 md:py-10 lg:py-24"
            customPaddings
        >
            <div className='flex flex-col justify-center items-center text-center'>
                <div className='px-4 md:max-w-[780px] lg:max-w-[630px] xl:max-w-[752px]'>
                    <h3 className='h3'>{get.topic}</h3>
                    <p className='body2 my-12'>{get.text}</p>
                    <Button
                        href="#"
                        white
                        className="mt-2 sm:mt-4 md:mt-6 lg:mt-8"
                    >
                        <div className='flex items-center'> 
                            <p className='mr-2'>{get.button}</p>
                            <IoIosArrowForward/>
                        </div>
                    </Button>      
                </div>
            </div>
        </Section>
    )
}