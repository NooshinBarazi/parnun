import React from 'react'
import CallIcon from '../../Icons/CallIcon'

const NavBar = () => {
  return (
    <div>
      <nav className="container mx-auto">
        {/* Flex Container */}
        <div className="flex">

            {/* Right Side */}
            <div className="right_side flex">
                <div className="call">
                    <CallIcon/>
                    <div className="tell flex flex-col">
                        <span className='block'>021</span>
                        <span>910176789</span>
                    </div>
                </div>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
