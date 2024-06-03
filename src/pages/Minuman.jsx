import React from 'react'
import Navbar from '../components/navbar'
import Foto from "../assets/images/bgminum.png"
import { IoIosSearch } from "react-icons/io";
import esteh from "../assets/images/esteh.png"
import escampur from "../assets/images/escampur.png"
import jusbuah from "../assets/images/jusbuah.png"
import escendol from "../assets/images/escendol.png"
import espucok from "../assets/images/espucok.png"
import escok from "../assets/images/escok.png"
import eskamud from "../assets/images/eskamud.png"
import escinjau from "../assets/images/escinjau.png"
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const Minuman = () => {
  return (
    <>
    <Navbar/>
    <section>
        <div className=' w-full h-96 bg-[#14142B] relative'>
          <img src={Foto} className='opacity-35 h-96 w-full object-cover' alt="" />
          <div className='flex flex-col items-center h-full w-full absolute top-5 '>
            <h1 className='font-body font-bold text-white text-2xl text-center mt-20'>
            Selamat Datang di Pilihan Minuman Kami!
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
            Temukan segarnya minuman khas dari para UMKM lokal kami. Dibuat dengan bahan-bahan berkualitas dan resep tradisional, setiap tegukan memberikan sensasi yang tak tertandingi. Mari jelajahi ragam minuman kami dan dukung para pengusaha lokal!            </h2>
          </div>
        </div>
      </section>
      <section className='h-auto w-full py-20 flex flex-col items-center justify-center'>
        <div className='grid grid-cols-4 gap-14'>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={esteh} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Es Teh Tarik Mama Ros</h1>
                    <h2 className='h-28 text-xs text-justify'>Nikmati kesegaran teh tarik khas Mama Ros yang memikat dengan kelembutan dan rasa yang pas. Sajikan dengan es batu yang meluncur dalam gelas, cocok untuk melepas dahaga di hari yang panas</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={escampur} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Es Campur ABCD</h1>
                    <h2 className='h-28 text-xs text-justify'>Es campur sekilas memang mirip dengan es teler, yang membedakan hanya es campur isian buahnya lebih beragam. Namun biasanya es campur tiap daerah berbeda-beda untuk isiannya.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={jusbuah} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Jus Buah Segar</h1>
                    <h2 className='h-28 text-xs text-justify'>Segar dan menyehatkan, dua kata yang paling tepat untuk menggambarkan jus buah. Minuman yang  banyak disukai dari berbagai kalangan orang dewasa, remaja, sampai degan anak-anak.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={escendol} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Es Cemdol Manis</h1>
                    <h2 className='h-28 text-xs text-justify'>Minuman cendol dari tepung beras dan tepung sagu yang direbus dengan air daun pandan dan disajikan dengan sirup gula merah dan santan serta rasanya yang manis, segar, dan gurih </h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={espucok} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Alpukat Kocok Yummy</h1>
                    <h2 className='h-28 text-xs text-justify'>Alpukat kocok merupakan salah satu minuman kekinian yang dilengkapi beraneka macam topping. Minuman ini juga memberikan cukup rasa kenyang dari lemak sehat buah alpukat.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={escok} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Es Coklat Abunawas</h1>
                    <h2 className='h-28 text-xs text-justify'>Es Coklat Abunawas dengan rasa yang unik dan enak dengan  menggunakan dark coklat impor asli berkualitas tinggi serta campuran hanya susu kental manis yang difrothing dan  ditambahkan es batu.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={eskamud} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Es Kelapa Muda Pak Mamat</h1>
                    <h2 className='h-28 text-xs text-justify'>Es Kelapa muda yang disajikan dengan es dan gula bisa menjadi menu takjil nikmat untuk berbuka puasa. Selain rasanya yang segar, air kelapa juga punya banyak manfaat bagi kesehatan tubuh.</h2>
                    <div className='relative flex justify-center '>
                        <Link className='absolute font-body text-sm text-white px-12 rounded-lg py-1  bg-primary'>Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className='w-60 h-80  rounded-xl border shadow-lg border-[#DCDCDC]'>
                <img src={escinjau} className='w-full h-2/5 object-cover rounded-xl' alt="" />
                <div className='px-5 pt-2 font-body'>
                    <h1 className='font-bold text-primary'>Es Cincau Hijau Manis Mama Ros</h1>
                    <h2 className='h-28 text-xs text-justify'>Es cincau hijau dengan daunnya yang diremas dan dicampur dengan air matang. Es cincau hijau disajikan dengan gula merah dan santan serta parutan es batu yang menambah kesegaran</h2>
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

export default Minuman