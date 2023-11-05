import React from 'react'
import CallIcon from '../../Icons/CallIcon'
import LogoIcon from '../../Icons/LogoIcon'

const NavBar = () => {
  return (
    <div>
      <nav className="container mx-auto">
        {/* Flex Container */}
        <div className="flex justify-between bg-white shadow shadow-3xl rounded-br-lg">
 {/* Right Side */}
 <div className="logo flex">
                <LogoIcon />
                <div className="title mr-4">
                    <h3 className='text-secondary text-[18px]'>آژانس طراحی پرنون</h3>
                    <p className='text-secondary text-[12px] opacity-50 font-light'>طراحی و بوست بیزینس شما</p>
                </div>
            </div>
            {/* Left Side */}
            <div className="left_side flex">
                <div className="call flex items-center">
                <div className="line w-[1px] h-[45px] ml-4 bg-secondary opacity-50"></div>

                    <div className="tell flex flex-col text-secondary text-[18px] ml-4">
                        <span className='opacity-50 flex justify-end font-bold'>021</span>
                        <span className='font-extrabold'>910176789</span>
                    </div>
                    <CallIcon />
                </div>

                {/* Start Btn */}

            </div>

           


        </div>
      </nav>
    </div>
  )
}

export default NavBar
