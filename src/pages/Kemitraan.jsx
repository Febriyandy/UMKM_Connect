import React, {useEffect} from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'
import Mitra from '../assets/images/mitra.png'


const Kemitraan = () => {
  useEffect(() => {
    document.title = 'Kemitraan';
  }, []);
  return (
    <>
    <Navbar/>
    <section className='w-full h-auto py-20 bg-white flex '>
      <div className='w-1/2 h-full pl-20 pr-10 flex flex-col justify-center font-body'>
        <h1 className='font-bold text-2xl text-primary py-5'>Selamat Datang di Halaman Kemitraan UMKMConnect</h1>
        <h2 className='text-justify'>Kami percaya bahwa kolaborasi adalah kunci kesuksesan. Di sini, kami membuka pintu untuk berbagai bentuk kemitraan yang saling menguntungkan. Bagi anda yang mempunyai Usaha Micro Kecil dan Menengah  yang tertarik untuk bekerja sama dengan kami, mari kita jalin kemitraan yang kuat dan berkelanjutan.</h2>
        <h1 className='font-bold text-xl text-primary py-5'>Manfaat Kemitraan</h1>
        <ul className='list-disc list-outside pl-5 text-justify'>
        <li>Akses ke pasar yang lebih luas dengan potensi peningkatan penjualan yang signifikan.</li>
        <li>Dukungan promosi yang kuat untuk meningkatkan visibilitas merek Anda.</li>
        <li>Kesempatan untuk berkolaborasi dalam acara promosi dan kegiatan pemasaran.</li>
        <li>Kemitraan yang transparan dan saling menguntungkan bagi kedua belah pihak.</li>
        </ul>
        <h1 className='font-bold text-xl text-primary py-5'>Syarat dan Ketentuan</h1>
        <ul className='list-disc list-outside pl-5 text-justify'>
        <li>Proses pendaftaran mudah dan cepat.</li>
        <li>Pembayaran yang jelas dan teratur sesuai dengan kesepakatan</li>
        <li>Tanggung jawab yang jelas dan saling dihormati antara kedua belah pihak</li>
        </ul>
        <h2 className='text-justify py-5'>Untuk informasi lebih lanjut atau untuk memulai percakapan mengenai kemitraan potensial, silakan isi formulir kontak di bawah ini atau hubungi kami melalui kontak yang tertera.</h2>
      </div>
      <div className='w-1/2 h-full pr-20 pl-10 flex flex-col justify-center'>
        <img src={Mitra} className='object-cover w-full h-auto' alt="" />
        <div className='w-3/4 h-40 rounded-xl border border-[#DCDCDC] shadow-lg mx-auto p-5'>
          <h1 className='font-bold font-body text-2xl pb-5 text-primary'>Siap berkembang bersama UMKMConnect?</h1>
          <Link to="/Login" className='font-body py-2  px-3 bg-primary text-white rounded-lg'>Gabung Sekarang</Link>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Kemitraan