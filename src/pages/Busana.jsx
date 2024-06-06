import React, {useEffect} from 'react'
import Navbar from '../components/navbar'
import Foto from "../assets/images/bgbusan.png"
import { IoIosSearch } from "react-icons/io";
import ketik from "../assets/images/ketik.png"
import melayu from "../assets/images/melayu.png"
import muslim from "../assets/images/muslim.png"
import kegan from "../assets/images/kegan.png"
import shirt from "../assets/images/shirt.png"
import streat from "../assets/images/streat.png"
import elegan from "../assets/images/elegan.png"
import hijab from "../assets/images/hijab.png"
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const Busana = () => {
    useEffect(() => {
        document.title = 'Busana';
      }, []);
  return (
    <>
    <Navbar/>
    <section>
        <div className=' w-full h-96 bg-[#14142B] relative'>
          <img src={Foto} className='opacity-35 h-96 w-full object-cover' alt="" />
          <div className='flex flex-col items-center h-full w-full absolute top-5 '>
            <h1 data-aos="zoom-in" data-aos-duration="1000" className='font-body font-bold text-white text-2xl text-center mt-20'>
            Temukan Gaya Anda di Dunia Busana Kami!
            </h1>
            <div data-aos="zoom-in" data-aos-duration="1000" className='relative w-1/2 mt-10'>
              <input 
                type="text" 
                className='w-full h-14 rounded-lg text-lg font-body outline-none p-4 pr-12' 
                placeholder='Search....'
              />
              <IoIosSearch className='absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-gray-500'  />
            </div>
            <h2 data-aos="fade-up" data-aos-duration="1000" className='font-body text-white text-center w-3/4 mt-10'>
            Jelajahi ragam busana unik dari para desainer lokal kami. Setiap potongan dipenuhi dengan kreativitas dan sentuhan pribadi, menawarkan Anda kesempatan untuk mengekspresikan diri melalui pakaian yang Anda kenakan. Mari temukan gaya yang sesuai dengan kepribadian Anda! </h2>     </div>
        </div>
      </section>
      <section className='h-auto w-full py-20 flex flex-col items-center justify-center'>
        <div className='grid grid-cols-4 gap-14'>
            <div data-aos="fade-up" data-aos-duration="1000" className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={ketik} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Kemeja Batik Bu Dian</h1>
                    <h2 className='h-28 text-xs text-justify'>Dibuat dengan motif batik tradisional yang indah, kemeja karya Bu Dian adalah perpaduan sempurna antara keanggunan dan gaya kontemporer. </h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={melayu} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Melayu Heritage Clothing</h1>
                    <h2 className='h-28 text-xs text-justify'>Melayu Heritage Clothing,menyediakan koleksi baju Melayu yang terbuat dari bahan-bahan berkualitas tinggi.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={muslim} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Aura Muslimah</h1>
                    <h2 className='h-28 text-xs text-justify'>Menghadirkan koleksi pakaian muslim yang dirancang dengan detail yang sempurna dan menggunakan bahan-bahan berkualitas tinggi untuk memastikan kenyamanan .</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={kegan} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Kemeja Elegan</h1>
                    <h2 className='h-28 text-xs text-justify'>Menghadirkan koleksi kemeja yang tidak hanya memenuhi kebutuhan fungsional sehari-hari Anda, tetapi juga memberikan sentuhan gaya yang unik dan elegan.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={shirt} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Shirt Esensial</h1>
                    <h2 className='h-28 text-xs text-justify'>Menyajikan beragam pilihan kaos untuk pria, wanita, dan anak-anak, mulai dari kaos polos yang sederhana hingga kaos dengan desain grafis yang mencolok.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={streat} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Streatwear  Collection</h1>
                    <h2 className='h-28 text-xs text-justify'>Menampilkan berbagai pilihan pakaian streetwear yang modern dan trendi, mulai dari kaos, jaket, celana, hingga aksesori yang akan menambahkan sentuhan edgy pada gaya Anda.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={elegan} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Elegance Boutique</h1>
                    <h2 className='h-28 text-xs text-justify'>Koleksi kami mencakup berbagai pilihan busana wanita, mulai dari gaun yang anggun, blus yang modis, rok yang elegan, hingga jumpsuit yang nyaman.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={hijab} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Hijab Chic Boutique</h1>
                    <h2 className='h-28 text-xs text-justify'>Destinasi utama Anda untuk menemukan busana wanita muslim yang elegan dan modis.Koleksi kami mencakup berbagai pilihan busana muslimah. </h2>
                    <div className='relative flex justify-center '>
                        <Link className='bottom-10 font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            
        </div>
        <button className='text-center font-body font-bold text-primary py-1 px-7 rounded-xl mt-10 border-2 border-primary'>Lebih Banyak</button>
      </section>
      <Footer/>
    </>
  )
}

export default Busana