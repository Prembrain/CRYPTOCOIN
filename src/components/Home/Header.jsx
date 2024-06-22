import React from 'react'
import Section from '../section'
import Button from '../Button'
import { CgptFront } from '../../assets'

export default function Header(){
    return(
        <Section
        className="w-full h-[100vh] "
        customPaddings
        id="header"
        >
            <div className='container w-full h-[100vh] flex justify-center'>
                <div className='relative flex flex-1 flex-row justify-around items-center'>
                    <img 
                        className='hidden xl:max-w-[550px] opacity-80 lg:block lg:max-w-[400px]'
                        src={CgptFront} 
                        alt="CgptFront" 
                    />
                    <img 
                        className='absolute opacity-35 lg:hidden'
                        width={300}
                        src={CgptFront} 
                        alt="CgptFront" 
                    />
                    <div className='flex flex-col items-center'>
                        <div className='relative z-2'>
                            <h2 className='h2 text-center xl:mb-12 lg:mb-8 md:-6 xs:mb-8 textAnimation'>Bussiness impact,<br/>powered by crypto<br/>and blockchain</h2> 
                            <h4 className='h4 text-center xl:mb-12 lg:mb-8 md:-6 xs:mb-8 textAnimation mt-2 lg:mt-0"'>Tranform the way you move, manage<br/>and tokenize</h4>
                        </div>
                        <Button
                            className="mt-2 lg:mt-0" 
                            white
                        >
                            Get Started Now
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    )
}