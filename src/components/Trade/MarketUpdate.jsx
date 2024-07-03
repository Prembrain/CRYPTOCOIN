import { useEffect, useState } from 'react'
import CoinDetails from './coinDetails';


export default function MakrketUpdate(){
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState([]);
    const [apiLoad, setApiLoad] = useState(true); //loader state

    // dialog
    const [isOpen, setIsOpen] = useState(false) //track the dialog is oepn or closed
    const [keyId, setKeyId] = useState("") //sent keyId to open dialog detail of coin you choose
    
    
    function handleClick(id){
        setIsOpen(!isOpen)
        setKeyId(() => id)
        // console.log("handdle is on")
        // console.log(keyId)
    }
  
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`;
    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //regular expression add , as thoussnad separators
    }
    
    useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(url);
        const json = await response.json(); //json to javascripy
        setData(json);
    };
    fetchData();
    }, [url]);

    const paginationButtons = []; //change table market componenet
    for (let i = 1; i <= 5; i++) {
        paginationButtons.push(
        <button
            key={i}
            onClick={() => setCurrentPage(i)} //setpage number you click
            className={`text-[1rem] w-10 h-10 md:w-15 md:h-15 rounded-full cursor-pointer bg-color-14 text-color-13 ${i === currentPage ? "!bg-blue-500  text-color-13" : " "}`}
        >
            {i}
        </button>
        );
    }

  const scrollMarket = () => {
    window.scrollTo({
      top: window.scrollY - 700,
      behavior: "smooth",
    });
  };

    return(
        <>
            <div
                className='py-20 px-0'
            >
                <div className='!max-w-[80rem] !my-0 !mx-auto !py-0 !px-10'>
                    <div className='flex flex-col'>
                        <h2 className='h2 text-color-13 mb-12'>Market Update</h2>
                        <div className='w-full h-auto flex flex-col whitespace-nowrap'>
                            <div className='body-7 text-color-13 w-full px-[1rem] py-[1.5rem] sm:px-[1.5rem] md:px-[0.875rem] lg:px-[1.5rem] text-right bg-header-gradient rounded-t-lg
                                grid grid-cols-3 auto-rows-auto gap-x-6 sm:gap-x-4 lg:gap-x-5 xl:gap-x-12 sm:grid-cols-12'
                            >
                                <p className='text-center sm:text-left col-span-2 sm:col-span-4'>Coin</p>
                                <p className='col-span-1 sm:col-span-2'>Price</p>
                                <p className='hidden sm:block sm:col-span-2'>24h Change</p>
                                <p className='hidden sm:block sm:col-span-4 '>Market Cap</p>
                            </div>
                            <div
                                onLoad={() => setApiLoad(false)}
                                className='flex flex-col'
                            >
                                {apiLoad && <span className='loader'></span>}
                                {data.map((item) => (
                                    <div
                                        onClick={()=>handleClick(item.id)}
                                        key={item.id}
                                        className='body-7 text-color-13 w-full py-[1rem] sm:py-[2rem] lg:py-[3rem] px-[1rem]  sm:px-[1.5rem] md:px-[0.875rem] lg:px-[1.5rem] text-right border-b-[1px] border-solid border-color-13 items-center gap-8 bg-color-14 select-none hover:cursor-pointer hover:bg-[#200840] 
                                            grid grid-cols-3 auto-rows-auto gap-x-6 sm:gap-x-4 lg:gap-x-5 xl:gap-x-12 sm:grid-cols-12'
                                    >
                                        <span className='flex flex-row items-center gap-2 col-span-2 sm:col-span-4'>
                                            <img className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]' src={item.image} alt={item.name} width={50} height={50}/>{item.name}
                                        </span>
                                        <p className='col-span-1 sm:col-span-2'>{"$ " + item.current_price.toFixed(2)}</p>
                                        <p
                                            className={
                                                `!font-semibold text-[1.375] hidden sm:block sm:col-span-2
                                                ${item.price_change_percentage_24h <= 0
                                                    ? "text-red-600"
                                                    : "text-green-500"}
                                                    `}
                                        >
                                            {item.price_change_percentage_24h.toFixed(2) + " %"}
                                            </p>
                                            <p className='hidden sm:block sm:col-span-4'>{"$ " + numberWithCommas(item.market_cap)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            onClick={scrollMarket}
                            className="flex gap-[1.3rem] justify-center items-center mt-10 sm:mt-15 lg:mt-20"
                        >
                            {paginationButtons}
                        </div>
                    </div>
                    <CoinDetails 
                        isOpen={isOpen} 
                        closeModal={() => setIsOpen(false)}
                        keyId={keyId}
                    />
                </div>
                <div className='h-[1px] bg-[#808080] mt-[6rem] lg:mt-[10rem] mx-10 xl:mx-auto xl:max-w-[1280px]' />
            </div>
        </>
    )
}
