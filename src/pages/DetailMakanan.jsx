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
      <h1 data-aos="fade-up" data-aos-duration="1000" className='font-bold text-xl text-primary py-5'>Sate Madura Pak Darmo</h1>
      <h2 data-aos="fade-up" data-aos-duration="1000" className='text-justify'>Nikmati cita rasa autentik Sate Madura yang menggugah selera. Daging ayam pilihan ditusuk dengan bambu dan dibakar dengan bumbu khas Madura yang kaya rempah. Setiap gigitan adalah perpaduan sempurna antara kelezatan daging yang empuk dan aroma rempah yang memikat.</h2>
      <h1 data-aos="fade-up" data-aos-duration="1000" className='font-bold text-xl text-primary py-5'>Pilihan Daging</h1>
        <ul data-aos="fade-up" data-aos-duration="1000" className='list-disc list-outside pl-5 text-justify'>
        <li>Daging Ayam</li>
        <li>Daging Kambing</li>
        <li>Daging Sapi</li>
        </ul>
      <div data-aos="fade-up" data-aos-duration="2000" className='w-3/4 h-48 my-5 rounded-xl border border-[#DCDCDC] shadow-lg py-3 px-5'>
      <h1 className='font-bold text-base text-primary'>Informasi UMKM</h1>
      <div  className='flex '>
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
      <div className='w-1/2 h-screen mb-10 pr-20 pl-10 flex flex-col  font-body'>
        <div data-aos="fade-up" data-aos-duration="1000" className='w-full h-96 rounded-xl border border-[#DCDCDC] shadow-lg'>
          <img src={Sate} className='h-3/5 rounded-xl w-full object-cover' alt="" />
          <div>
          <h1 className=' pl-5 font-bold text-primary py-3'>Sate Madura Pak Darmo</h1>
          <h1 className='flex pl-5 py-1 items-center'><GrMoney className='text-primary text-xl mr-2'/>Rp25.000/Porsi</h1>
          <h1 className='flex pl-5 py-1 items-center'><IoLocationOutline className='text-primary text-xl mr-2'/>Jl. Sultan Agung No.111, Wirogunan, Kec. Mergangsan</h1>
          <h1 className='flex pl-5 pb-4 items-center'><IoMdTime className='text-primary text-xl mr-2'/>Senin-Sabtu Buka Pukul 11.00-23.00 WIB</h1>
          <div data-aos="zoom-in" data-aos-duration="1000" className='w-full h-56 mt-5 rounded-xl border border-[#DCDCDC] shadow-lg'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.224935409236!2d110.3754373152503!3d-7.798325179482585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57939c23cddf%3A0x5027a76e3568980!2sJl.%20Sultan%20Agung%20No.111%2C%20Wirogunan%2C%20Kec.%20Mergangsan%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta%2055100%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1657691924018!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className='rounded-xl'
            ></iframe>
          </div>
        </div>
       
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default DetailMakanan