import React from 'react'
import CallIcon from '../../Icons/CallIcon'
import LogoIcon from '../../Icons/LogoIcon'
import ArrowIcon from '../../Icons/ArrowIcon'

const NavBar = () => {
  return (
    <div>
      <nav className="container mx-auto -mt-8">
        {/* Flex Container */}
        <div className="flex justify-between ps-5 pe-5 items-center bg-white shadow shadow-3xl rounded-br-lg rounded-bl-lg h-header">
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
            <div className="left_side flex">

                <div className="call flex items-center">
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

           


        </div>
      </nav>
    </div>
  )
}

export default NavBar
