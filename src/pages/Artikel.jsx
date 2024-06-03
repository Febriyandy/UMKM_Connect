import React from 'react'
import Navbar from '../components/navbar'
import Foto from"../assets/images/bgartikel.png"
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
          <img src={Foto} className='h-96 w-full object-cover' alt="" />
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
      <h1 className='font-bold text-xl px-20 font-body'>Artikel Terbaru</h1>
      <section className='h-auto my-10 w-full flex flex-col items-center font-body'>
        <div className='flex gap-5'>
          <div className='w-72 h-auto rounded-2xl border border-[#DCDCDC]'>
            <img src={artikel1} className='w-full rounded-2xl object-cover' alt="" />
            <div className='p-5'>
              <h1 className='font-bold'>Mengoptimalkan Pengelolaan Keuangan untuk Usaha Menengah Kebawah</h1>
              <h3 className='text-sm text-justify pt-3'>Usaha menengah kebawah (UMKM) adalah tulang punggung ekonomi di banyak negara. Namun, seringkali UMKM menghadapi tantangan dalam mengelola keuangan mereka dengan efisien. <br />.</h3>
              <div className='text-center mt-5 '>
              <Link className='font-body text-white px-20 rounded-xl py-2 bg-primary'>Lihat Detail</Link>
              </div>
            </div>
          </div>
          <div className='w-72 h-auto rounded-2xl border border-[#DCDCDC]'>
            <img src={artikel2} className='w-full rounded-2xl object-cover' alt="" />
            <div className='p-5'>
              <h1 className='font-bold'>Tips Pengelolaan Keuangan Efektif untuk Usaha Menengah Kebawah</h1>
              <h3 className='text-sm text-justify pt-3'>Pengelolaan keuangan yang efektif adalah salah satu kunci kesuksesan usaha menengah ke bawah. Dalam artikel ini, kita akan membahas beberapa tips dan praktik terbaik yang dapat membantu Anda mengelola...</h3>
              <div className='text-center mt-5 '>
              <Link className='font-body text-white px-20 rounded-xl py-2 bg-primary'>Lihat Detail</Link>
              </div>
            </div>
          </div>
          <div className='w-72 h-auto rounded-2xl border border-[#DCDCDC]'>
            <img src={artikel3} className='w-full rounded-2xl object-cover' alt="" />
            <div className='p-5'>
              <h1 className='font-bold'>Strategi Membangun Dana Darurat Bisnis</h1>
              <h3 className='text-sm text-justify pt-3'>Pentingnya memiliki dana darurat bisnis dan memberikan strategi praktis untuk membangunnya. Ini termasuk langkah-langkah untuk mengalokasikan dana darurat, menentukan jumlah yang sesuai, dan bagaimana menggunakannya dalam...</h3>
              <div className='text-center mt-5 '>
              <Link className='font-body text-white px-20 rounded-xl py-2 bg-primary'>Lihat Detail</Link>
              </div>
            </div>
          </div>
          <div className='w-72 h-auto rounded-2xl border border-[#DCDCDC]'>
            <img src={artikel4} className='w-full rounded-2xl object-cover' alt="" />
            <div className='p-5'>
              <h1 className='font-bold'>Cara Efektif Menggunakan Teknologi dalam Pengelolaan Keuangan Bisnis</h1>
              <h3 className='text-sm text-justify pt-3'>Pebisnis usaha menengah kebawah dapat menggunakan teknologi terbaru dalam pengelolaan keuangan bisnis. Ini mencakup aplikasi keuangan, perangkat lunak akuntansi, dan alat digital lainnya yang dapat...</h3>
              <div className='text-center mt-5 '>
              <Link className='font-body text-white px-20 rounded-xl py-2 bg-primary'>Lihat Detail</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className='font-bold text-xl px-20 font-body'>Artikel Terbaru</h1>
      <section className='h-auto my-10 w-full flex flex-col items-center font-body'>
        <div className='flex gap-5'>
          <div className='w-72 h-auto rounded-2xl border border-[#DCDCDC]'>
            <img src={artikel1} className='w-full rounded-2xl object-cover' alt="" />
            <div className='p-5'>
              <h1 className='font-bold'>Mengoptimalkan Pengelolaan Keuangan untuk Usaha Menengah Kebawah</h1>
              <h3 className='text-sm text-justify pt-3'>Usaha menengah kebawah (UMKM) adalah tulang punggung ekonomi di banyak negara. Namun, seringkali UMKM menghadapi tantangan dalam mengelola keuangan mereka dengan efisien. <br />.</h3>
              <div className='text-center mt-5 '>
              <Link className='font-body text-white px-20 rounded-xl py-2 bg-primary'>Lihat Detail</Link>
              </div>
            </div>
          </div>
          <div className='w-72 h-auto rounded-2xl border border-[#DCDCDC]'>
            <img src={artikel2} className='w-full rounded-2xl object-cover' alt="" />
            <div className='p-5'>
              <h1 className='font-bold'>Tips Pengelolaan Keuangan Efektif untuk Usaha Menengah Kebawah</h1>
              <h3 className='text-sm text-justify pt-3'>Pengelolaan keuangan yang efektif adalah salah satu kunci kesuksesan usaha menengah ke bawah. Dalam artikel ini, kita akan membahas beberapa tips dan praktik terbaik yang dapat membantu Anda mengelola...</h3>
              <div className='text-center mt-5 '>
              <Link className='font-body text-white px-20 rounded-xl py-2 bg-primary'>Lihat Detail</Link>
              </div>
            </div>
          </div>
          <div className='w-72 h-auto rounded-2xl border border-[#DCDCDC]'>
            <img src={artikel3} className='w-full rounded-2xl object-cover' alt="" />
            <div className='p-5'>
              <h1 className='font-bold'>Strategi Membangun Dana Darurat Bisnis</h1>
              <h3 className='text-sm text-justify pt-3'>Pentingnya memiliki dana darurat bisnis dan memberikan strategi praktis untuk membangunnya. Ini termasuk langkah-langkah untuk mengalokasikan dana darurat, menentukan jumlah yang sesuai, dan bagaimana menggunakannya dalam...</h3>
              <div className='text-center mt-5 '>
              <Link className='font-body text-white px-20 rounded-xl py-2 bg-primary'>Lihat Detail</Link>
              </div>
            </div>
          </div>
          <div className='w-72 h-auto rounded-2xl border border-[#DCDCDC]'>
            <img src={artikel4} className='w-full rounded-2xl object-cover' alt="" />
            <div className='p-5'>
              <h1 className='font-bold'>Cara Efektif Menggunakan Teknologi dalam Pengelolaan Keuangan Bisnis</h1>
              <h3 className='text-sm text-justify pt-3'>Pebisnis usaha menengah kebawah dapat menggunakan teknologi terbaru dalam pengelolaan keuangan bisnis. Ini mencakup aplikasi keuangan, perangkat lunak akuntansi, dan alat digital lainnya yang dapat...</h3>
              <div className='text-center mt-5 '>
              <Link className='font-body text-white px-20 rounded-xl py-2 bg-primary'>Lihat Detail</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Artikel