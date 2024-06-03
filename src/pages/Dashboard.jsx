import React from 'react';
import Navbar from '../components/navbar';
import Foto from "../assets/images/foto1.png";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineChevronDown } from "react-icons/hi";
import Footer from '../components/footer';
import makanan from "../assets/images/makanan.png"
import minuman from "../assets/images/minuman.png"
import busana from "../assets/images/busana.png"
import kerajinan from "../assets/images/kerajinan.png"
import { Link } from 'react-router-dom';
import darmo from "../assets/images/darmo.png"
import milkshake from "../assets/images/milkshake.png"
import hamidah from "../assets/images/hamidah.png"
import abinaya from "../assets/images/abinaya.png"
import mamalis from "../assets/images/mamalis.png"
import artikel1 from "../assets/images/artikel1.png"
import artikel2 from "../assets/images/artikel2.png"
import artikel3 from "../assets/images/artikel3.png"
import artikel4 from "../assets/images/artikel4.png"
import bgartikel from "../assets/images/bgartikel.png"

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className=' w-full h-auto bg-[#14142B] relative'>
          <img src={Foto} className='opacity-35 h-screen w-full object-cover' alt="" />
          <div className='flex flex-col items-center h-full w-full absolute top-10 '>
            <h1 className='font-body font-bold text-white text-2xl text-center mt-24'>
              Selamat Datang di UMKMConnect <br /> Konsumennya Saja Sudah Digital, UMKM-nya Juga Dong
            </h1>
            <div className='relative w-1/2 mt-20'>
              <input 
                type="text" 
                className='w-full h-14 rounded-lg text-lg font-body outline-none p-4 pr-12' 
                placeholder='Search....'
              />
              <IoIosSearch className='absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-gray-500'  />
            </div>
            <h2 className='font-body text-white text-center w-3/4 mt-20'>
            UMKMConnect adalah jembatan bagi anda dan UMKM yang akan menghidupkan ekonomi lokal. Temukan beragam produk berkualitas dari UMKM seluruh Indonesia dengan mudah, dari kuliner lezat hingga kerajinan tangan unik, semuanya ada disini.
            </h2>
            <div className='mt-14'>
              <h1 className='font-body text-white'>Scroll Kebawah</h1>
              <HiOutlineChevronDown className='text-2xl text-white mx-auto bg-primary w-8 h-12 rounded-2xl'/>
            </div>
          </div>
        </div>
      </section>
      <section className='h-96 w-full flex flex-col items-center font-body'>
        <h1 className='font-bold text-xl mt-10'>Kategori Produk</h1>
        <div className='flex mt-8 gap-20'>
            <div className='w-48 h-60 shadow-lg border rounded-xl p-4'>
              <img src={makanan} className='w-full object-cover rounded-xl' alt="" />
              <div className='text-center py-3'>
              <Link to="/Makanan" className='text-xl font-bold text-primary'>Makanan</Link>
              </div>   
            </div>
            <div className='w-48 h-60 shadow-lg border rounded-xl p-4'>
              <img src={minuman} className='w-full object-cover rounded-xl' alt="" />
              <div className='text-center py-3'>
              <Link to="/Minuman" className='text-xl font-bold text-primary'>Minuman</Link>
              </div>   
            </div>
            <div className='w-48 h-60 shadow-lg border rounded-xl p-4'>
              <img src={busana} className='w-full object-cover rounded-xl' alt="" />
              <div className='text-center py-3'>
              <Link to="/Busana" className='text-xl font-bold text-primary'>Busana</Link>
              </div>   
            </div>
            <div className='w-48 h-60 shadow-lg border rounded-xl p-4'>
              <img src={kerajinan} className='w-full object-cover rounded-xl' alt="" />
              <div className='text-center py-3'>
              <Link to="/Kerajinan" className='text-xl font-bold text-primary'>Kerajinan</Link>
              </div>   
            </div>
        </div>
      </section>
      <section className='h-96 mt-10 w-full flex flex-col items-center font-body'>
        <div className='w-4/5 h-4/5 bg-primary rounded-2xl flex flex-col items-center'>
        <h1 className='font-bold text-white text-xl mt-10 '>Partner UMKM</h1>
        <div className='flex gap-10'>
            <div className='w-40 h-56 p-4'>
              <img src={darmo} alt="" />
              <div className='text-center py-3'>
              <Link className='text-lg font-bold text-white'>Warung Mbah Darmo</Link>
              </div> 
            </div>
            <div className='w-40 h-56  p-4'>
              <img src={milkshake} alt="" />
              <div className='text-center py-3'>
              <Link className='text-lg font-bold text-white'>Milkshake Tentang Kita</Link>
              </div> 
            </div>
            <div className='w-40 h-56  p-4'>
              <img src={hamidah} alt="" />
              <div className='text-center py-3'>
              <Link className='text-lg font-bold text-white'>Bucket Bunga  Ibu Hamidah</Link>
              </div> 
            </div>
            <div className='w-40 h-56  p-4'>
              <img src={abinaya} alt="" />
              <div className='text-center py-3'>
              <Link className='text-lg font-bold text-white'>Kedai Abinaya</Link>
              </div> 
            </div>
            <div className='w-40 h-56  p-4'>
              <img src={mamalis} alt="" />
              <div className='text-center py-3'>
              <Link className='text-lg font-bold text-white'>Kedai Mamalis</Link>
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
      <section className='h-72 w-full flex bg-primary'>
       <img src={bgartikel} className='w-full object-cover absolute' alt="" />
       <div className='relative flex items-center'>
          <div>
          <img src={Foto} className='w-80 h-48 ml-32 mr-20 object-cover rounded-xl ' alt="" />
          </div>
          <div>
            <h1 className='font-body mb-6 font-bold text-2xl text-white'>Siap berkembang bersama UMKMConnect?</h1>
            <Link className='font-body text-white border border-white rounded-lg py-2 px-4'>Gabung Sekarang</Link>
          </div>
       </div>
      </section>
      <Footer/>
      
    </>
  );
}

export default Dashboard;
