import {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo } from '../assets';
import { navLinks } from '../constants'
import Button from './Button'
import MenuSvg from '../assets/svg/MenuSvg'
import { enablePageScroll, disablePageScroll } from 'scroll-lock';

export default function Navbar(){

  const pathname = useLocation()

  const [openNavigation, setOpenNavigation] = useState(false)

  function toggleNavigation(){
    if(openNavigation){
        setOpenNavigation(false);
        enablePageScroll()

    }else{
        setOpenNavigation(true)
        disablePageScroll()
    }
  }

  function handleClick(){
    if(!openNavigation) return;

      enablePageScroll()
      setOpenNavigation(false)
  }


  return (
    <div className='fixed top-0 left-0 right-0 w-full z-50 border-b border-n-6 bg-n-8/90 lg:backdrop-blur-sm'>
        <div className='flex justify-center mx-auto items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 max-w-[1280px]'> 
          <Link to="/" className='block w-[12rem] xl:mr-8'>
            <img src={logo} width={190} height={40} alt="logo" />
          </Link>
          <nav className= {`${openNavigation ? 'flex' : 'hidden'}
            fixed top-[3.5rem] right-0 left-0 bottom-0 border-n-6 bg-n-8 lg:static lg:flex lg:mx-auto`}
          >
            <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
              {navLinks.map((item) => (
                  <Link 
                    to = {item.url} 
                    key={item.id}
                    onClick={handleClick}  
                  >
                    <p
                      className={`relative navFont text-n-1 transition-colors hover:text-color-1 
                        px-6 py-6 md:py-8 lg:-mr-0.25  xl:px-10
                      ${item.onlyMobile 
                          ? "lg:hidden" 
                          : ""}
                       ${item.url === pathname.pathname 
                          ? "z-2 lg:text-n-1" 
                          : "lg:text-n-1/50"
                        } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                    >
                      {item.title}
                    </p>
                  </Link>
              ))}
            </div>
          </nav>
          <a className= "button mr-8 hidden lg:flex" href="#">
            New account
          </a>
          <Button className= "hidden lg:flex" href="#" white>
            Sign in
          </Button>
          <Button 
            className= "ml-auto lg:hidden" px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg
              openNavigation ={openNavigation}
            />
          </Button>
        </div>
    </div>
  );
};
