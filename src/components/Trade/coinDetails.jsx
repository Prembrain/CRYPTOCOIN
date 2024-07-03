import React, {useState, useEffect} from 'react'
import {Fragment} from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import DOMPurify from 'dompurify';
import {close} from '../../assets'

export default function CoinDetails({isOpen, closeModal, keyId}){

    // console.log("CoinDetails isOpen:", isOpen); 
    const [coin, setCoin] = useState({}); // data detail
    const [loadCoin, setLoadCoin] = useState(true);  //loader condition is not load show loader
    const url = `https://api.coingecko.com/api/v3/coins/${keyId}`;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error("Error!");
            }
            const json = await response.json();
            setCoin(json);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
    }, [url]);
    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  //regular expression add , as thoussnad separators
    }
    
    // console.log(coin);
    
    const h24 = coin.market_data ? coin.market_data.price_change_24h : ""; //prepare for styles condition - red + green

    return(
        <>
            <Transition appear show={isOpen} as={Fragment}> {/*true popup open*/}
                <Dialog as="div" className="relative z-10" onClose={closeModal}> {/* used to create accessible modal dialogs.*/}
                    <TransitionChild //bg shadow 
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </TransitionChild>
                    
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild //coin detail
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        >
                         <DialogPanel className="relative w-full max-w-[1024px] max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-0 md:p-6 text-left shadow-xl transition-all flex flex-col gap-5 mt-[5rem] md:mt-[4rem]">
                            <button //close popup
                                type="button"
                                className="absolute top-2 right-2 z-20 w-fit p-2 rounded-full"
                                onClick={() => {
                                    // console.log("Close button clicked");  // Debug log
                                    closeModal();
                                  }}
                            >
                                <img
                                    src={close}
                                    alt="close"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </button>
                            <div className='max-w-[130rem] my-0 mx-auto py-0 px-4 lg:px-[2.5rem]'>
                                <div onLoad={() => setLoadCoin(false)} className='flex flex-col justify-center items-center text-center text-black lg:flex-row lg:w-full pt-4 lg:pt-0 relative'>
                                    <div className=' w-[90%] lg:w-[30%] border-r-0 lg:border-r-[2px] border-b-[2px] lg:border-b-0  border-solid border-color-14 pb-8 md:pb-12 lg:pb-0 flex flex-col justify-center items-center gap-8'>
                                        {loadCoin && <span className="loader"></span>}
                                        {coin.image ? <img className='w-[160px] md:w-[220px]' src={coin.image.large} alt={coin.id} width={220}/> : null}
                                        <h2 className='text-[2rem]'>{coin.name}</h2>
                                        <p className='text-[1.25rem]'>Rank: #{coin.coingecko_rank}</p>
                                    </div>
                                    <div className='w-full lg:w-[70%] py-[2rem] px-4 md:px-8 lg:p-8 flex flex-col justify-between'>
                                        <div className='flex justify-center lg:justify-between flex-wrap lg:flex-nowrap  gap-6 lg:gap-0 w-full'>
                                            <div className='flex gap-4 text-[1.25rem] justify-center whitespace-nowrap capitalize text-color-14'>
                                                <span>24h Change</span>
                                                <p className={h24 >= 0 ? "text-green-500" : "text-red-600"}>
                                                    {coin.market_data
                                                    ? coin.market_data.price_change_percentage_24h.toFixed(
                                                        2
                                                        ) + "%"
                                                        : ""}
                                                </p>
                                            </div>
                                            <div className="flex gap-4 text-[1.25rem] justify-center whitespace-nowrap capitalize text-color-14">
                                                <span>Price:</span>
                                                <p className={"text-green-500"}>
                                                    {coin.market_data
                                                    ? "$" +
                                                        numberWithCommas(
                                                        coin.market_data.current_price.usd.toFixed(2)
                                                        )
                                                    : null}
                                                </p>
                                            </div>
                                            <div className="flex gap-4 text-[1.25rem] justify-center whitespace-nowrap capitalize text-color-14">
                                                <p>Symbol:</p>
                                                <span>{coin.symbol}</span>
                                            </div>
                                        </div>
                                        {loadCoin && <span className="loader"></span>}
                                        <div className="w-full text-[1rem]  h-[15rem] md:h-[20rem] overflow-y-auto mt-6 md:mt-10 text-left bg-slate-200 p-4 rounded-xl">
                                            <p
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(
                                                coin.description ? coin.description.en : ""
                                                ),
                                            }}
                                            ></p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                         </DialogPanel>

                        </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
<<<<<<< HEAD

=======
>>>>>>> 44b99fb32f740b6c74f67f7934ad442ac04f04d8
