import React from 'react'
import {useEffect, useState } from 'react'
import Section from '../section'
import {Btc, Eth} from "../../assets"
import CoinDetails from './coinDetails'
import MarketUpdate from './MarketUpdate'



export default function Trade(){

    // dialog
    const [isOpen, setIsOpen] = useState(false) //track the dialog is oepn or closed
    const [keyId, setKeyId] = useState("") //sent keyId to open dialog detail of coin you choose


    function handleClick(id){
        setIsOpen(!isOpen)
        setKeyId(() => id)
        // console.log("handdle is on")
        // console.log(keyId)
        }

    // connect api
    const [data, setData] = useState([]);
    const [coinsLoad, setCoinsLoad] = useState(true); //loader state
  
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false`;
  
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //regular expression add , as thoussnad separators
    }
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Error!");
          }
          const jsonData = await response.json(); //json to javascripy
          setData(jsonData);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [url]);
  
    
    return(
        <>
            <Section
                className="w-full h-[100vh] py-10"
                customPaddings
            >
                <article className='absolute top-0 left-0 right-0 translate-y-[-1rem] flex justify-center items-center h-[100vh] xl:max-w-[1280px] xl:text-[1rem] mx-auto p-4'>
                    <div className='flex flex-col items-center'>
                        <section className='relative flex text-center items-center'>
                            <img
                                className='absolute hidden top-[15%] lg:block lg:left-[-35px] xl:left-[-60px] animate-move' 
                                src={Btc} 
                                width={72}
                                alt="btc" 
                                />
                            <h1 className='h1'>
                                Track and trade<br/>
                                <span className='text-transparent bg-clip-text bg-header-gradient'>
                                    crypto currencies
                                </span>
                            </h1>
                            <img
                                className='absolute hidden top-[15%] lg:block lg:right-[-35px] xl:right-[-60px] animate-move' 
                                src={Eth} 
                                width={72}
                                alt="Eth" 
                                />
                        </section>
                        <section 
                            onLoad={() => setCoinsLoad(false)} //load event: if load show data ,if not show loader
                            className="max-w-[100rem] h-[21rem] hidden lg:flex lg:items-center lg:justify-between px-4 mx-auto text-center mt-4 sm:grid sm:grid-cols-2 gap-y-8"
                            >
                            {coinsLoad && <span className="loader"></span>} {/*coinsLoad true = no load ,show loader*/}
                            {data.map((item) => (
                                <div
                                    onClick={()=>handleClick(item.id)}
                                    key={item.id}
                                    className="flex flex-col items-center text-center w-[15rem] h-auto cursor-pointer select-none"
                                    >
                                    <img src={item.image} alt={item.name} width={90}/>
                                    <p className="font-semibold mt-[0.5rem]">
                                        {item.name}{" "}
                                        <span
                                        className={
                                            `font-semibold mt-[0.5rem] text-[1.375]
                                            ${item.price_change_percentage_24h <= 0
                                                ? "text-red-600"
                                                : "text-green-500"}
                                                `}
                                                >
                                        {item.price_change_percentage_24h.toFixed(2) + "%"}
                                        </span>
                                    </p>
                                    <p className="font-semibold mt-[0.5rem] text-[1.375rem]">
                                        {"$ " + numberWithCommas(item.current_price.toFixed(2))}
                                    </p>
                                </div>
                            ))}
                        </section>
                        <CoinDetails 
                            isOpen={isOpen} 
                            closeModal={() => setIsOpen(false)}
                            keyId={keyId}
                        />
                    </div>
                </article>
            </Section>
            <section className='w-full'>
                <MarketUpdate/>
            </section>
        </>
    )
}
