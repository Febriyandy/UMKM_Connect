import React, {useEffect} from 'react'
import Navbar from '../components/navbar'
import about from '../assets/images/about3.png'
import Foto from '../assets/images/foto1.png'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import Background from "../assets/images/bglogin.jpg";

const TentangKami = () => {
    // Membuat Judul Halaman
    useEffect(() => {
        document.title = 'Tentang Kami';
      }, []);
  return (
    <>
    <Navbar/>
    <section className='w-full h-screen relative'>
        <img src={Background} className=' w-full h-full object-cover' alt="" />
        <div className='w-full h-screen top-0 left-0 absolute to-white flex '>
        <div data-aos="zoom-in" data-aos-duration="1000" className=' w-1/2 h-full flex flex-col justify-center px-20 font-body'>
            <h1 className='text-2xl text-white font-bold py-5'>Tentang Kami</h1>
            <h2 className='text-lg text-white font-semibold text-justify'>Selamat datang di UMKM Connect, tempat berkumpulnya UMKM lokal yang berbakat dan berdedikasi. Kami adalah platform yang didedikasikan untuk mendukung dan mempromosikan UMKM di seluruh Indonesia</h2>
        </div>
        <div className='w-1/2 h-full p-20 flex justify-center items-center'>
            <img src={about} data-aos="zoom-in" data-aos-duration="1000" className='w-full h-auto mt-10'  alt="" />
        </div>
    </div>
    </section>
    <section className='h-auto w-full bg-white py-16 flex '>
        <div data-aos="fade-up" data-aos-duration="1000" className='w-1/2  h-full flex flex-col justify-center px-20 font-body'>
            <h1 className='font-bold text-xl text-primary py-5'>Siapa Kami?</h1>
            <h2 className='text-justify leading-7'>Dengan semangat untuk mendorong pertumbuhan ekonomi lokal dan memperluas jangkauan pasar bagi para pengusaha kecil, UMKM Connect hadir sebagai wadah bagi kolaborasi, promosi, dan pemberdayaan UMKM di berbagai sektor. UMKM Connect didirikan oleh sekelompok individu yang peduli terhadap pertumbuhan UMKM di Indonesia. Kami percaya bahwa UMKM adalah tulang punggung ekonomi negara ini dan memiliki potensi besar untuk berkembang lebih jauh dengan dukungan yang tepat. Melalui UMKM Connect, kami berkomitmen untuk menyediakan platform yang memungkinkan para pelaku usaha kecil untuk terhubung, belajar, dan tumbuh bersama.</h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className='w-1/2  h-full flex flex-col justify-center px-20 font-body'>
            <h1 className='font-bold text-xl text-primary py-5'>Apa yang Kami Tawarkan?</h1>
            <h2 className='font-bold'>1. Jaringan Luas</h2>
            <h2 className='text-justify leading-7'>Kami memiliki jaringan luas yang terdiri dari UMKM dari berbagai sektor dan wilayah di Indonesia. Dengan bergabung dengan UMKM Connect, Anda akan menjadi bagian dari komunitas yang bersemangat dan mendukung.</h2>
            <h2 className='font-bold'>2. Promosi dan Pemasaran</h2>
            <h2 className='text-justify leading-7'>Kami menyediakan berbagai layanan promosi dan pemasaran untuk membantu meningkatkan visibilitas dan penjualan produk Anda. Dari platform online hingga acara promosi offline, kami membantu Anda mencapai pasar yang lebih luas.</h2>
            <h2 className='font-bold'>3. Kemitraan dan Kolaborasi</h2>
            <h2 className='text-justify leading-7'>Kami memfasilitasi kemitraan dan kolaborasi antara UMKM, serta dengan pihak-pihak lain seperti supplier, distributor, dan lembaga keuangan. Kolaborasi ini membuka peluang baru dan mendukung pertumbuhan bisnis Anda.</h2>
        </div>
    </section>
    <section className='h-96 mt-10 w-full flex flex-col items-center font-body'>
        <div data-aos="fade-up" data-aos-duration="1000" className='w-4/5 h-4/5 bg-primary rounded-2xl flex'>
            <div className='w-1/2 pl-10 pr-5 -mt-6 py-10 flex flex-col justify-center '>
                <h1 className='font-bold text-xl text-white py-5'>Mari Bergabung Bersama Kami!</h1>
                <h2 className='text-white text-justify'>Apakah Anda seorang pemilik usaha kecil yang  bersemangat atau seorang pelanggan yang mencari produk berkualitas dari UMKM lokal, UMKM Connect adalah tempatnya. Bergabunglah dengan kami dalam perjalanan untuk mendukung pertumbuhan UMKM Indonesia dan membangun ekonomi yang lebih inklusif dan berkelanjutan.</h2>
            </div>
            <div className='w-1/2 pl-5 pr-10 py-5 flex flex-col justify-center'>
                <div className='h-1/2 w-full relative'>
                    <img data-aos="zoom-in" data-aos-duration="1000" src={Foto} className='w-3/4 opacity-85 mx-auto h-full object-cover rounded-xl' alt="" />
                    <h1 className='absolute top-6 w-56 font-bold text-white left-20'>Siap berkembang bersama UMKMConnect?</h1>
                    <Link to="/Login" className='absolute top-20 left-20 py-1 px-3 bg-primary text-white rounded-lg'>Gabung Sekarang</Link>
                </div>
                <div className='h-1/2 w-full px-5'>
                    <h2 className='mt-5 text-justify text-white'>Jika Anda memiliki pertanyaan lebih lanjut atau ingin berpartisipasi dalam misi kami, jangan ragu untuk menghubungi kami. Kami sangat senang untuk berkolaborasi dan bekerja sama dengan Anda!</h2>
                </div>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default TentangKami