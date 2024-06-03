import React, {useEffect} from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Darmo from '../assets/images/darmo1.png'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import Sate from "../assets/images/sate.png"
import { GrMoney } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";


const DetailMakanan = () => {
  useEffect(() => {
    document.title = 'Detail Makanan';
  }, []);
  return (
    <>
    <Navbar/>
    <section className='w-full h-auto py-20 bg-white flex '>
      <div className='w-1/2 h-full pl-20 pr-10 flex flex-col justify-center font-body'>
      <h1 className='font-bold text-xl text-primary py-5'>Sate Madura Pak Darmo</h1>
      <h2 className='text-justify'>Nikmati cita rasa autentik Sate Madura yang menggugah selera. Daging ayam pilihan ditusuk dengan bambu dan dibakar dengan bumbu khas Madura yang kaya rempah. Setiap gigitan adalah perpaduan sempurna antara kelezatan daging yang empuk dan aroma rempah yang memikat.</h2>
      <h1 className='font-bold text-xl text-primary py-5'>Pilihan Daging</h1>
        <ul className='list-disc list-outside pl-5 text-justify'>
        <li>Daging Ayam</li>
        <li>Daging Kambing</li>
        <li>Daging Sapi</li>
        </ul>
      <div className='w-3/4 h-48 my-5 rounded-xl border border-[#DCDCDC] shadow-lg py-3 px-5'>
      <h1 className='font-bold text-base text-primary'>Informasi UMKM</h1>
      <div className='flex '>
        <img src={Darmo} className='w-32 rounded-lg mt-2 ' alt="" />
        <div>
          <h1 className=' pl-5 font-bold py-1'>Warung Pak Darmo</h1>
          <h1 className='flex pl-5 py-1 items-center'><BsFillTelephoneFill className='text-primary text-xl mr-2'/>0813-2938-0092</h1>
          <h1 className='flex pl-5 pb-4 items-center'><MdOutlineMailOutline className='text-primary text-xl mr-2'/>pakdarmo@gmail.com</h1>
          <a href="/UMKM/Detail" className='ml-5 mt-5 text-primary py-2 px-16 border-2 rounded-xl border-primary'>Lihat Detail</a>
        </div>
      </div>
      </div>
      </div>
      <div className='w-1/2 h full pr-20 pl-10 flex flex-col  font-body'>
        <div className='w-full h-96 rounded-xl border border-[#DCDCDC] shadow-lg'>
          <img src={Sate} className='h-3/5 rounded-xl w-full object-cover' alt="" />
          <div>
          <h1 className=' pl-5 font-bold text-primary py-3'>Sate Madura Pak Darmo</h1>
          <h1 className='flex pl-5 py-1 items-center'><GrMoney className='text-primary text-xl mr-2'/>Rp25.000/Porsi</h1>
          <h1 className='flex pl-5 py-1 items-center'><IoLocationOutline className='text-primary text-xl mr-2'/>Jl. Sultan Agung No.111, Wirogunan, Kec. Mergangsan</h1>
          <h1 className='flex pl-5 pb-4 items-center'><IoMdTime className='text-primary text-xl mr-2'/>Senin-Sabtu Buka Pukul 11.00-23.00 WIB</h1>
        </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default DetailMakanan