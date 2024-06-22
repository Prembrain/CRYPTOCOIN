import React, { useState, useRef } from 'react';
import Section from "../section";
import { customersReview } from "../../constants";
import { quoteMark } from "../../assets";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from 'react-icons/rx';

export default function Review(){

    const [currentIndex, setCurrentIndex] = useState(0);
    const startX = useRef(0);
    const isDragging = useRef(false);

    const handleMouseDown = (event) => {
        startX.current = event.clientX;
        isDragging.current = true;
    };

    const handleMouseMove = (event) => {
        if (!isDragging.current) return;

        const diffX = event.clientX - startX.current;
        if (diffX > 100) { // Swiped right
            handlePrev();
            isDragging.current = false;
        } else if (diffX < -100) { // Swiped left
            handleNext();
            isDragging.current = false;
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? customersReview.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % customersReview.length);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

   
    const review = customersReview[currentIndex]

    return(
        <Section
            className="container py-10 xl:py-28 lg:py-16 md:py-14"
            customPaddings
        >
            <div>
                {<div
                    className={`relative sm:h-[27.5rem] xl:h-[20rem] xl:max-w-[72rem] lg:h-[21.25rem] lg:mx-auto lg:max-w-[60rem] grid grid-cols-2 mx-4 gap-x-4 md:h-[27.5rem] md:grid-cols-4 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 lg:grid-cols-12  cursor-pointer transition-transform duration-500 hover:scale-105`}
                    key={review.id}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onClick={() => setIsActive(!isActive)}                  >
                    <div className="p-4 mb-0 sm:mb-8 md:mb-10 lg:mb-0 lg:col-span-4 col-span-full select-none">
                        <img
                            className="object-contain " 
                            width={117}
                            src={review.logo} 
                            alt="logoReview" />
                    </div>

                    <div className="p-4 lg:col-span-8 col-span-full select-none">
                        <div className="block mb-8">
                            <img
                                className="w-[23px] h-[23px]" 
                                src={quoteMark} 
                                alt="quotemark" 
                            />
                        </div>
                        <p className="body-1 xl:mb-12 md:mb-10 mb-8">{review.review}</p>
                        <div className="flex flex-row items-center">
                            <div className="mr-4">
                                <img 
                                    className="w-[4.5rem] h-[4.5rem]"
                                    src={review.img} 
                                    alt="imgpeople"/>
                            </div>
                            <div className="uppercase body-4">
                                <p>{review.name}</p>
                                <p>{review.position}</p>
                            </div>
                        </div>
                    </div>                 
                 </div>
                }
                <div 
                    className='absolute hidden md:block top-[50%] -translate-x-0 xl:translate-x-16 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-color-8 text-white cursor-pointer'
                    onClick={handlePrev}
                    
                    >
                    <BsChevronCompactLeft size={30}/>
                </div>
                    <div className='absolute hidden md:block top-[50%] -translate-x-0 xl:-translate-x-16 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-color-8 text-white cursor-pointer'
                    onClick={handleNext}   
                    >
                    <BsChevronCompactRight size={30}/>
                </div>
                <div className='flex flex-col px-6 items-start md:items-center sm:mt-4 md:mt-6 lg:mt-8'>
                    <div className='flex mb-2'>
                        {customersReview.map((item, index) => (
                            <button
                                key={index}
                                onClick={()=> goToSlide(index)}
                                className={`flex text-4xl cursor-pointer mr-5 ${index === currentIndex ? "text-color-8 text-2xl" : ""}`}
                            >
                                <RxDotFilled /> 
                            </button>
                        ))}
                    </div>
                    <a 
                        href="#"
                        className='flex items-center ml-3 md:ml-0 sm:mt-2 md:mt-4 lg:mt-6 hover:scale-110 transition-transform duration-500'
                    >
                        <button className='mr-2 body-4 select-none'>Hear from more customers</button>
                        <IoIosArrowForward className='text-[1.25rem] text-color-8 '/>
                    </a>
                </div>
            </div>
        </Section>
    )
}