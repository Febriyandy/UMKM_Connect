import React from 'react'
import Logo from "../assets/images/UMKMConnect2.png";


const footer = () => {
  return (
    <>
    <footer>
        <div className='w-full h-60 flex bg-primary'>
            <div>
                <img src={Logo} alt="" />
            </div>
        </div>
    </footer>
    </>
  )
}

export default footer