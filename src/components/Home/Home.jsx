import React from 'react'
import Header from './Header'
import Solution from './Solution'
import Innovation from './Innovation'
import Review from './Review'
import Ebook from './Ebook'
import GetStart from './Getstart'

export default function Home(){
    return(
        <div> 
            <Header />
            <Solution />
            <Innovation/>
            <Review />
            <Ebook />
            <GetStart />
        </div>
    )
}