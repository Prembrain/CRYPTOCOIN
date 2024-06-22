import React from 'react'
import { socials, footerLinks1, footerLinks2} from '../constants'
import { logo } from '../assets'

export default function Footer(){
    return(
        <footer className='py-28 mx-auto xl:max-w-[1280px] lg:max-w-[1240px] md:max-w-[768px] max-w-[417px]'>
            <section 
                className='flex-wrap xl:max-w-[1280px] lg:mx-auto lg:max-w-[960px] 
                grid grid-cols-2 mx-4 gap-x-4
                md:grid-cols-4 md:gap-x-8 
                lg:gap-x-10 lg:grid-cols-12 xl:gap-x-12 '
            >
                <div className='p-4 -mt-2 col-span-full lg:col-span-3'>
                    <img 
                        src={logo} 
                        alt="logo" 
                        width={140}
                        height={53}
                    />
                </div>
                <div className='flex flex-col md:flex-row col-span-full lg:col-start-4 lg:grid lg:grid-cols-3'>
                    {footerLinks1.map((item) => (
                        <div
                            className='p-4 md:w-64 md:mr-8 lg:w-full lg:col-span-1' 
                            key={item.title}>
                            <h4 className='xl:footermain1 footermain2 mb-4 text-color-11'>{item.title}</h4>
                            {item.links.map((link, index) => (
                                <ul 
                                    className='block'
                                    key={index}>
                                    <li>
                                        <a 
                                            className='footersub block pb-3  text-color-12 hover:text-color-11'
                                            href={link.url}>
                                            {link.title}
                                        </a>
                                    </li>
                                </ul>
                            )
                            )}
                        </div>
                    )
                    )}
                </div>
                <div className='flex flex-col md:flex-row col-span-full lg:col-start-4 lg:grid lg:grid-cols-3'>
                    {footerLinks2.map((item) => (
                        <div
                            className='p-4 md:w-64 md:mr-8 lg:w-full lg:col-span-1' 
                            key={item.title}>
                            <h4 className='xl:footermain1 footermain2 mb-4 text-color-11'>{item.title}</h4>
                            {item.links.map((link, index) => (
                                <ul 
                                    className='block'
                                    key={index}>
                                    <li>
                                        <a
                                            className='footersub block pb-3  text-color-12 hover:text-color-11' 
                                            href={link.url}>
                                            {link.title}
                                         </a>
                                    </li>
                                </ul>
                            )
                            )}
                        </div>
                    )
                    )}
                </div>
            </section>
            <section className='mt-16 lg:mt-20 xl:max-w-[1280px] lg:mx-auto lg:max-w-[960px] grid grid-cols-2 mx-4 gap-x-4 md:gird-col-4 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 lg:grid-cols-12'>
                <div className='flex flex-col justify-start col-span-full md:flex-row md:justify-between md:items-center'>
                    <ul className='flex p-2'>
                        {socials.map((item) => (
                            <a 
                                key={item.id}
                                href={item.url}
                                target="_blank"
                                className='flex items-center justify-center w-10 h-10 mr-5 bg-n-7 rounded-full transition-colors hover:bg-n-6'
                            >
                                <img 
                                    src={item.iconUrl} 
                                    width={24} 
                                    height={24} 
                                    alt={item.title} 
                                />
                            </a>
                        ))}
                    </ul>
                    <p className='caption text-n-4 p-4 lg:block'>
                        ©{new Date().getFullYear()}. All rights reserved. 
                    </p>
                </div>
            </section>
        </footer>
    )
}

