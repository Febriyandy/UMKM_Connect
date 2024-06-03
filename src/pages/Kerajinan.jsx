import React from 'react'
import Navbar from '../components/navbar'
import Foto from "../assets/images/bgjinan.png"
import { IoIosSearch } from "react-icons/io";
import miniatur from "../assets/images/miniatur.png"
import tastangan from "../assets/images/tastangan.png"
import kreasimanik from "../assets/images/kreasimanik.png"
import bouqet from "../assets/images/bouqet.png"
import karbu from "../assets/images/karbu.png"
import homedec from "../assets/images/homedec.png"
import kayu from "../assets/images/kayu.png"
import kerang from "../assets/images/kerang.png"
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const Kerajinan = () => {
  return (
    <>
    <Navbar/>
    <section>
        <div className=' w-full h-96 bg-[#14142B] relative'>
          <img src={Foto} className='opacity-35 h-96 w-full object-cover' alt="" />
          <div className='flex flex-col items-center h-full w-full absolute top-5 '>
            <h1 className='font-body font-bold text-white text-2xl text-center mt-20'>
            Telusuri Karya Kreatif di Dunia Kerajinan Tangan Kami!
            </h1>
            <div className='relative w-1/2 mt-10'>
              <input 
                type="text" 
                className='w-full h-14 rounded-lg text-lg font-body outline-none p-4 pr-12' 
                placeholder='Search....'
              />
              <IoIosSearch className='absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-gray-500'  />
            </div>
            <h2 className='font-body text-white text-center w-3/4 mt-10'>
            Temukan keindahan dan keunikannya dalam setiap kerajinan tangan buatan para pengrajin lokal kami. Dari perhiasan hingga dekorasi rumah, setiap karya dipenuhi dengan kelembutan, ketekunan, dan keterampilan tangan yang memukau. Mari jelajahi dunia kerajinan tangan yang kaya akan inspirasi!  </h2>  
                </div>
        </div>
      </section>
      <section className='h-auto w-full py-20 flex flex-col items-center justify-center'>
        <div className='grid grid-cols-4 gap-14'>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={miniatur} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Miniatur Kapal Layar </h1>
                    <h2 className='h-28 text-xs text-justify'>Miniatur kapal layar karya  adalah contoh sempurna dari ketelitian dan detail yang luar biasa. Dibuat dengan tangan terampil.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={tastangan} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Tas Tangan Judy&Frances</h1>
                    <h2 className='h-28 text-xs text-justify'>Tas unik fungsional dan tahan lama dengan metode anyaman dengan tas bahan kulit, polyester, batik, maupun songket. Untuk bagian dalam tas menggunakan bahan suede dan pegangan dari kulit asli.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={kreasimanik} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Kreasi Manik-Manik</h1>
                    <h2 className='h-28 text-xs text-justify'>Setiap gelang dan cicin yang kami buat adalah hasil dari kerajinan tangan yang teliti dan hati-hati. Kami menggunakan berbagai jenis manik-manik berkualitas tinggi.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={bouqet} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Dream Bouqet</h1>
                    <h2 className='h-28 text-xs text-justify'>Setiap buket bunga yang kami buat adalah karya seni yang unik dan istimewa. Kami menggunakan bahan-bahan yang berkualitas tinggi.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={karbu} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Karya Bambu dan Kayu</h1>
                    <h2 className='h-28 text-xs text-justify'>Setiap miniatur kendaraan yang kami buat adalah karya seni yang mempersembahkan keunikan dan keindahan alam. Kami menggunakan bambu atau kayu berkualitas tinggi.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={homedec} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Home Decoration</h1>
                    <h2 className='h-28 text-xs text-justify'>Menyediakan berbagai dekorasi rumah yang aestektik dan elegan,membikin rumah nyaman dan indah.dibikin oleh tangan-tangan pengrajin lokal.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={kayu} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>DIY Kayu Indah</h1>
                    <h2 className='h-28 text-xs text-justify'>Tempat di mana keindahan alam bertemu dengan keahlian tangan dalam bentuk kotak tisu yang terbuat dari kayu berkualitas tinggi.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={kerang} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Kreasi Kerang Laut</h1>
                    <h2 className='h-28 text-xs text-justify'>Tempat di mana keajaiban alam bertemu dengan keahlian manusia dalam bentuk kerajinan unik yang terinspirasi oleh keindahan laut. </h2>
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

export default Kerajinan