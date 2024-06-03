import React from 'react'
import Navbar from '../components/navbar'
import Foto from '../components/bgartikel.png'
import { IoIosSearch } from "react-icons/io";
import artikel1 from "../assets/images/artikel1.png"
import artikel2 from "../assets/images/artikel2.png"
import artikel3 from "../assets/images/artikel3.png"
import artikel4 from "../assets/images/artikel4.png"
import { Link } from 'react-router-dom'
import Footer from '../components/footer'

const Artikel = () => {
  return (
    <>
    <Navbar/>
    <section>
        <div className=' w-full h-96 bg-[#14142B] relative'>
          <img src={Foto} className='opacity-35 h-96 w-full object-cover' alt="" />
          <div className='flex flex-col items-center h-full w-full absolute top-5 '>
            <h1 className='font-body font-bold text-white text-2xl text-center mt-20'>
            Cari Artikel Menarik disini untuk Mengembangkan Usaha Anda
            </h1>
            <div className='relative w-1/2 mt-10'>
              <input 
                type="text" 
                className='w-full h-14 rounded-lg text-lg font-body outline-none p-4 pr-12' 
                placeholder='Search....'
              />
              <IoIosSearch className='absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-gray-500'  />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Artikel