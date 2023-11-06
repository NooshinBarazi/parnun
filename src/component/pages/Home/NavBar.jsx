import React from 'react'
import CallIcon from '../../Icons/CallIcon'
import LogoIcon from '../../Icons/LogoIcon'
import ArrowIcon from '../../Icons/ArrowIcon'
import MenuBurgerIcon from '../../Icons/MenuBurger'
import ArrowDownIcon from '../../Icons/ArrowDownIcon'
import CircleMenuIcon from '../../Icons/CircleMenuIcon'
import SampleIcon from '../../Icons/SampleIcon'
import { useState } from 'react'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <nav className="container mx-auto -mt-8">
        {/* Flex Container */}
        {/* For Lg Break Point */}
        <div className="flex relative justify-between items-center bg-white shadow shadow-3xl rounded-br-lg rounded-bl-lg h-header">
          <div className="hidden logo lg:flex ps-4">
            <div className='w-[46px] h-[46px]'>
              <LogoIcon />
            </div>
            <div className="title mr-4">
              <h3 className='text-secondary text-[18px]'>آژانس طراحی پرنون</h3>
              <p className='text-secondary text-[12px] opacity-50 font-light'>طراحی و بوست بیزینس شما</p>
            </div>
          </div>
          <div className="hidden left_side lg:flex">

            <div className="call flex items-center pe-4">
              {/* Start Btn */}
              <button className="bg-primary rounded-md rounded-tr-sm flex items-center px-5 py-3 text-[14px] ml-4">
                <span className="text-whiteLight text-sm -mt-4 px-2 py-2">شروع کنید</span>
                <ArrowIcon width={24} height={24} />
              </button>
              <div className="line w-[2px] h-[50px] ml-4 bg-secondary opacity-50"></div>
              <div className="tell flex flex-col text-secondary text-[18px] ml-4">
                <span className='opacity-50 flex justify-end font-bold'>021</span>
                <span className='font-extrabold'>910176789</span>
              </div>
              <CallIcon width={39} height={39} />
            </div>


          </div>
          {/* till md Breakpoint */}
          <div className="bg-gradient-to-b from-bgLight from-0% to-bgDark to-57% flex justify-between ps-5 pe-5 items-center bg-white shadow shadow-3xl rounded-br-lg rounded-bl-lg h-header w-menu lg:hidden">
            {/* Right Side */}
            <div className="logo flex">
              <div className='w-[46px] h-[46px]'>
                <LogoIcon />
              </div>
              <div className="title mr-4">
                <h3 className='text-secondary text-[18px]'>آژانس طراحی پرنون</h3>
                <p className='text-secondary text-[12px] opacity-50 font-light'>طراحی و بوست بیزینس شما</p>
              </div>
            </div>
            {/* Left Side */}
            <div className="menu_burger pe-5 lg:hidden cursor-pointer" onClick={()=>setOpen(!open)}>
              <MenuBurgerIcon />
            </div>
          </div>
        </div>
       {open && (
         <div className="toggle container mx-auto flex flex-col items-start bg-whiteLight rounded-lg border border-gray absolute w-full
         -mt-3 px-20 lg:hidden">
                <h2 className='text-secondary text-[14px] font-bold py-9 text-right'>صفحه اصلی</h2>
                <div className="service_menu flex items-center w-full justify-between">
                <h2 className='text-secondary text-[14px] font-bold py-5 text-right'>خدمات ما</h2>
                <ArrowDownIcon />
                </div>
                <div className="services_menu flex">
                  <div className="sidebar flex flex-col">
                    <div className="line_menu w-[3px] h-[10px] bg-secondary mb-2 ms-1 opacity-20"></div>
                    <div className="line_menu w-[3px] h-[13px] bg-secondary mb-2 ms-1 opacity-20"></div>
                    <div className="line_menu w-[3px] h-[13px] bg-secondary  ms-1 opacity-20"></div>
                    <CircleMenuIcon />
                  </div>
                    <ul className='ms-7 mt-10 '>
                      <li className='text-secondary opacity-60'>لورم ایپسوم متن ساختگی</li>
                    </ul>
                </div>
                <div className="services_menu flex">
                  <div className="sidebar flex flex-col">
                    <div className="line_menu w-[3px] h-[10px] bg-secondary mb-2 mt-2 ms-1 opacity-20"></div>
                    <div className="line_menu w-[3px] h-[13px] bg-secondary mb-2 ms-1 opacity-20"></div>
                    <div className="line_menu w-[3px] h-[13px] bg-secondary  ms-1 opacity-20"></div>
                    <CircleMenuIcon />
                  </div>
                    <ul className='ms-7 mt-12'>
                      <li className='text-secondary opacity-60'>لورم ایپسوم متن ساختگی</li>
                    </ul>
                </div>
                <div className="services_menu flex">
                  <div className="sidebar flex flex-col">
                    <div className="line_menu w-[3px] h-[10px] bg-secondary mb-2  ms-1 opacity-20"></div>
                    <div className="line_menu w-[3px] h-[13px] bg-secondary mb-2 ms-1 opacity-20"></div>
                    <div className="line_menu w-[3px] h-[13px] bg-secondary  ms-1 opacity-20"></div>
                    <CircleMenuIcon />
                  </div>
                    <ul className='ms-7 mt-10'>
                      <li className='text-secondary opacity-60'>لورم ایپسوم متن ساختگی</li>
                    </ul>
                </div>
                <div className="services_menu flex">
                  <div className="sidebar flex flex-col">
                    <div className="line_menu w-[3px] h-[10px] bg-secondary mb-2 ms-1 opacity-20"></div>
                    <div className="line_menu w-[3px] h-[13px] bg-secondary mb-2 ms-1 opacity-20"></div>
                    <div className="line_menu w-[3px] h-[13px] bg-secondary  ms-1 opacity-20"></div>
                    <CircleMenuIcon />
                  </div>
                    <ul className='ms-7 mt-10'>
                      <li className='text-secondary opacity-60'>لورم ایپسوم متن ساختگی</li>
                    </ul>
                </div>
                <div className="services_menu flex">
                  <div className="sidebar flex flex-col">
                    <div className="line_menu w-[3px] h-[10px] bg-secondary mb-2 ms-1 opacity-20"></div>
                    <div className="line_menu w-[3px] h-[13px] bg-secondary mb-2 ms-1 opacity-20"></div>
                    <div className="line_menu w-[3px] h-[13px] bg-secondary  ms-1 opacity-20"></div>
                    <CircleMenuIcon />
                    <div className="line_menu w-[3px] h-[10px] bg-secondary mb-2  ms-1 opacity-20"></div>
                    <div className="line_menu w-[3px] h-[13px] bg-secondary mb-2 ms-1 opacity-20"></div>
                    <div className="line_menu w-[3px] h-[13px] bg-secondary  ms-1 opacity-20"></div>
                  </div>
                    <ul className='ms-7 mt-10'>
                      <li className='text-secondary opacity-60'>لورم ایپسوم متن ساختگی</li>
                    </ul>
                    
                </div>
                
                {/* Blog */}
                <div className="blog py-8">
                  <h3 className='text-secondary text-[14px] font-bold'>بلاگ</h3>
                </div>
                {/* Sample */}
                <div className="Samples">
                <button className="flex items-center justify-center bg-purpleLight rounded-full px-5 py-3">
              <SampleIcon />
              <span className="text-secondary -mt-2 ms-3">نمونه کارها</span>
            </button>
                </div>

                {/* contact */}
                <div className="blog py-8">
                  <h3 className='text-secondary text-[14px] font-bold'>تماس با ما</h3>
                </div>

                {/* about us */}
                <div className="blog py-8">
                  <h3 className='text-secondary text-[14px] font-bold'>درباره ما</h3>
                </div>
        </div>
       )
       }
      </nav>
    </div>
  )
}

export default NavBar
